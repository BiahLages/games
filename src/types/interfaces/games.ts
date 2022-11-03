import { ApiGames } from "./api";

export interface GameProviderData {
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	status: boolean;
	games: ApiGames[];
	handleGetServerStatus: () => void;
}
