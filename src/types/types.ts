import { CurrentUser, IDataUser } from "./interfaces/users";

export declare type MenuProps = {
	path: "home" | "settings" | "profile" | "login";
};

export declare type TDataUser = IDataUser[] | null;

export declare type TDataUserForId = CurrentUser | null;

