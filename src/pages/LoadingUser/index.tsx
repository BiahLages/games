import LoaderImageDark2 from "../../assets/images/loaderIII.gif";
import { useNavigate } from "react-router-dom";
import { LoadingUserStyle } from "./styles";
import { useEffect } from "react";
import { useProfiles } from "src/contexts/ProfilesContext";

const LoadingUser = (): JSX.Element => {
	const navigate = useNavigate();
	const { getAllProfiles } = useProfiles();

	const beforeLoad = (location: string): void => {
		navigate(location);
	};

	const logState = async (): Promise<NodeJS.Timeout> => {
		const user = localStorage.getItem("user");
		const token = localStorage.getItem("token");
		const profile = localStorage.getItem("currentProfileId");

		if (user && token && profile) {
			getAllProfiles();
			return setTimeout(() => {
				console.log("home");
				beforeLoad("/");
			}, 750);
		} else if (user && token) {
			getAllProfiles();
			return setTimeout(() => {
				console.log("profile");
				beforeLoad("/profile");
			}, 750);
		} else {
			getAllProfiles();
			return setTimeout(() => {
				console.log("login");
				beforeLoad("/login");
			}, 750);
		}
	};

	useEffect(() => {
		logState();
	}, []);

	return (
		<LoadingUserStyle>
			<div>
				<img
					src={LoaderImageDark2}
					alt="Loader"
				/>
			</div>
		</LoadingUserStyle>
	);
};

export default LoadingUser;
