import { Dispatch, SetStateAction } from "react";
import { Auth } from "./users";

export interface IConfigUserProviderData {
	states: {
		name: string | undefined;
		email: string | undefined;
		cpf: string | undefined;
		currentUser: Auth | undefined;
		isAdmin: boolean | undefined;
		password: string;
		dataUsers: any;
		nameUser: string | null;
		emailUser: string | null;
		cpfUser: string | null;
		isAdminUser: boolean | null;
		switchMenuUpdateChoice: boolean | undefined;
		switchMenuUpdateUSer: boolean | undefined;
		switchMenuUpdateAdmin: boolean | undefined;
	};

	setStates: {
		setName: Dispatch<SetStateAction<string | undefined>>;
		setEmail: Dispatch<SetStateAction<string | undefined>>;
		setCpf: Dispatch<SetStateAction<string | undefined>>;
		setPassword: Dispatch<SetStateAction<string>>;
		setNameUser: Dispatch<SetStateAction<string | null>>;
		setEmailUser: Dispatch<SetStateAction<string | null>>;
		setCpfUser: Dispatch<SetStateAction<string | null>>;
		setPasswordUser: Dispatch<SetStateAction<string | undefined>>;
		setIsAdminUser: Dispatch<SetStateAction<boolean | null>>;
	};

	functions: {
		handdleUpdateUser: () => void;
		handdleDeleteUser: () => void;
		handdleGetUserForId: (id: string) => void;
		handdleUpdateUserAdmin: () => void;
		handdleDeleteUserAdmin: () => void;
		handdleChangeConfigUser: () => void;
		handdleChangeConfigAdmin: () => void;
		handdleConfigMenus: () => void;
	};
}
