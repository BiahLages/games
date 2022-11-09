/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "src/helpers/Api";
import { IConfigUserProviderData } from "src/types/interfaces/configUser";
import { AllProvidersProps } from "src/types/interfaces/system";
import { TDataUser, TDataUserForId } from "src/types/types";
import { error, success } from "src/utils/validation.tools";
import { useAuth } from "./AccountContext";

const ConfigUserContext = createContext({} as IConfigUserProviderData);

export const ConfigUserProvider = ({
	children,
}: AllProvidersProps): JSX.Element => {
	const { logged, currentUser, logout } = useAuth();

	//States para config do usuário logado.
	const [name, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [cpf, setCpf] = useState<string>();
	const [password, setPassword] = useState<string>("");
	const [isAdmin, setIsadmin] = useState<boolean>();

	//States para config de outros usuários.
	const [dataUsers, setDataUsers] = useState<TDataUser>(null);
	const [dataUserForId, setDataUserForId] = useState<TDataUserForId>(null);
	const [nameUser, setNameUser] = useState<null | string>(null);
	const [emailUser, setEmailUser] = useState<null | string>(null);
	const [cpfUser, setCpfUser] = useState<null | string>(null);
	const [passwordUser, setPasswordUser] = useState<undefined | string>(
		undefined,
	);
	const [isAdminUser, setIsAdminUser] = useState<null | boolean>(null);

	// States para troca de menus.
	const [switchMenuUpdateChoice, setSwitchMenuUpdateChoice] =
		useState<boolean>();
	const [switchMenuUpdateUSer, setSwitchMenuUpdateUser] = useState<boolean>();
	const [switchMenuUpdateAdmin, setSwitchMenuUpdateAdmin] =
		useState<boolean>();

	const headers = {
		headers: {
			Authorization: `Bearer ${currentUser?.token}`,
		},
	};

	// Implentar um modal de confirmação.
	const handdleUpdateUser = async (): Promise<void> => {
		if (logged && currentUser) {
			const data =
				password !== ""
					? {
							name,
							email,
							cpf,
							password,
					  }
					: { name, email, cpf };

			await api
				.patch(`/users/${currentUser.user.id}`, data, headers)
				.then(res => {
					localStorage.setItem(
						"user",
						JSON.stringify({ ...res.data, isAdmin, cpf }),
					);
					success("handdleUpdateUser Usuário Atualizado");
				})
				.catch(err =>
					error(
						`"handdleUpdateUser", Erro ${err.status} Usuário não atualizado`,
					),
				);
		}
	};

	// Implentar um modal de confirmação.
	const handdleDeleteUser = async (): Promise<void> => {
		if (logged && currentUser)
			await api
				.delete(`/users/${currentUser.user.id}`, headers)
				.then(() => {
					logout();
					success("handdleDeleteUser, Usuário Deletado");
				})
				.catch(err =>
					console.log(
						`"handdleDeleteUser", Erro ${err.status} Usuário não deletado`,
					),
				);
	};

	const handdleGetUsers = async (): Promise<void> => {
		if (logged && currentUser)
			await api
				.get(`/users`, headers)
				.then(res => {
					setDataUsers(res.data);
				})
				.catch(err => error(`"handdleGetUsers", Error ${err.status}`));
	};

	const handdleGetUserForId = async (id: string): Promise<void> => {
		if (logged && currentUser) {
			await api
				.get(`/users/${id}`, headers)
				.then(res => {
					console.log(
						"handdleGetUsers",
						"Lista de usuários carregada",
					);
					setDataUserForId(res.data);
				})
				.catch(error => {
					console.log("handdleGetUsers", `Error ${error.status}`);
				});
		} else {
			console.log(
				"handdleGetUserForId",
				"Usuario não logado ou não Admin ",
			);
		}
	};

	// Implentar um modal de confirmação.
	const handdleUpdateUserAdmin = async (): Promise<void> => {
		if (logged && currentUser && dataUserForId) {
			const dataAdmin = {
				name: nameUser,
				email: emailUser,
				cpf: cpfUser,
				password: passwordUser,
				isAdmin: isAdminUser,
			};

			await api
				.patch(`/users${dataUserForId.id}`, dataAdmin, headers)
				.then(() => {
					console.log(
						"handdleUpdateUser",
						`Usuário ${dataUserForId.name} atualizado`,
					);
					handdleGetUsers();
				})
				.catch(error =>
					console.log(
						"handdleUpdateUserAdmin",
						`Erro ${error.status}, Usuário ${dataUserForId.name} não atualizado`,
					),
				);
		} else {
			console.log(
				"handdleUpdateUserAdmin",
				"Usuario não logado ou não Admin ",
			);
		}
	};

	// Implentar um modal de confirmação.
	const handdleDeleteUserAdmin = async (): Promise<void> => {
		if (logged && currentUser && dataUserForId)
			await api
				.delete(`/users${dataUserForId.id}`, headers)
				.then(() => {
					console.log(
						"handdleDeleteUserAdmin",
						`Usuário ${dataUserForId.name} Deletado`,
					);
					handdleGetUsers();
				})
				.catch(error =>
					console.log(
						"handdleDeleteUser",
						`Erro ${error.status}, usuário ${dataUserForId.name} não deletado`,
					),
				);
	};

	const handdleStateUSer = (): void => {
		if (currentUser && logged) {
			setName(currentUser.user.name);
			setEmail(currentUser.user.email);
			setCpf(currentUser.user.cpf);
			setIsadmin(currentUser.user.isAdmin);
		}
	};

	const handdleChangeConfigUser = (): void => {
		setSwitchMenuUpdateChoice(false);
		setSwitchMenuUpdateUser(true);
		setSwitchMenuUpdateAdmin(false);
	};

	const handdleChangeDeleteAccount = (): void => {
		setSwitchMenuUpdateChoice(false);
		setSwitchMenuUpdateUser(false);
		setSwitchMenuUpdateAdmin(true);
	};

	const handdleConfigMenus = (): void => {
		setSwitchMenuUpdateChoice(true);
		setSwitchMenuUpdateUser(false);
		setSwitchMenuUpdateAdmin(false);
	};

	useEffect(() => {
		if (isAdmin) {
			handdleGetUsers();
			handdleConfigMenus();
		}

		handdleStateUSer();
	}, [currentUser]);

	return (
		<>
			<ConfigUserContext.Provider
				value={{
					states: {
						name,
						email,
						cpf,
						currentUser,
						isAdmin,
						password,
						dataUsers,
						nameUser,
						emailUser,
						cpfUser,
						isAdminUser,
						switchMenuUpdateChoice,
						switchMenuUpdateUSer,
						switchMenuUpdateAdmin,
					},
					setStates: {
						setName,
						setEmail,
						setCpf,
						setPassword,
						setNameUser,
						setEmailUser,
						setCpfUser,
						setPasswordUser,
						setIsAdminUser,
					},

					functions: {
						handdleUpdateUser,
						handdleDeleteUser,
						handdleGetUserForId,
						handdleDeleteUserAdmin,
						handdleUpdateUserAdmin,
						handdleChangeConfigUser,
						handdleChangeDeleteAccount,
						handdleConfigMenus,
					},
				}}
			>
				{children}
			</ConfigUserContext.Provider>
		</>
	);
};

export const useConfigUser = (): IConfigUserProviderData =>
	useContext(ConfigUserContext);
