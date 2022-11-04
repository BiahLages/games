import { LoginContainer } from "./styles";
import Menu from "../../components/Menu";
import { Container } from "../styles";
import Gate from "src/components/Gate";

const Login = (): JSX.Element => {
	return (
		<Container>
			{/* <Menu path="login" /> */}
			<LoginContainer>
				<Gate />
			</LoginContainer>
		</Container>
	);
};

export default Login;
