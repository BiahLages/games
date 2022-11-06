import React, { createContext, useContext } from "react";
import { IAdminGames, ICardGames } from "src/types/interfaces/games";
import { AllProvidersProps } from "../types/interfaces/system";
import { useAuth } from "./AccountContext";
import { api } from "../helpers/Api";

const AdminGameContext = createContext({} as IAdminGames);

export const AdminGamesProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged, currentUser } = useAuth();

	const createGame = (title: string, image: string, year: string, description: string, score: string, trailer: string, gameplay: string, genreId: string): void => {
		const data: ICardGames = {
			title,
			image,
			year,
			description,
			score,
			trailer,
			gameplay,
			genreId,
		};
		if (logged && currentUser) {
			const headers = {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			};
			api.post(`/games`, data, headers)
				.then((res): void => {
					console.log(res);
				})
				.catch(error => {
					console.log(error);
				});
		}
	};

	const editGame = (title: string, imageUrl: string, year: string, description: string, score: string, trailer: string, gameplay: string, genreId: string): void => {
		const data: ICardGames = {};
		if (logged && currentUser) {
			if (title) data.title = title;
			if (imageUrl) data.image = imageUrl;
			if (year) data.year = year;
			if (description) data.description = description;
			if (score) data.score = score;
			if (trailer) data.trailer = trailer;
			if (gameplay) data.gameplay = gameplay;
			if (genreId) data.genreId = genreId;
			const headers = {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			};
			api.patch(`/games/${data.genreId}`, data, headers)
				.then((res): void => {
					console.log(res);
				})
				.catch(error => console.log(error));
		}
	};

	const deleteGame = (id: string): void => {
		if (logged && currentUser) {
			const headers = {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			};
			api.delete(`/games/${id}`, headers).then((): void => {});
		}
	};

	return (
		<AdminGameContext.Provider
			value={{
				createGame,
				editGame,
				deleteGame,
			}}
		>
			{children}
		</AdminGameContext.Provider>
	);
};

export const UseAdminGames = (): IAdminGames => useContext(AdminGameContext);
