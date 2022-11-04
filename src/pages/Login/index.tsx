import { LoginContainer } from "./styles";
import { Container } from "../styles";
import Gate from "src/components/Gate";

const Login = (): JSX.Element => {
	return (
		<Container>
			<LoginContainer>
				<Gate />
			</LoginContainer>
		</Container>
	);
};

export default Login;
