import React from "react";
import { ApiGames, ApiGenres } from "./api";

export interface IGameProviderData {
	allGames: ApiGames[];
	allGenres: ApiGenres[];
	currentGamesPage: number;
	currentGenresPage: number;
	games: ApiGames[];
	genres: ApiGames[];
	lastValidGamePage: boolean;
	lastValidGenrePage: boolean;
	handleGetGameById: (id: string) => Promise<ApiGames | undefined>;
	handleGetGenres: () => void;
	handleGetServerStatus: () => void;
	setCurrentGamesPage: React.Dispatch<React.SetStateAction<number>>;
	setCurrentGenresPage: React.Dispatch<React.SetStateAction<number>>;
	setGenres: React.Dispatch<React.SetStateAction<ApiGames[]>>;
	setLastValidGamePage: React.Dispatch<React.SetStateAction<boolean>>;
	setLastValidGenrePage: React.Dispatch<React.SetStateAction<boolean>>;
	status: boolean;
}

export interface ICardGames {
	id?: string;
	title?: string;
	image?: string;
	description?: string;
	year?: string;
	score?: string;
	trailer?: string;
	gameplay?: string;
	genres?: ApiGenres[];
	genreId?: string;
}

export interface IAdminGames {
	createGame: (data: ICardGames) => Promise<void>;
	deleteGame: (id: string) => Promise<void>;
	editGame: (id: string, data: ICardGames) => Promise<void>;
}

export interface IStyleScore {
	score: number;
}
