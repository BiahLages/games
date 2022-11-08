import { ApiFavorites, ApiGames, ApiProfiles } from "./api";

export interface FavoritesProviderData {
	favorites: ApiFavorites[];
	handleGetFavorites: () => void;
	favThis: (id: string, isFav: boolean) => void;
}
export interface CurrentFavorites {
	id: string;
	createdAt?: Date;
	game?: ApiGames;
	profile?: ApiProfiles;
}
