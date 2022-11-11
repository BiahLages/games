import { Dispatch, SetStateAction } from "react";

export interface OrderSettingsProviderData {
	orderBy: string;
	orderDirection: string;
	pageLength: number;
	currentGenre: string;
	setCurrentGenre: Dispatch<SetStateAction<string>>;
	setOrderBy: Dispatch<SetStateAction<string>>;
	setOrderDirection: Dispatch<SetStateAction<string>>;
	setPageLenght: Dispatch<SetStateAction<number>>;
}
