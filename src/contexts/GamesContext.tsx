import React, { createContext, useContext, useEffect, useState } from "react";
import { AllProvidersProps } from "../types/interfaces/system";
import { GameProviderData } from "../types/interfaces/games";
import { useOrderSettings } from "./OrderSettingsContext";
import { ApiGames } from "../types/interfaces/api";
import { api } from "../helpers/Api";

const GameContext = createContext({} as GameProviderData);

export const GamesProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { orderBy, orderDirection, category, pageLength } = useOrderSettings();

	const [allGames, setAllGames] = useState<ApiGames[]>([]);
	const [games, setGames] = useState<ApiGames[]>([]);
	const [lastValidPage, setLastValidPage] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [status, getStatus] = useState(false);


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

	const handleGetGames = (): void => {
		if (category === "all") {
			api.get(`/games/${orderBy}/${orderDirection}/${pageLength}/${currentPage}`).then(res => {
				if (games.length <= 1) {
					setGames(res.data);
				} else if (games.length < allGames.length) {
					const data: ApiGames[] = [...games, ...res.data];
					setLastValidPage(currentPage);
					setGames(data);
				} else {
					setGames([]);
					setCurrentPage(1);
				}
			});
		}
	};
	const handleGetAllGames = (): void => {
		if (status) {
			api.get("/games").then(res => {
				setAllGames(res.data);
			});
		}
	};
	const handleGetServerStatus = (): void => {
		setGames([]);
		setCurrentPage(1);
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
		handleGetAllGames();
	}, [status]);

	useEffect(() => {
		handleGetGames();
	}, [status]);

	return (
		<GameContext.Provider
			value={{
				currentPage,
				setCurrentPage,
				status,
				games,
				handleGetServerStatus,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export const useGame = (): GameProviderData => useContext(GameContext);
