import React, { createContext, useContext, useEffect, useState } from "react";
import { AllProvidersProps } from "../types/interfaces/system";
import { GameProviderData } from "../types/interfaces/games";
import { useOrderSettings } from "./OrderSettingsContext";
import { ApiGames } from "../types/interfaces/api";
import { useAuth } from "./AccountContext";
import { api } from "../helpers/Api";

const GameContext = createContext({} as GameProviderData);

export const GamesProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { orderBy, orderDirection, category, pageLength } = useOrderSettings();
	const { logged, currentUser } = useAuth();

	const [allGames, setAllGames] = useState<ApiGames[]>([]);
	const [games, setGames] = useState<ApiGames[]>([]);
	const [lastValidPage, setLastValidPage] = useState(false);
	const [shownCards, setShownCards] = useState(3);
	const [status, getStatus] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [lastPage, setLastPage] = useState(0);
	const [submit, setSubmit] = useState(false);

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

	useEffect(() => {
		
		if (submit) {
			console.log(shownCards)
			setShownCards(shownCards - 3);
			setLastValidPage(false);
			console.log(shownCards)
			if (shownCards >= allGames.length) {
				console.log("EFFECT SHOW=ALL");
				console.log(shownCards);
				console.log(allGames.length);
				// setLastValidPage(true);
			} else if (shownCards !== allGames.length) {
				console.log("EFFECT SHOWN!=ALL");
				console.log(shownCards);
				console.log(allGames.length);
				setShownCards(shownCards + 3);
				setLastValidPage(false);
				setLastPage(currentPage);
			}
		}
		setSubmit(false);
	}, [submit]);

	const handleGetGames = async (): Promise<void> => {
		if (category === "all" && !headers.headers.Authorization.includes("null")) {
			// console.log("lastPage", lastPage)
			// console.log("currentPage", currentPage)
			await api.get(`/games/search/${orderBy}/${orderDirection}/${pageLength}/${currentPage}`, headers).then(res => {
				setGames(res.data);
			
			if (allGames.length !== 0) {

				if(lastPage < currentPage) {
				if (shownCards >= allGames.length) {
					console.log("AWAIT SHOW=ALL");
					console.log(shownCards);
					console.log(allGames.length);
					setLastValidPage(true);
				} else if (shownCards !== allGames.length) {
					console.log("AWAIT SHOWN!=ALL");
					console.log(shownCards);
					console.log(allGames.length);
					setShownCards(shownCards + res.data.length);
					setLastValidPage(false);
					setLastPage(currentPage);
				}
			}

			}
		});

		
		}
	};
	const handleGetGameById = async (id: string): Promise<ApiGames | undefined> => {
		if (logged && currentUser) {
			return await api
				.get(`/games/${id}`, headers)
				.then(res => {
					return res.data;
				})
				.catch(err => {
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage]);

	useEffect(() => {
		handleGetGames();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status, allGames]);

	useEffect(() => {
		handleGetAllGames();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status]);

	useEffect(() => {
		handleGetServerStatus();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<GameContext.Provider
			value={{
				submit,
				setSubmit,
				allGames,
				lastValidPage,
				setLastValidPage,
				currentPage,
				setCurrentPage,
				status,
				games,
				handleGetGameById,
				handleGetServerStatus,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export const useGame = (): GameProviderData => useContext(GameContext);
