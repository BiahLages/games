import { IProfilePatcher, IProfiles } from "../types/interfaces/profiles";
import { AllProvidersProps } from "../types/interfaces/system";
import { createContext, useContext, useState } from "react";
import { ApiProfiles } from "../types/interfaces/api";
import { useAuth } from "./AccountContext";
import { api } from "../helpers/Api";

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
				if (res.status === 200) {
					setUserProfiles(res.data.profile);
				}
			});
		}
	};

	const createProfile = (title: string, imageUrl: string): void => {
		const data: IProfilePatcher = {};

		if (title) data.title = title;
		if (imageUrl) data.imageUrl = imageUrl;
		if (logged && currentUser) {
			data.userId = currentUser.user.id;

			api.post(`/profiles`, data).then(res => {
				console.log(res);
			});
		}
	};

	const editProfile = (id: string, title: string, imageUrl: string): void => {
		const data: IProfilePatcher = {};
		if (logged && currentUser) {
			if (title) data.title = title;
			if (imageUrl) data.imageUrl = imageUrl;

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
				createProfile,
				currentProfileId,
				deleteProfile,
				editProfile,
				getAllProfiles,
				setCurrentProfileId,
				userProfiles,
			}}
		>
			{children}
		</ProfilesContext.Provider>
	);
};

export const useProfiles = (): IProfiles => useContext(ProfilesContext);
