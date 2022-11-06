import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { useAuth } from "../contexts/AccountContext";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";
import { useProfiles } from "src/contexts/ProfilesContext";
import GamePage from "src/pages/GamePage";
import Recover from "src/pages/Recover";
import Forgot from "src/pages/Forgot";

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
								element={<Setting />}
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
				</>
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
			<Route
				path="/recover/:id/:token"
				element={<Recover />}
			/>
			<Route
				path="/game/:id"
				element={<GamePage />}
			/>
			<Route
				path="/forgotpassword"
				element={<Forgot />}
			/>
		</Routes>
	);
};

export default Router;
