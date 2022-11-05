import { CheckProfiles, EditProfile, SettingsContent } from "./styles";
import { Container, ContentContainer } from "../styles";
import Menu from "../../components/Menu";
import { useConfigUser } from "src/contexts/ConfigUserContext";
import profiles from "../../assets/icons/profiles.png";
import editprofile from "../../assets/icons/editProfile.png";

const Settings = (): JSX.Element => {
	return (
		<>
			<Menu path="settings" />
			<Container>
				<ContentContainer>
					<SettingsContent>
						<article>
						<div>
						<EditProfile
							src={editprofile}
							alt="Edit my profile"
						/>	
						<span>Edit profile</span>
						</div>
						<div>
						<CheckProfiles
							src={profiles}
							alt="Check all profiles"
						/>
						<span>Check all profiles</span>						
						</div>
						</article>
					</SettingsContent>
				</ContentContainer>
			</Container>
		</>
	);
};

export default Settings;
