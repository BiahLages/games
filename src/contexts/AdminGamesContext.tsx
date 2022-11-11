import { AllProvidersProps } from "../types/interfaces/system";
import { IAdminGames, ICardGames } from "../types/interfaces/games";
import { createContext, useContext } from "react";
import { useAuth } from "./AccountContext";
import { api } from "../helpers/Api";
import { error, success } from "src/utils/validation.tools";

const AdminGameContext = createContext({} as IAdminGames);

export const AdminGamesProvider = ({
	children,
}: AllProvidersProps): JSX.Element => {
	const { logged, currentUser } = useAuth();

	const createGame = async ({
		title,
		image,
		year,
		description,
		score,
		trailer,
		gameplay,
		genreId,
	}: ICardGames): Promise<void> => {
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
				.then((): void => {
					success("Registrated");
				})
				.catch(error => {
					error(error);
				});
		}
	};

	const editGame = async (
		id: string,
		{
			title,
			image,
			year,
			description,
			score,
			trailer,
			gameplay,
			genreId,
		}: ICardGames,
	): Promise<void> => {
		const data: ICardGames = {};
		if (logged && currentUser) {
			if (title) data.title = title;
			if (image) data.image = image;
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
			api.patch(`/games/${id}`, data, headers)
				.then((): void => {
					success("Patched");
				})
				.catch(err => {
					error(err);
					console.log(err);
				});
		}
	};

	const deleteGame = async (id: string): Promise<void> => {
		if (logged && currentUser) {
			const headers = {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			};
			api.delete(`/games/${id}`, headers)
				.then((): void => {
					success("Deleted");
				})
				.catch(err => {
					error(err);
					console.log(err);
				});
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
