import * as S from "./style";
import { useState, useEffect } from "react";
import { ContainerProfiles, DivAdd } from "./style";
import { useProfiles } from "src/contexts/ProfilesContext";
import Profile from "../Profile";
import Input from "../Input";

const Profiles = () => {
	const { getAllProfiles, userProfiles, createProfile } = useProfiles();
	const [addProfile, setAddProfile] = useState(true);
	const [nameProfile, setNameProfile] = useState("");
	const [imgProfile, setImgProfile] = useState("");

	useEffect(() => {
		getAllProfiles();
	}, []);

	switch (addProfile) {
		case true: {
			return (
				<S.Overlay>
					<S.FormCreateProfile>
						<S.HeaderForm>
							<h2>Create a new Profile</h2>
							<span
								onClick={(): void => {
									setAddProfile(!addProfile);
								}}
							>
								➕
							</span>
						</S.HeaderForm>
						<Input
							label="Name"
							placeholder="new User"
							type="text"
							value={setNameProfile}
						/>
						<Input
							label="Image"
							placeholder="https://linkimage"
							type="text"
							value={setImgProfile}
						/>
						<S.Button
							onClick={(): void => {
								createProfile(nameProfile, imgProfile);
								setAddProfile(false);
							}}
						>
							Create
						</S.Button>
					</S.FormCreateProfile>
				</S.Overlay>
			);
		}
		case false: {
			return (
				<S.ContainerProfiles>
					{userProfiles.map((profile, i) => {
						return (
							<Profile
								profile={profile}
								currentKey={i}
								key={i}
							/>
						);
					})}
					<S.DivAdd>
						<div
							onClick={(): void => {
								setAddProfile(true);
							}}
						>
							➕
						</div>
					</S.DivAdd>
				</S.ContainerProfiles>
			);
		}
	}
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
			<DivAdd>
				<div
					onDoubleClick={() => {
						createProfile("title", "imageUrl");
					}}
				>
					➕
				</div>
			</DivAdd>
			
		</ContainerProfiles>
	);
};

export default Profiles;
