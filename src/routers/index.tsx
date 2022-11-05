import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { useAuth } from "../contexts/AccountContext";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import { useProfiles } from "src/contexts/ProfilesContext";
import GamePage from "src/pages/GamePage";
import Recover from "src/pages/Recover";

const Router = (): JSX.Element => {
	const { logged } = useAuth();
	const { currentProfileId } = useProfiles();

	return (
		<Routes>
			{logged ? (
				<>
					{!currentProfileId ? (
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
							<Route
								path="/game/:id"
								element={<GamePage />}
							/>
						</>
					)}
				</>
			) : (
				<>
					<Route
						path="/login"
						element={<Login />}
					/>

					<Route
						path="/recover/:id/:token"
						element={<Recover />}
					/>
				</>
			)}
			<Route
				path="*"
				element={
					<Navigate
						to={logged ? "/" : "/login"}
						replace
					/>
				}
			/>
		</Routes>
	);
};

export default Router;
