import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundForm, ContainerVerification, VerificationResponse } from "src/components/Gate/styles";
import Input from "src/components/Input";
import { api } from "src/helpers/Api";
import { success } from "src/utils/validation.tools";
import { LoginContainer } from "../Login/styles";
import { SubmitButtom } from "../Setting/styles";
import { Container } from "../styles";
import { SContentButton } from "./style";

const Forgot = (): JSX.Element => {
	const [email, setEmail] = useState<string>("");
	const [change, setChange] = useState(false);

	const navigate = useNavigate();

	const handleForgotPassword = async (): Promise<void> => {
		if (email !== "") {
			await api
				.get(`users/recover/${email}`)
				.then(res => {
					success(res.data.message);
					setChange(true);
					setTimeout(() => navigate("/"), 4000);
				})
				.catch(() => {
					success("Email sent if it exists");
					setChange(true);
					setTimeout(() => navigate("/"), 4000);
				});
		}
	};

	return (
		<Container>
			<LoginContainer>
				<BackgroundForm>
					{!change && (
						<>
							<h1>Forgot the password</h1>
							<Input
								label="Email"
								placeholder="username2022@email.com"
								type="email"
								value={setEmail}
							/>
							<ContainerVerification>
								<VerificationResponse>{email ? "✅" : "⛔️"} Email valid</VerificationResponse>
							</ContainerVerification>
							<SContentButton>
								<SubmitButtom onClick={(): Promise<void> => handleForgotPassword()}>Send</SubmitButtom>
							</SContentButton>
						</>
					)}
					{change && (
						<>
							<h1>Email sent ✅</h1>
							<h1>Remember to check spam box</h1>
						</>
					)}
				</BackgroundForm>
			</LoginContainer>
		</Container>
	);
};

export default Forgot;
