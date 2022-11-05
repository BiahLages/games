import { CheckProfiles, EditProfile, SettingsContent } from "./style";
import profiles from "../../assets/icons/profiles.png";
import editprofile from "../../assets/icons/editProfile.png";
import { useConfigUser } from "src/contexts/ConfigUserContext";

function MenuUpdateChoice() {
	const { functions } = useConfigUser();
	return (
		<>
			<SettingsContent>
				<article>
					<div>
						<EditProfile
							src={editprofile}
							alt="Edit my profile"
							onClick={() => functions.handdleChangeConfigUser()}
						/>
						<span>Edit profile</span>
					</div>
					<div>
						<CheckProfiles
							src={profiles}
							alt="Check all profiles"
							onClick={() => functions.handdleChangeConfigAdmin()}
						/>
						<span>Check all profiles</span>
					</div>
				</article>
			</SettingsContent>
		</>
	);
}

export default MenuUpdateChoice;
