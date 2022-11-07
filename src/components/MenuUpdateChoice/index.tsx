import { DeleteAccount, EditProfile, SettingsContent } from "./style";
import deleteAcc from "../../assets/icons/deleteAcc.png";
import editprofile from "../../assets/icons/editProfile.png";
import { useConfigUser } from "src/contexts/ConfigUserContext";

function MenuUpdateChoice(): JSX.Element {
	const { functions } = useConfigUser();
	return (
		<>
			<SettingsContent>
				<article>
					<div>
						<EditProfile
							src={editprofile}
							alt="Edit my profile"
							onClick={(): void => functions.handdleChangeConfigUser()}
						/>
						<span>Edit Info</span>
					</div>
					<div>
						<DeleteAccount
							src={deleteAcc}
							alt="Delete Account"
							onClick={(): void => functions.handdleChangeDeleteAccount()}
						/>
						<span>Delete account</span>
					</div>
				</article>
			</SettingsContent>
		</>
	);
}

export default MenuUpdateChoice;
