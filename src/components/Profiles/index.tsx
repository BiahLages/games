import * as S from "./style";
import { useState, useEffect } from "react";
import { useProfiles } from "src/contexts/ProfilesContext";
import Profile from "../Profile";
import Input from "../Input";

const Profiles = (): JSX.Element => {
	const { getAllProfiles, userProfiles, createProfile } = useProfiles();
	const [addProfile, setAddProfile] = useState(false);
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
							placeholder="Profile title"
							type="text"
							value={setNameProfile}
						/>
						<Input
							label="Image"
							placeholder="https://linkimage.com/image.png"
							type="text"
							value={setImgProfile}
						/>
						<S.Button
							onClick={(): void => {
								createProfile(nameProfile, imgProfile);
								getAllProfiles();
								setAddProfile(!addProfile);
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
								setAddProfile(!addProfile);
							}}
						>
							➕
						</div>
					</S.DivAdd>
				</S.ContainerProfiles>
			);
		}
	}
};

export default Profiles;
