import { ReactNode } from "react";

export interface AllProvidersProps {
  children: ReactNode;
}

export interface ApiGames {
  id: string;
  title: string;
  image: string;
  description: string;
  year: string;
  score: string;
  trailer: string;
  gameplay: string;
  genreId: string;
}

export interface ApiFavorites {
  id: string;
  favoritedAt: string;
  userId: string;
  genreId: string;
  game: ApiGames;
}

export interface Auth {
  token: string;
  user: CurrentUser;
}

export interface AuthProviderData {
  logged: boolean;
  login: (params: Auth) => void;
  logout: () => void;
  currentUser: Auth | undefined;
}

// export interface AxiosKindredData {
// 	name?: string;
// 	player?: string;
// 	clan?: string;
// 	generation?: number;
// }

export interface CurrentUser {
  createdAt: string;
  email: string;
  id: string;
  name: string;
  updatedAt: string;
}

export interface DataType {
  name?: string;
  email?: string;
  password?: string;
  isAdmin?: boolean;
}

export interface FavoritesProviderData {
  favorites: ApiFavorites[];
  handleGetFavorites: () => void;
  favThis: (is: string, isFav: boolean) => void;
}

export interface GameAreaProps {
  isFav?: boolean;
}

export interface GameProviderData {
  endOfPage: boolean;
  status: boolean;
  games: ApiGames[];
  handleGetServerStatus: () => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
