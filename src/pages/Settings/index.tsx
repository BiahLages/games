import { CheckProfiles, EditProfile, SettingsContent } from "./styles";
import { Container, ContentContainer } from "../styles";
import Menu from "../../components/Menu";
import { useConfigUser } from "src/contexts/ConfigUserContext";
import profiles from "../../assets/icons/profiles.png";
import editprofile from "../../assets/icons/editProfile.png"

const Settings = (): JSX.Element => {
	const { name, email } = useConfigUser();
	console.log(name.name, email);
	return (
		<>
			<Menu path="settings" />
			<Container>
				<ContentContainer>
					<SettingsContent>
						<div>Aqui irão os componentes de settings da página e do usuário</div>	
						<CheckProfiles src={profiles} alt="Check all profiles"/>
						<EditProfile src={editprofile} alt="Edit my profile"/>
					</SettingsContent>
				</ContentContainer>
			</Container>
		</>
	);
};

export default Settings;
