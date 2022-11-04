import { SettingsContent } from "./styles";
import { Container, ContentContainer } from "../styles";
import Menu from "../../components/Menu";

const Settings = (): JSX.Element => {
	return (
		<>
			<Menu path="settings" />
			<Container>
				<ContentContainer>
					<SettingsContent>
						<div>Aqui irão os componentes de settings da página e do usuário</div>
					</SettingsContent>
				</ContentContainer>
			</Container>
		</>
	);
};

export default Settings;
