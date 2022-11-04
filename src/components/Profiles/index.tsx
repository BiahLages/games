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
		<section>
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
			<div
				onDoubleClick={() => {
					createProfile("title", "imageUrl");
				}}
			>
				➕
			</div>
		</section>
	);
};

export default Profiles;
