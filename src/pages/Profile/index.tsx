import { Container, ContentContainer } from "../styles";
import { useAuth } from "../../contexts/AccountContext";
import Profiles from "../../components/Profiles";
import { ProfileContentCards } from "./styles";
import Menu from "../../components/Menu";

const Profile = (): JSX.Element => {
	const { logged, currentUser } = useAuth();

	console.log(currentUser?.user.profile);

	return (
		<>
			{logged && currentUser && <Menu path="profile" />}
			<Container>
				<ContentContainer>
					<ProfileContentCards>
						<Profiles />
					</ProfileContentCards>
				</ContentContainer>
			</Container>
		</>
	);
};

export default Profile;
