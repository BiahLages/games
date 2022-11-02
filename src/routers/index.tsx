import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { useAuth } from "../contexts/AccountContext";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

const Router = (): JSX.Element => {
	const { logged } = useAuth();

	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			{logged ? (
				<>
					<Route
						path="/profile"
						element={<Profile />}
					/>
					<Route
						path="/settings"
						element={<Settings />}
					/>
				</>
			) : (
				<Route
					path="/login"
					element={<Login />}
				/>
			)}
			<Route
				path="*"
				element={
					<Navigate
						to={logged ? "/profile" : "/"}
						replace
					/>
				}
			/>
		</Routes>
	);
};

export default Router;
