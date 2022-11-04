import { LoginContainer } from "./styles";
import Menu from "../../components/Menu";
import { Container } from "../styles";
import Gate from "src/components/Login";

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
