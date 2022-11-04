import { Container, ContentContainer } from "../styles";
import { HomeContentCards } from "./styles";
import Menu from "../../components/Menu";

const Home = (): JSX.Element => {
	return (
		<>
			<Menu path="home" />
			<Container>
				<ContentContainer>
					<HomeContentCards>
						<div>aqui aparecerão os cards dos jogos</div>
					</HomeContentCards>
				</ContentContainer>
			</Container>
		</>
	);
};

export default Home;
