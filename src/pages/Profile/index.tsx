import { ProfileContentCards } from "./styles";
import { Container, ContentContainer } from "../styles";
import Menu from "../../components/Menu";
import { useState } from "react";

const Profile = (): JSX.Element => {
	const [profile, setProfile] = useState("favorites");

	return (
		<Container>
			<Menu path="profile" />
			<ContentContainer>
				<ProfileContentCards>
					<div>aqui irão os componentes de perfis e configurações de perfil</div>
				</ProfileContentCards>
			</ContentContainer>
		</Container>
	);
};

export default Profile;
