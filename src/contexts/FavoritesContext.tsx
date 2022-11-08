import { createContext, useContext, useEffect, useState } from "react";
import { FavoritesProviderData } from "../types/interfaces/favorites";
import type { AllProvidersProps } from "../types/interfaces/system";
import { ApiFavorites } from "../types/interfaces/api";
import { useAuth } from "./AccountContext";
import { api } from "../helpers/Api";

const FavoriteContext = createContext({} as FavoritesProviderData);

export const FavoritesProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged, currentUser } = useAuth();

	const [favorites, setFavorites] = useState<ApiFavorites[]>([]);

	const handleGetFavorites = async (): Promise<void> => {
		const token = localStorage.getItem("token");
		const profile: string | null = localStorage.getItem("profile");
		const profileParse = profile ? JSON.parse(profile) : null;
		console.log(profile);
		console.log(profileParse);

		const headers = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		if (profileParse) {
			await api
				.get(`/favorites/profiles/${profileParse.id}`, headers)
				.then(res => {
					if (res.status === 200) {
						setFavorites(res.data);
						console.log("getFavorites", res);
					}
				})
				.catch(error => console.log(error));
		}
	};

	const favThis = async (id: string, isFav: boolean): Promise<void> => {
		if (logged && currentUser) {
			const token = localStorage.getItem("token");
			switch (isFav) {
				case true:
					const favId = favorites.find(e => {
						if (e.games) return e.games.id === id;
					});
					console.log(favId);
					if (favId) {
						const deleteData = {
							headers: {
								Authorization: `Bearer ${token}`,
							},
							data: {
								favoriteId: favId[0].id,
							},
						};
						await api.delete(`/favorites`, deleteData).then((res: { status: number }) => {
							if (res.status === 204) {
								handleGetFavorites();
							}
						});
					}
					break;
				case false:
					const headers = {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					};
					const profile: string | null = localStorage.getItem("profile");
					const profileParse = profile ? JSON.parse(profile) : null;
					const body = {
						profileId: profileParse.id,
						games: id,
					};
					await api.post(`/favorites`, body, headers).then((res: { status: number }) => {
						if (res.status === 201) {
							console.log("status favoritos", res.status);
							handleGetFavorites();
						}
					});
					break;
			}
		}
	};

	useEffect(() => {
		if (logged) handleGetFavorites();
	}, [logged]);

	return <FavoriteContext.Provider value={{ favorites, handleGetFavorites, favThis }}>{children}</FavoriteContext.Provider>;
};

export const useFavorites = (): FavoritesProviderData => useContext(FavoriteContext);
