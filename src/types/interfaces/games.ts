import React from "react";
import { ApiGames, ApiGenres } from "./api";

export interface GameProviderData {
	allGames: ApiGames[];
	submit: boolean;
	setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
	lastValidPage: boolean;
	setLastValidPage: React.Dispatch<React.SetStateAction<boolean>>;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	status: boolean;
	games: ApiGames[];
	handleGetGameById: (id: string) => Promise<ApiGames | undefined>;
	handleGetServerStatus: () => void;
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
}
