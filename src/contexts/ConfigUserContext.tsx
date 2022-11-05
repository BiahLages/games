/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useState } from "react";
import { api } from "src/helpers/Api";
import { IConfigUserProviderData } from "src/types/interfaces/configUser";
import { AllProvidersProps } from "src/types/interfaces/system";
import { useAuth } from "./AccountContext";

const ConfigUserContext = createContext({} as IConfigUserProviderData);

export const ConfigUserProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged, currentUser, logout } = useAuth();

	const [name, setName] = useState(currentUser?.user.name);
	const [email, setEmail] = useState(currentUser?.user.email);
	const [cpf, setCpf] = useState(currentUser?.user.cpf);
	const [password, setPassword] = useState<undefined | string>(undefined);
	const [isAdmin] = useState(currentUser?.user.isAdmin);

	const data = {
		name,
		email,
		cpf,
		password,
	};

	const headers = {
		headers: {
			Authorization: `Bearer ${currentUser?.token}`,
		},
	};

	// Implentar um modal de confirmação.
	const handdleUpdateUser = async (): Promise<void> => {
		if (logged && currentUser)
			await api
				.patch(`/user${currentUser.user.id}`, data, headers)
				.then(res => {
					localStorage.setItem("user", JSON.stringify({ ...res.data, isAdmin, cpf }));
					console.log("handdleUpdateUser", "Usuário Atualizado");
				})
				.catch(error => console.log("handdleUpdateUser", `Erro ${error.status} Usuário não atualizado`));
	};

	// Implentar um modal de confirmação.
	const handdleDeleteUser = async (): Promise<void> => {
		if (logged && currentUser)
			await api
				.delete(`/user${currentUser.user.id}`, headers)
				.then(() => {
					logout();
					console.log("handdleDeleteUser", "Usuário Deletado");
				})
				.catch(error => console.log("handdleDeleteUser", `Erro ${error.status} Usuário não deletado`));
	};

	return (
		<>
			<ConfigUserContext.Provider
				value={{
					states: {
						name,
						email,
						cpf,
						currentUser,
					},
					setStates: {
						setName,
						setEmail,
						setCpf,
						setPassword,
					},

					functions: {
						handdleUpdateUser,
						handdleDeleteUser,
					},
				}}
			>
				{children}
			</ConfigUserContext.Provider>
			;
		</>
	);
};

export const useConfigUser = (): IConfigUserProviderData => useContext(ConfigUserContext);
