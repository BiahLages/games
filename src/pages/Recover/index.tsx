import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Input from "src/components/Input";
import { api } from "src/helpers/Api";
import { error, isPw, success } from "src/utils/validation.tools";
import { BackgroundForm, SubmitButtom, ContainerVerification, VerificationResponse } from "../../components/Gate/styles";
import { LoginContainer } from "../Login/styles";
import { Container } from "../styles";

function Recover(): JSX.Element {
	const { id, token } = useParams();

	const [password, setpassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [validPasswordCharacters, setValidPasswordCharacters] = useState(false);
	const [validPasswordLength, setValidPasswordLength] = useState(false);
	const navigate = useNavigate();

	const changePassword = async (): Promise<void> => {
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
						success("changePassword - Senha atualizada");
						setTimeout(() => navigate("/login"), 3000);
					})
					.catch(err => error(`"changePassword", Erro ${err.status} senha não atualizada`));
			} else {
				error("changePassword, As senhas não conferem");
			}
		} else {
			error("changePassword, A senha deve ter senha 8 caracteres com 1 letra 1 número e 1 caractere especial");
		}
	};

	useEffect(() => {
		setValidPasswordCharacters(isPw.test(password));
		setValidPasswordLength(password.length > 7);
	}, [password]);

	return (
		<Container>
			<LoginContainer>
				<BackgroundForm>
					<h1>Recovery</h1>
					<>
						<Input
							label="new password"
							placeholder="********"
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
	);
}

export default Recover;
