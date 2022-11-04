import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { useAuth } from "../contexts/AccountContext";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import { useProfiles } from "src/contexts/ProfilesContext";

const Router = (): JSX.Element => {
	const { logged } = useAuth();
	const { currentProfileId } = useProfiles();

	return (
		<Routes>
			{logged ? (
				<>
					{currentProfileId ? (
						<Route
							path="/profile"
							element={<Profile />}
						/>
					) : (
						<>
							<Route
								path="/profile"
								element={<Profile />}
							/>
							<Route
								path="/"
								element={<Home />}
							/>
							<Route
								path="/settings"
								element={<Settings />}
							/>
						</>
					)}
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
						to={logged ? "/profile" : "/login"}
						replace
					/>
				}
			/>
		</Routes>
	);
};

export default Router;
