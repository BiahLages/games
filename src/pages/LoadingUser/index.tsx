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
		const profile = localStorage.getItem("profile");

		if (user && token && profile) {
			getAllProfiles();
			return setTimeout(() => {
				beforeLoad("/");
			}, 1420);
		} else if (user && token) {
			getAllProfiles();
			return setTimeout(() => {
				beforeLoad("/profile");
			}, 1420);
		} else {
			getAllProfiles();
			return setTimeout(() => {
				beforeLoad("/login");
			}, 250);
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
