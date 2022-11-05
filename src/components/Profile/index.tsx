import { ContainerProfile, ContentProfile, ContainerImgProfile, NameUser, DivImgEdit, ImgEditDelete, ImgProfile, Overlay, FormEditProfile, HeaderForm, OptionsEditDelete } from "./style";
import { useProfiles } from "src/contexts/ProfilesContext";
import { ApiProfiles } from "../../types/interfaces/api";
import trash from "../../assets/icons/trash.png";
import edit from "../../assets/icons/edit.png";
import formEdit from "../../assets/icons/formEdit.png";
import { useState } from "react";
import Input from "../Input";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Profile = ({ profile, currentKey }: { profile: ApiProfiles; currentKey: number }): JSX.Element => {
	const { getAllProfiles, setCurrentProfileId, editProfile, deleteProfile } = useProfiles();

	const navigate: NavigateFunction = useNavigate();

	const [editingThis, setEditingThis] = useState(false);
	const [title, setTitle] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	switch (editingThis) {
		case true:
			return (
				<Overlay>
					<FormEditProfile key={`form${currentKey}`}>
						<HeaderForm>
							<div
								key={`formEditBtn${currentKey}`}
								onClick={(): void => {
									setEditingThis(!editingThis);
								}}
							>
								<ImgEditDelete
									src={formEdit}
									alt="Delete profile button"
								/>
							</div>
							<h2>Edit your Profile!</h2>
						</HeaderForm>
						<Input
							label="new Title"
							placeholder="new Title"
							type="text"
							value={setTitle}
						/>
						<Input
							label="new ImageUrl"
							placeholder="new ImageUrl"
							type="text"
							value={setImageUrl}
						/>

						<OptionsEditDelete>
							<div
								key={`formEdit${currentKey}`}
								onClick={(): void => {
									editProfile(profile.id, title, imageUrl);
									getAllProfiles();
								}}
							>
								<ImgEditDelete
									src={edit}
									alt="Edit profile button"
								/>
							</div>
							<div
								key={`formDel${currentKey}`}
								onClick={(): void => {
									deleteProfile(profile.id);
									getAllProfiles();
								}}
							>
								<ImgEditDelete
									src={trash}
									alt="Delete profile button"
								/>
							</div>
						</OptionsEditDelete>
					</FormEditProfile>
				</Overlay>
			);
		case false:
			return (
				<ContainerProfile key={`profile${currentKey}`}>
					<ContentProfile
						key={`profileContent${currentKey}`}
						onDoubleClick={(): void => {
							setCurrentProfileId(profile.id);
							navigate("/");
						}}
					>
						<ContainerImgProfile>
							<ImgProfile
								key={`profileImage${currentKey}`}
								src={profile.imageUrl}
								alt={`${profile.title}'s profile`}
							/>
						</ContainerImgProfile>
						<NameUser key={`profileContentTitle${currentKey}`}>
							<h2 key={`profileTitle${currentKey}`}>{profile.title}</h2>
						</NameUser>
					</ContentProfile>
					<DivImgEdit
						key={`profileEditBtn${currentKey}`}
						onClick={(): void => {
							setEditingThis(!editingThis);
						}}
					>
						<ImgEditDelete
							src={formEdit}
							alt="Delete profile button"
						/>
					</DivImgEdit>
				</ContainerProfile>
			);
	}
};
export default Profile;
