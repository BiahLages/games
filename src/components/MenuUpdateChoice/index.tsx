import { AddGame, DeleteAccount, EditProfile, SettingsContent } from "./style";
import deleteAcc from "../../assets/icons/deleteAcc.png";
import editprofile from "../../assets/icons/editProfile.png";
import addGame from "../../assets/icons/addGame.png";
import { useConfigUser } from "src/contexts/ConfigUserContext";
import CreateUpGame from "../CreateUpGame";
import { blankGame } from "src/utils/blankgame.tools";
import { useState } from "react";
import { useAuth } from "src/contexts/AccountContext";

function MenuUpdateChoice(): JSX.Element {
	const { functions } = useConfigUser();
	const { currentUser } = useAuth();
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			{openModal && (
				<CreateUpGame
					game={blankGame}
					mode={"create"}
					close={(): void => {
						setOpenModal(!openModal);
					}}
				/>
			)}
			<SettingsContent>
				<article>
					<div>
						<EditProfile
							src={editprofile}
							alt="Edit my profile"
							onClick={(): void => functions.handdleChangeConfigUser()}
						/>
						<span>Edit info</span>
					</div>
					<div>
						<DeleteAccount
							src={deleteAcc}
							alt="Delete Account"
							onClick={(): void => functions.handdleChangeDeleteAccount()}
						/>
						<span>Delete account</span>
					</div>
					{currentUser && currentUser.user.isAdmin && (
						<div>
							<AddGame
								src={addGame}
								alt="Add Game"
								onClick={(): void => setOpenModal(!openModal)}
							/>
							<span>Add new game</span>
						</div>
					)}
				</article>
			</SettingsContent>
		</>
	);
}

export default MenuUpdateChoice;
