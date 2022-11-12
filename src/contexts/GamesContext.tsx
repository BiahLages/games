import { createContext, useContext, useEffect, useState } from "react";
import { AllProvidersProps } from "../types/interfaces/system";
import { IGameProviderData } from "../types/interfaces/games";
import { useOrderSettings } from "./OrderSettingsContext";
import { ApiGames, ApiGenres } from "../types/interfaces/api";
import { useAuth } from "./AccountContext";
import { api } from "../helpers/Api";
import { error } from "src/utils/validation.tools";

const GameContext = createContext({} as IGameProviderData);

export const GamesProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const {
		orderBy,
		orderDirection,
		pageLength,
		currentGenre,
		setCurrentGenre,
	} = useOrderSettings();
	const { logged, currentUser } = useAuth();

	const [allGames, setAllGames] = useState<ApiGames[]>([]);
	const [allGenres, setAllGenres] = useState<ApiGenres[]>([]);
	const [lastValidGamePage, setLastValidGamePage] = useState(false);
	const [lastValidGenrePage, setLastValidGenrePage] = useState(false);
	const [games, setGames] = useState<ApiGames[]>([]);
	const [genres, setGenres] = useState<ApiGames[]>([]);
	const [currentGamesPage, setCurrentGamesPage] = useState(1);
	const [currentGenresPage, setCurrentGenresPage] = useState(1);
	const [status, getStatus] = useState(false);
	const token = localStorage.getItem("token");

	const headers = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
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

	const handleGetAllGenres = async (): Promise<void> => {
		await api.get(`/genres`).then(res => {
			const dto = res.data.sort((a: ApiGenres, b: ApiGenres) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			});
			setAllGenres(dto);
			setCurrentGenre(dto[0].id);
		});
	};

	const handleGetGenres = async (): Promise<void> => {
		if (!headers.headers.Authorization.includes("null")) {
			const gamesLength = await api
				.get(`/genres/entity/info/${currentGenre}`, headers)
				.catch(err => {
					if (err.response.status !== 404) {
						console.log(err);
						throw new Error("error");
					}
				});
			await api
				.get(
					`/genres/search/${currentGenre}/${orderBy}/${orderDirection}/${
						pageLength * 3
					}/${currentGenresPage}`,
					headers,
				)
				.then(res => {
					const dto: ApiGames[] = [];
					for (const game of [...genres, ...res.data.games]) {
						if (!dto.some(({ id }) => id === game.id)) {
							dto.push(game);
						}
					}
					setGenres(dto);
					if (gamesLength) {
						setLastValidGenrePage(
							(gamesLength.data % (pageLength * 3) === 0 &&
								gamesLength.data / (pageLength * 3) ===
									currentGenresPage) ||
								(gamesLength.data % (pageLength * 3) !== 0 &&
									Math.floor(
										gamesLength.data / (pageLength * 3),
									) +
										1 ===
										currentGenresPage),
						);
					}
				});
		}
	};

	const handleGetGames = async (): Promise<void> => {
		if (!headers.headers.Authorization.includes("null")) {
			const gamesLength = await api
				.get("/games/entity/info", headers)
				.catch(err => {
					if (err.response.status !== 404) {
						console.log(err);
						throw new Error("error");
					}
				});
			await api
				.get(
					`/games/search/${orderBy}/${orderDirection}/${pageLength}/${currentGamesPage}`,
					headers,
				)
				.then(res => {
					setGames(res.data);
					if (gamesLength) {
						setLastValidGamePage(
							(gamesLength.data % pageLength === 0 &&
								gamesLength.data / pageLength ===
									currentGamesPage) ||
								(gamesLength.data % pageLength !== 0 &&
									Math.floor(gamesLength.data / pageLength) +
										1 ===
										currentGamesPage),
						);
					}
				});
		}
	};

	const handleGetGameById = async (
		id: string,
	): Promise<ApiGames | undefined> => {
		if (logged && currentUser) {
			return await api
				.get(`/games/${id}`, headers)
				.then(res => {
					const game: ApiGames = res.data;
					const {
						id,
						title,
						image,
						description,
						year,
						score,
						trailer,
						gameplay,
						genres,
						createdAt,
						updatedAt,
					} = game;
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
					error("game not found, please reload");
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
	}, [currentGamesPage]);

	useEffect(() => {
		handleGetGames();
	}, [status, allGames]);

	useEffect(() => {
		handleGetGenres();
	}, [currentGenre]);

	useEffect(() => {
		handleGetAllGames();
		handleGetAllGenres();
		handleGetGenres();
	}, [status]);

	useEffect(() => {
		handleGetServerStatus();
	}, []);

	return (
		<GameContext.Provider
			value={{
				games,
				genres,
				status,
				allGames,
				allGenres,
				setGenres,
				handleGetGenres,
				currentGamesPage,
				currentGenresPage,
				handleGetGameById,
				lastValidGamePage,
				lastValidGenrePage,
				setCurrentGamesPage,
				setCurrentGenresPage,
				setLastValidGamePage,
				handleGetServerStatus,
				setLastValidGenrePage,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export const useGame = (): IGameProviderData => useContext(GameContext);
