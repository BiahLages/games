import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "src/components/Input";
import { api } from "src/helpers/Api";
import { isPw } from "src/utils/validation.tools";
import { BackgroundForm, SubmitButtom, ContainerVerification, VerificationResponse } from "../../components/Gate/styles";
import { LoginContainer } from "../Login/styles";
import { Container } from "../styles";

function Recover() {
	const { id, token } = useParams();

	const [password, setpassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [validPasswordCharacters, setValidPasswordCharacters] = useState(false);
	const [validPasswordLength, setValidPasswordLength] = useState(false);

	const changePassword = async () => {
		if (validPasswordCharacters && validPasswordLength) {
			if (confirmPassword === password) {
				const headers = {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				};

				const data = {
					password,
				};

				await api
					.patch(`/users/${id}`, data, headers)
					.then(() => {
						console.log("changePassword ", "Senha atualizada");
					})
					.catch(error => console.log("changePassword", `Erro ${error.status} senha não atualizada`));
			} else {
				console.log("changePassword", "As senhas não conferem");
			}
		} else {
			console.log("changePassword", "A senha deve ter senha 8 caracteres com 1 letra 1 número e 1 caractere especial");
		}
	};

	useEffect(() => {
		setValidPasswordCharacters(isPw.test(password));
		setValidPasswordLength(password.length > 7);
	}, [password]);

	return (
		<>
			{/* <fieldset>
				<fieldset>
					<label htmlFor="">Nova Senha</label>
					<input
						type="password"
						onChange={e => {
							setpassword(e.target.value);
						}}
					/>
				</fieldset>

				<br />

				<fieldset>
					<label htmlFor="">Confirme a nova senha</label>
					<input
						type="password"
						onChange={e => {
							setConfirmPassword(e.target.value);
						}}
					/>
				</fieldset>

				<br />

				<button onClick={() => changePassword()}>Enviar</button>
			</fieldset> */}

			<Container>
				<LoginContainer>
					<BackgroundForm>
						<h1>Recovery</h1>
						<>
							<Input
								label="new password"
								placeholder="username2022@email.com"
								type="password"
								value={setpassword}
							/>
							<Input
								label="password"
								placeholder="********"
								type="password"
								value={setConfirmPassword}
							/>
							<ContainerVerification>
								<VerificationResponse>{password === confirmPassword ? "✅" : "⛔️"} passwords match</VerificationResponse>
								<VerificationResponse>{validPasswordLength ? "✅" : "⛔️"} 8 characters</VerificationResponse>
								<VerificationResponse>{validPasswordCharacters ? "✅" : "⛔️"} Uppercase | Lowercase | Symbol | Number</VerificationResponse>
							</ContainerVerification>
							<div>
								<SubmitButtom onClick={(): Promise<void> => changePassword()}>Send</SubmitButtom>
							</div>
						</>
					</BackgroundForm>
				</LoginContainer>
			</Container>
		</>
	);
}

export default Recover;
