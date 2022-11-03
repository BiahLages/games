import { ProfileContentCards } from "./styles";
import { Container, ContentContainer } from "../styles";
import Menu from "../../components/Menu";
import Profiles from "../../components/Profiles";

const Profile = (): JSX.Element => {
	return (
		<Container>
			<Menu path="profile" />
			<ContentContainer>
				<ProfileContentCards>
					<Profiles />
				</ProfileContentCards>
			</ContentContainer>
		</Container>
	);
};

export default Profile;
