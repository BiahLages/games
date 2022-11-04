import { error, isPw, validateEmail, validateName, validatePassword } from "../../utils/validation.tools";
import { BackgroundForm, SubmitButtom, SwicherContainer, SwicherButtom, ContainerVerification, VerificationResponse } from "./styles";
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
	const [valueCPF, setValueCPF] = useState("");
	const [validPasswordCharacters, setValidPasswordCharacters] = useState(false);
	const [validPasswordLength, setValidPasswordLength] = useState(false);

	const action = async (): Promise<void> => {
		const isValidEmail = validateEmail(valueEmail);
		const isValidPassword = validatePassword(valuePassword);

		if (isValidEmail && isValidPassword) {
			const data: DataType = {
				email: valueEmail,
				password: valuePassword,
				cpf: valueCPF,
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
		<BackgroundForm>
			<h1>{!mode ? `Register` : `SignIn`}</h1>
			<form name="Gate">
				<div>
					{!mode && (
						<Input
							label="name"
							placeholder="User Name"
							type="text"
							value={setValueName}
						/>
					)}
					<Input
						label="email"
						placeholder="username2022@email.com"
						type="email"
						value={setValueEmail}
					/>
					<Input
						label="password"
						placeholder="********"
						type="password"
						value={setValuePassword}
					/>
					<ContainerVerification>
						<VerificationResponse>{validPasswordLength ? "✅" : "⛔️"} 8 characters</VerificationResponse>
						<VerificationResponse>{validPasswordCharacters ? "✅" : "⛔️"} Uppercase | Lowercase | Symbol | Number</VerificationResponse>
					</ContainerVerification>
					<Input
						label="CPF"
						placeholder="01234567890"
						type="text"
						value={setValueCPF}
					/>
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
			<SwicherContainer>
				<p>{mode ? `Don't have an account?` : `Alread have an account?`}</p>

				<SwicherButtom
					onClick={(): void => {
						setMode(!mode);
					}}
				>
					{mode ? `Register` : `SignIn`}
				</SwicherButtom>
			</SwicherContainer>
		</BackgroundForm>
	);
};

export default Gate;
