import { ContainerProfile, ContentProfile, ContainerImgProfile, NameUser, DivImgEdit, ImgEditDelete, Overlay, FormEditProfile, HeaderForm, OptionsEditDelete } from "./style";
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
						<HeaderForm
							onClick={(): void => {
								setEditingThis(!editingThis);
							}}
						>
							<div key={`formEditBtn${currentKey}`}>
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
									setEditingThis(!editingThis);
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
									setEditingThis(!editingThis);
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
						onClick={(): void => {
							setCurrentProfileId(profile.id);
							navigate("/");
						}}
					>
						<ContainerImgProfile backgroundImage={profile.imageUrl} />
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
