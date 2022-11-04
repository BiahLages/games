import { SettingsContent } from "./styles";
import { Container, ContentContainer } from "../styles";
import Menu from "../../components/Menu";
import { useConfigUser } from "src/contexts/ConfigUserContext";

const Settings = (): JSX.Element => {
	const { name,email } = useConfigUser();
	console.log(name.name,email);
	return (
		<>
			<Menu path="settings" />
			<Container>
				<ContentContainer>
					<SettingsContent>
						<div>Aqui irão os componentes de settings da página e do usuário</div>
						<button>Update profile</button>
						<button>Check all profiles</button>
					</SettingsContent>
				</ContentContainer>
			</Container>
		</>
	);
};

export default Settings;
