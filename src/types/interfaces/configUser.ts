import React from "react";
import { Auth } from "./users";

export interface IConfigUserProviderData {
	states: {
		name: string | undefined;
		email: string | undefined;
		cpf: string | undefined;
		currentUser: Auth | undefined;
	};
	setStates: {
		setName: React.Dispatch<React.SetStateAction<string | undefined>>;
		setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
		setCpf: React.Dispatch<React.SetStateAction<string | undefined>>;
		setPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
	};

	functions: {
		handdleUpdateUser: () => void;
		handdleDeleteUser: () => void;
	};
}
