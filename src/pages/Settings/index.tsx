import { SettingsContent } from "./styles";
import { Container, ContentContainer } from "../styles";
import Menu from "../../components/Menu";

const Settings = (): JSX.Element => {
	return (
		<>
			<Menu path="settings" />
			<ContentContainer>
				<SettingsContent>
					<div>Aqui irão os componentes de settings da página e do usuário</div>
					<button>Update profile</button>
					<button>Check all profiles</button>
				</SettingsContent>
			</ContentContainer>
		</Container>
	);
};

export default Settings;
