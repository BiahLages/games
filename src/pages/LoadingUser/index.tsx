import { useAuth } from "src/contexts/AccountContext";
import LoaderImageDark1 from "../../assets/images/loaderI.gif"
import LoaderImageLight1 from "../../assets/images/loaderII.gif"
import LoaderImageDark2 from "../../assets/images/loaderIII.gif"
import LoaderImageLight2 from "../../assets/images/loaderIV.gif"

const LoadingUser = () => {
	const { logged, currentUser } = useAuth();
    

	return (
		<div>
			<img
				src={LoaderImageDark1}
				alt=""
			/>
			<img
				src={LoaderImageLight1}
				alt=""
			/>
			<img
				src={LoaderImageDark2}
				alt=""
			/>
			<img
				src={LoaderImageLight2}
				alt=""
			/>
		</div>
	);
};

export default LoadingUser;
