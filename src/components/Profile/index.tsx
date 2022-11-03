import { useProfiles } from "src/contexts/ProfilesContext";
import { ApiProfiles } from "../../types/interfaces/api";
import trash from "../../assets/icons/trash.png";
import edit from "../../assets/icons/edit.png";
import formEdit from "../../assets/icons/formEdit.png";
import { useState } from "react";
import Input from "../Input";

const Profile = ({ profile, currentKey }: { profile: ApiProfiles; currentKey: number }): JSX.Element => {
	const { setCurrentProfileId, editProfile, deleteProfile } = useProfiles();

	const [editingThis, setEditingThis] = useState(false);
	const [title, setTitle] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	switch (editingThis) {
		case true:
			return (
				<div key={`form${currentKey}`}>
					<Input
						label="new Title"
						type="text"
						value={setTitle}
					/>
					<Input
						label="new ImageUrl"
						type="text"
						value={setImageUrl}
					/>
					<div
						key={`formEdit${currentKey}`}
						onClick={(): void => {
							editProfile(profile.id, title, imageUrl);
						}}
					>
						<img
							src={edit}
							alt="Edit profile button"
						/>
					</div>
					<div
						key={`formDel${currentKey}`}
						onClick={(): void => {
							deleteProfile(profile.id);
						}}
					>
						<img
							src={trash}
							alt="Delete profile button"
						/>
					</div>
					<div
						key={`formEditBtn${currentKey}`}
						onClick={(): void => {
							setEditingThis(!editingThis);
						}}
					>
						<img
							src={formEdit}
							alt="Delete profile button"
						/>
					</div>
				</div>
			);
		case false:
			return (
				<div key={`profile${currentKey}`}>
					<div
						key={`profileContent${currentKey}`}
						onDoubleClick={(): void => {
							setCurrentProfileId(profile.id);
						}}
					>
						<img
							key={`profileImage${currentKey}`}
							src={profile.imageUrl}
							alt={`${profile.title}'s profile`}
						/>
						<div key={`profileContentTitle${currentKey}`}>
							<h2 key={`profileTitle${currentKey}`}>{profile.title}</h2>
						</div>
					</div>
					<div
						key={`profileEditBtn${currentKey}`}
						onClick={(): void => {
							setEditingThis(!editingThis);
						}}
					>
						<img
							src={formEdit}
							alt="Delete profile button"
						/>
					</div>
				</div>
			);
	}
};
export default Profile;
