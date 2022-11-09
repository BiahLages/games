import { useConfigUser } from "src/contexts/ConfigUserContext";
import MenuDeleteUser from "../MenuDeleteUser";
import MenuUpdateChoice from "../MenuUpdateChoice";
import MenuUpdateUser from "../MenuUpdateUser";

const Settings = (): JSX.Element => {
	const { states } = useConfigUser();

	return (
		<>
			{states.switchMenuUpdateChoice && <MenuUpdateChoice />}
			{states.switchMenuUpdateUSer && <MenuUpdateUser />}
			{states.switchMenuUpdateAdmin && <MenuDeleteUser />}
		</>
	);
};

export default Settings;
