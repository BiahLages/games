import { useAuth } from "src/contexts/AccountContext";
import LoaderImageDark1 from "../../assets/images/loaderI.gif";
import { useNavigate } from "react-router-dom";
import { LoadingUserStyle } from "./styles";
import { useEffect } from "react";

const LoadingUser = (): JSX.Element => {
	const { logged } = useAuth();
	const navigate = useNavigate();

	const loadPage = (): void => {
		setTimeout(() => {
			logged ? navigate("/profile") : navigate("/login");
		}, 1500);
	};

	useEffect(() => {
		loadPage();
	}, []);

	return (
		<LoadingUserStyle>
			<div>
				<img
					src={LoaderImageDark1}
					alt="Loader"
				/>
			</div>
		</LoadingUserStyle>
	);
};

export default LoadingUser;
