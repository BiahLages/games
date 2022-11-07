import { useConfigUser } from "src/contexts/ConfigUserContext";
import MenuUpdateAdmin from "../MenuUpdateAdmin";
import MenuUpdateChoice from "../MenuUpdateChoice";
import MenuUpdateUser from "../MenuUpdateUser";

const Settings = (): JSX.Element => {
	const { states } = useConfigUser();

	return (
		<>
			{states.switchMenuUpdateChoice && <MenuUpdateChoice />}
			{states.switchMenuUpdateUSer && <MenuUpdateUser />}
			{states.switchMenuUpdateAdmin && <MenuUpdateAdmin />}
		</>
	);
};

export default Settings;
