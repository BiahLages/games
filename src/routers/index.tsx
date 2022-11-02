import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AccountContext";

const Router = (): JSX.Element => {
	const { logged } = useAuth();

	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			{/* <Route
				path="*"
				element={
					<Navigate
						to={logged ? "/profile" : "/"}
						replace
					/>
				}
			/> */}
		</Routes>
	);
};
export default Router;
