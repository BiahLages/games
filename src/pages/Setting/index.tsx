import { Container, ContentContainer } from "../styles";
import Menu from "../../components/Menu";
import Settings from "src/components/Settings";

const Setting = (): JSX.Element => {
	return (
		<>
			<Menu path="settings" />
			<Container>
				<ContentContainer>
					<Settings />
				</ContentContainer>
			</Container>
		</>
	);
};

export default Setting;
