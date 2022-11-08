import { AddGame, DeleteAccount, EditProfile, SettingsContent } from "./style";
import deleteAcc from "../../assets/icons/deleteAcc.png";
import editprofile from "../../assets/icons/editProfile.png";
import addGame from "../../assets/icons/addGame.png";
import { useConfigUser } from "src/contexts/ConfigUserContext";
import { UseAdminGames } from "src/contexts/AdminGamesContext";
import CreateUpGame from "../CreateUpGame";
import { blankGame } from "src/utils/blankgame.tools";
import { useState } from "react";

function MenuUpdateChoice(): JSX.Element {
	const { functions } = useConfigUser();
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			{openModal && (
				<CreateUpGame
					game={blankGame}
					mode={"create"}
					close={() => {
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
					<div>
						<AddGame
							src={addGame}
							alt="Add Game"
							onClick={(): void => setOpenModal(!openModal)}
						/>
						<span>Add new game</span>
					</div>
				</article>
			</SettingsContent>
		</>
	);
}

export default MenuUpdateChoice;
