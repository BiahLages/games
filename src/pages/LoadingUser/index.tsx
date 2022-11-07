import { useAuth } from "src/contexts/AccountContext";
import LoaderImageDark1 from "../../assets/images/loaderI.gif";
import { useNavigate } from "react-router-dom";
import { LoadingUserStyle } from "./styles";

const LoadingUser = () => {
	const { logged } = useAuth();
	const navigate = useNavigate();

	return (
		<>
			{logged ? navigate("/profile") : navigate("/login")}
			<LoadingUserStyle>
				<div>
					<img
						src={LoaderImageDark1}
						alt=""
					/>
				</div>
			</LoadingUserStyle>
		</>
	);
};

export default LoadingUser;
