import { Container, ContentContainer } from "../styles";
import Menu from "../../components/Menu";
import Settings from "src/components/Settings";
import { SContainerSettings } from "./styles";

const Setting = (): JSX.Element => {
	return (
		<>
			<Menu path="settings" />
			<Container>
				<ContentContainer>
					<SContainerSettings>
						<Settings />
					</SContainerSettings>
				</ContentContainer>
			</Container>
		</>
	);
};

export default Setting;
