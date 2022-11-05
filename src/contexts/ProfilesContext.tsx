import { IProfilePatcher, IProfiles } from "../types/interfaces/profiles";
import { AllProvidersProps } from "../types/interfaces/system";
import { createContext, useContext, useEffect, useState } from "react";
import { ApiProfiles } from "../types/interfaces/api";
import { useAuth } from "./AccountContext";
import { api } from "../helpers/Api";

const ProfilesContext = createContext({} as IProfiles);

export const ProfilesProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged, currentUser } = useAuth();

	const [userProfiles, setUserProfiles] = useState<ApiProfiles[]>([]);
	const [currentProfileId, setCurrentProfileId] = useState<string>("");
	const [currentProfile, setCurrentProfile] = useState<ApiProfiles | undefined>();

	const getAllProfiles = (): void => {
		if (logged && currentUser) {
			const headers = {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			};
			api.get(`/users/${currentUser.user.id}`, headers).then((res): void => {
				if (res.status === 200) {
					setUserProfiles(res.data.profile);
				}
			});
		}
	};

	const selectProfile = (): void => {
		const selected = userProfiles.find(profile => {
			return profile.id === currentProfileId;
		});

		if (selected) setCurrentProfile(selected);
	};

	const createProfile = (title: string, imageUrl: string): void => {
		const data: IProfilePatcher = {};

		if (title) data.title = title;
		if (imageUrl) data.imageUrl = imageUrl;
		if (logged && currentUser) {
			const headers = {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			};
			data.userId = currentUser.user.id;

			console.log(data);
			api.post(`/profiles`, data, headers).then((): void => {
				getAllProfiles();
			});
		}
	};

	const editProfile = (id: string, title: string, imageUrl: string): void => {
		const data: IProfilePatcher = {};
		if (logged && currentUser) {
			if (title) data.title = title;
			if (imageUrl) data.imageUrl = imageUrl;
			const headers = {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			};
			api.patch(`/profiles/${id}`, data, headers).then((): void => {
				getAllProfiles();
			});
		}
	};

	const deleteProfile = (id: string): void => {
		if (logged && currentUser) {
			const headers = {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			};
			api.delete(`/profiles/${id}`, headers).then((): void => {
				getAllProfiles();
			});
		}
	};

	useEffect(() => {
		selectProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentProfileId]);

	return (
		<ProfilesContext.Provider
			value={{
				createProfile,
				currentProfile,
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
