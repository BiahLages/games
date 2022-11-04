import { SettingsContent } from "./styles";
import { Container, ContentContainer } from "../styles";
import Menu from "../../components/Menu";
import { useConfigUser } from "src/contexts/ConfigUserContext";

const Settings = (): JSX.Element => {
	const { name,email } = useConfigUser();
	console.log(name.name,email);
	return (
		<Container>
			<Menu path="settings" />
			<ContentContainer>
				<SettingsContent>
					<div>Aqui irão os componentes de settings da página e do usuário</div>
				</SettingsContent>
			</ContentContainer>
		</Container>
	);
};

export default Settings;
