import { ContainerProfiles, DivAdd } from "./style";
import { useEffect } from "react";
import { useProfiles } from "src/contexts/ProfilesContext";
import Profile from "../Profile";

const Profiles = () => {
	const { getAllProfiles, userProfiles, createProfile } = useProfiles();

	useEffect(() => {
		getAllProfiles();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ContainerProfiles>
			{userProfiles.map((profile, i) => {
				return (
					<Profile
						profile={profile}
						currentKey={i}
						key={i}
					/>
				);
			})}

			{/* div que vai criar o perfil */}

			<DivAdd>
				<div
					onDoubleClick={() => {
						createProfile("title", "imageUrl");
					}}
				>
					➕
				</div>
			</DivAdd>
			<div
				onDoubleClick={() => {
					createProfile("title", "imageUrl");
				}}
			>
				➕
			</div>
		</ContainerProfiles>
	);
};

export default Profiles;
