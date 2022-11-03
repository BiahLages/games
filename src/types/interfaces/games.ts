import { ApiGames } from "./api";

export interface GameProviderData {
	// endOfPage: boolean;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	status: boolean;
	games: ApiGames[];
	handleGetServerStatus: () => void;
}
