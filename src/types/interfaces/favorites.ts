import { ApiFavorites } from "./api";

export interface FavoritesProviderData {
	favorites: ApiFavorites[];
	handleGetFavorites: () => void;
	favThis: (id: string, isFav: boolean) => void;
}
