import React from "react";

export interface IConfigUserProviderData {
	name: {
		name: string | undefined;
		setName: React.Dispatch<React.SetStateAction<string | undefined>>;
	};
	email: {
		email: string | undefined;
		setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
	};
	cpf: {
		cpf: string | undefined;
		setCpf: React.Dispatch<React.SetStateAction<string | undefined>>;
	};

	password: {
		setPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
	};
	functions: {
		handdleUpdateUser: () => void;
		handdleDeleteUser: () => void;
	};
}
