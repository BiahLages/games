import { Dispatch, SetStateAction } from "react";
import { Auth } from "./users";

export interface IConfigUserProviderData {
	states: {
		name: string | undefined;
		email: string | undefined;
		cpf: string | undefined;
		currentUser: Auth | undefined;
		isAdmin: boolean | undefined;
		dataUsers: any;
		nameUser: string | null;
		emailUser: string | null;
		cpfUser: string | null;
		isAdminUser: boolean | null;
	};

	setStates: {
		setName: Dispatch<SetStateAction<string | undefined>>;
		setEmail: Dispatch<SetStateAction<string | undefined>>;
		setCpf: Dispatch<SetStateAction<string | undefined>>;
		setPassword: Dispatch<SetStateAction<string | undefined>>;
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
	};
}
