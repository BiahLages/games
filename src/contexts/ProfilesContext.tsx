import { IProfilePatcher, IProfiles } from "../types/interfaces/profiles";
import { AllProvidersProps } from "../types/interfaces/system";
import { createContext, useContext, useEffect, useState } from "react";
import { ApiProfiles } from "../types/interfaces/api";
import { useAuth } from "./AccountContext";
import { api } from "../helpers/Api";
import { error, success } from "src/utils/validation.tools";

const ProfilesContext = createContext({} as IProfiles);

export const ProfilesProvider = ({
	children,
}: AllProvidersProps): JSX.Element => {
	const { logged, currentUser, checkTokenExpiration } = useAuth();

	const [userProfiles, setUserProfiles] = useState<ApiProfiles[]>([]);
	const [currentProfileId, setCurrentProfileId] = useState<string>("");
	const [currentProfile, setCurrentProfile] = useState<
		ApiProfiles | undefined
	>();

	const getAllProfiles = (): void => {
		if (logged && currentUser) {
			const data = currentUser.user.profile;
			setUserProfiles(data);
		}
	};

	const getProfile = (): void => {
		if (logged) {
			const profile = localStorage.getItem("profile");
			if (profile) {
				const data = JSON.parse(profile);
				setCurrentProfile(data);
				setCurrentProfileId(data.id);
			}
		}
	};

	const selectProfile = (profile: ApiProfiles): void => {
		setCurrentProfile(profile);
		setCurrentProfileId(profile.id);
		localStorage.setItem("profile", JSON.stringify(profile));
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

			api.post(`/profiles`, data, headers).then((): void => {
				checkTokenExpiration();
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
				checkTokenExpiration();
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
			api.delete(`/profiles/${id}`, headers)
				.then((): void => {
					checkTokenExpiration();
					success("Perfil apagado!");
					const profile = localStorage.getItem("profile");
					if (profile) {
						const data = JSON.parse(profile);
						if (id === data.id) {
							localStorage.removeItem("profile");
						}
					}
				})
				.catch(() => error("Error ao apagar perfil !"));
		}
	};

	useEffect(() => {
		getAllProfiles();
		getProfile();
	}, [logged, currentUser]);

	return (
		<ProfilesContext.Provider
			value={{
				currentProfile,
				userProfiles,
				setCurrentProfileId,
				currentProfileId,
				setUserProfiles,
				deleteProfile,
				editProfile,
				getAllProfiles,
				selectProfile,
				createProfile,
			}}
		>
			{children}
		</ProfilesContext.Provider>
	);
};

export const useProfiles = (): IProfiles => useContext(ProfilesContext);
