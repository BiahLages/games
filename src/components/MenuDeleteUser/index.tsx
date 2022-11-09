import { useConfigUser } from "src/contexts/ConfigUserContext";
import { success } from "src/utils/validation.tools";
import { BackgroundForm, SYesOrNoButton } from "./styles";

function MenuDeleteUser(): JSX.Element {
	const { functions } = useConfigUser();
	return (
		<>
			<BackgroundForm>
				<h1>Do you really want to delete your account?</h1>
				<div>
					<SYesOrNoButton
						answer="yes"
						onClick={(): void => {
							functions.handdleDeleteUser();
							success("Successfully Deleted");
						}}
					>
						Yes
					</SYesOrNoButton>
					<SYesOrNoButton
						answer="no"
						onClick={(): void => {
							functions.handdleConfigMenus();
						}}
					>
						No
					</SYesOrNoButton>
				</div>
			</BackgroundForm>
		</>
	);
}

export default MenuDeleteUser;
