import type { AllProvidersProps } from "../types/interfaces/system";
import type { Auth, AuthProviderData } from "../types/interfaces/users";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../helpers/Api";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const [logged, setLogged] = useState<boolean>(false);
	const [currentUser, setCurrentUser] = useState<Auth>();
	const navigate = useNavigate();

	const login = ({ token, user }: Auth): void => {
		localStorage.setItem("token", token);
		localStorage.setItem("user", JSON.stringify(user));
		setLogged(true);
		navigate("/loading");
		navigate(0);
	};

	const logout = (): void => {
		localStorage.clear();
		setLogged(false);
		navigate("/loading");
		navigate(0);
	};

	const checkTokenExpiration = (): void => {
		const user = JSON.parse(localStorage.getItem("user") || "");
		const token = localStorage.getItem("token");

		const headers = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		api.get(`/users/${user.id}`, headers)
			.then(res => {
				const data = res.data;
				setLogged(true);
				if (token) {
					setCurrentUser({
						token,
						user: data,
					});
					localStorage.setItem("user", JSON.stringify(data));
				}
				// navigate("/profile");
			})
			.catch(() => {
				logout();
			});
	};

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) checkTokenExpiration();
	}, []);

	return <AuthContext.Provider value={{ logged, login, logout, currentUser, checkTokenExpiration }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthProviderData => useContext(AuthContext);
