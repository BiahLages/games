import { ApiGames, ApiGenres } from "./api";

export interface GameProviderData {
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
