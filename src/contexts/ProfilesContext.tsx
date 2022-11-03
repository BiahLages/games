import { AllProvidersProps } from "../types/interfaces/system";
import { createContext, useContext, useState } from "react";
import { useAuth } from "./AccountContext";
import { IProfilePatcher } from "src/types/interfaces/profiles";
import { api } from "src/helpers/Api";
import { ApiProfiles } from "src/types/interfaces/api";

export interface IProfiles {
	userProfiles: ApiProfiles[];
	currentProfileId: string;
	setCurrentProfileId: React.Dispatch<React.SetStateAction<string>>;
	getAllProfiles: () => void;
	editProfile: (id: string, title: string, imageUrl: string) => void;
	deleteProfile: (id: string) => void;
}

const ProfilesContext = createContext({} as IProfiles);

export const ProfilesProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged, currentUser } = useAuth();

	const [userProfiles, setUserProfiles] = useState<ApiProfiles[]>([]);
	const [currentProfileId, setCurrentProfileId] = useState<string>("");

	const getAllProfiles = (): void => {
		if (logged && currentUser) {
			const headers = {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			};
			api.get(`/users/${currentUser.user.id}`, headers).then(res => {
				console.log(res);
				if (res.status === 200) {
					setUserProfiles(res.data.profile);
				}
			});
		}
	};

	const editProfile = (id: string, title: string, imageUrl: string): void => {
		const data: IProfilePatcher = {};

		if (title !== "") data.title = title;
		if (imageUrl !== "") data.imageUrl = imageUrl;

		if (logged && currentUser) {
			api.patch(`/profiles/${id}`, data).then(res => {
				console.log(res);
			});
		}
	};

	const deleteProfile = (id: string): void => {
		if (logged && currentUser) {
			api.delete(`/profiles/${id}`).then(res => {
				console.log(res);
			});
		}
	};

	return (
		<ProfilesContext.Provider
			value={{
				userProfiles,
				getAllProfiles,
				currentProfileId,
				setCurrentProfileId,
				editProfile,
				deleteProfile,
			}}
		>
			{children}
		</ProfilesContext.Provider>
	);
};

export const useProfiles = (): IProfiles => useContext(ProfilesContext);
