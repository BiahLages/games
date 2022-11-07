import React, { createContext, useContext, useEffect, useState } from "react";
import { AllProvidersProps } from "../types/interfaces/system";
import { GameProviderData } from "../types/interfaces/games";
import { useOrderSettings } from "./OrderSettingsContext";
import { ApiGames, ApiGenres } from "../types/interfaces/api";
import { useAuth } from "./AccountContext";
import { api } from "../helpers/Api";

const GameContext = createContext({} as GameProviderData);

export const GamesProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { orderBy, orderDirection, category, pageLength } = useOrderSettings();
	const { logged, currentUser } = useAuth();

	const [allGames, setAllGames] = useState<ApiGames[]>([]);
	const [games, setGames] = useState<ApiGames[]>([]);
	const [allGenres, setGenres] = useState<ApiGenres[]>([]);
	const [gamesByGender, setGamesByGender] = useState<ApiGames[]>([]);
	const [lastValidPage, setLastValidPage] = useState(false);
	const [shownCards, setShownCards] = useState(3);
	const [status, getStatus] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [lastPage, setLastPage] = useState(0);

	const token = localStorage.getItem("token");

	const headers = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	// Tem que pensar como vai fazer

	// const handleGetGamesByGenre = (id: string): void => {
	// 	if (status && category !== "all") {
	// 		api.get(`/genres/search/${id}/${orderBy}/${orderDirection}/${pageLength}/${currentPage}`).then(res => {
	// 			if (games.length <= 1) {
	// 				setGames(res.data);
	// 			} else if (games.length < allGames.length) {
	// 				const data: ApiGames[] = [...games, ...res.data];
	// 				setLastValidPage(currentPage);
	// 				setGames(data);
	// 			} else {
	// 				setCurrentPage(1);
	// 			}
	// 		});
	// 	}
	// };

	const handleGetAllGenres = async (): Promise<void> => {
		await api.get(`/genres`).then(res => {
			setGenres(res.data);
		});
	};

	const handleGetGamesByGenre = async (id: string): Promise<void> => {
		if (true) {
			await api.get(`/genres/${id}`, headers).then(res => {
				setGamesByGender(res.data.games);
			});
		}
	};

	const handleGetGames = async (): Promise<void> => {
		if (category === "all" && !headers.headers.Authorization.includes("null")) {
			await api.get(`/games/search/${orderBy}/${orderDirection}/${pageLength}/${currentPage}`, headers).then(res => {
				setGames(res.data);
				if (allGames.length !== 0) {
					setShownCards(shownCards + res.data.length);
					if (shownCards >= allGames.length) {
						setLastValidPage(true);
					} else if (shownCards !== allGames.length) {
						setShownCards(shownCards + res.data.length);
						setLastValidPage(false);
						setLastPage(currentPage);
					}
				}
			});
		}
	};

	const handleFormatLink = (
		paramGameplay: string,
		paramTrailer: string,
	): {
		gameplay: string;
		trailer: string;
	} => {
		let gameplay: string;
		let trailer: string;
		if (paramGameplay.includes("watch")) {
			const gameplayTemp = paramGameplay.split("=");
			gameplay = `https://www.youtube.com/embed/${gameplayTemp[1]}`;
		} else {
			gameplay = paramGameplay;
		}

		if (paramTrailer.includes("watch")) {
			const trailerTemp = paramTrailer.split("=");
			trailer = `https://www.youtube.com/embed/${trailerTemp[1]}`;
		} else {
			trailer = paramTrailer;
		}

		return { gameplay, trailer };
	};

	const handleGetGameById = async (id: string): Promise<ApiGames | undefined> => {
		if (logged && currentUser) {
			return await api
				.get(`/games/${id}`, headers)
				.then(res => {
					const game: ApiGames = res.data;
					const { id, title, image, description, year, score, trailer, gameplay, genres, createdAt, updatedAt } = game;
					const linkEdited = handleFormatLink(gameplay, trailer);
					return {
						id,
						title,
						description,
						image,
						year,
						score,
						...linkEdited,
						genres,
						createdAt,
						updatedAt,
					};
				})
				.catch(err => {
					console.log(err);
					return undefined;
				});
		}
	};
	const handleGetAllGames = async (): Promise<void> => {
		if (status) {
			await api.get("/games", headers).then(res => {
				setAllGames(res.data);
			});
		}
	};
	const handleGetServerStatus = (): void => {
		api.get("/status").then(res => {
			if (res.status === 200) {
				getStatus(true);
			}
		});
	};

	useEffect(() => {
		handleGetGames();
	}, [currentPage]);

	useEffect(() => {
		handleGetGames();
	}, [status, allGames]);

	useEffect(() => {
		handleGetAllGames();
	}, [status]);

	useEffect(() => {
		handleGetGames();
	}, [status]);

	useEffect(() => {
		handleGetAllGenres();
	}, [status]);

	return (
		<GameContext.Provider
			value={{
				allGenres,
				gamesByGender,
				allGames,
				lastValidPage,
				setLastValidPage,
				currentPage,
				setCurrentPage,
				status,
				games,
				handleGetGameById,
				handleGetServerStatus,
				handleGetGamesByGenre,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export const useGame = (): GameProviderData => useContext(GameContext);
