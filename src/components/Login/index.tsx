import { error, isPw, validateEmail, validateName, validatePassword } from "../../utils/validation.tools";
import { SubmitButtom, SwicherButtom, VerificationResponse } from "./styles";
import { DataType } from "../../types/interfaces/users";
import { useAuth } from "../../contexts/AccountContext";
import { useEffect, useState } from "react";
import { api } from "../../helpers/Api";
import Input from "../Input";

const Gate = (): JSX.Element => {
	const { login } = useAuth();

	const [mode, setMode] = useState(true);
	const [valueName, setValueName] = useState("");
	const [valueEmail, setValueEmail] = useState("");
	const [valuePassword, setValuePassword] = useState("");
	const [validPasswordCharacters, setValidPasswordCharacters] = useState(false);
	const [validPasswordLength, setValidPasswordLength] = useState(false);

	const action = async (): Promise<void> => {
		const isValidEmail = validateEmail(valueEmail);
		const isValidPassword = validatePassword(valuePassword);

		if (isValidEmail && isValidPassword) {
			const data: DataType = {
				email: valueEmail,
				password: valuePassword,
			};

			switch (mode) {
				case false:
					const isValidName = validateName(valueName);
					if (isValidName) {
						data.name = valueName;
						data.isAdmin = false;
						const register = await api.post(`/users`, data).then(res => res);
						switch (register.status) {
							case 201:
								delete data.name;
								const loginAfterRegister = await api.post(`/auth/login`, data).then(res => res);
								switch (loginAfterRegister.status) {
									case 200:
										login(loginAfterRegister.data);
										break;

									default:
										error("couldn't login after register");
										break;
								}
								break;

							default:
								error("couldn't register");
								break;
						}
					}
					break;

				case true:
					try {
						const sigin = await api.post(`/auth/login`, data).then(res => res);
						switch (sigin.status) {
							case 200:
								login(sigin.data);
								break;

							default:
								error("Try again with correct credentials");
								break;
						}
					} catch (err) {
						error("Try again with correct credentials");
					}
					break;
			}
		}
	};

	useEffect(() => {
		setValidPasswordCharacters(isPw.test(valuePassword));
		setValidPasswordLength(valuePassword.length > 7);
	}, [valuePassword]);

	return (
		<>
			<form name="Gate">
				<div>
					{!mode && (
						<Input
							label="name"
							type="text"
							value={setValueName}
						/>
					)}
					<Input
						label="email"
						type="email"
						value={setValueEmail}
					/>
					<Input
						label="password"
						type="password"
						value={setValuePassword}
					/>
					<VerificationResponse>{validPasswordLength ? "✅" : "⛔️"} 8 characters</VerificationResponse>
					<VerificationResponse>{validPasswordCharacters ? "✅" : "⛔️"} Uppercase | Lowercase | Symbol | Number</VerificationResponse>
				</div>
				<SubmitButtom
					onClick={(e): void => {
						action();
						e.preventDefault();
						e.stopPropagation();
					}}
				>
					{!mode ? `Register` : `SignIn`}
				</SubmitButtom>
			</form>
			<SwicherButtom
				onClick={(): void => {
					setMode(!mode);
				}}
			>
				{mode ? `Register` : `SignIn`}
			</SwicherButtom>
		</>
	);
};

export default Gate;
