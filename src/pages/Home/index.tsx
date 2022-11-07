import { Container, ContentContainer } from "../styles";
import Menu from "../../components/Menu";
import Favorites from "src/components/Favorites";
import TopRated from "src/components/TopRated";
import Genres from "src/components/Genres";

const Home = (): JSX.Element => {
	return (
		<>
			<Menu path="home" />
			<Container>
				<ContentContainer>
					<Favorites />
					<TopRated />
					<Genres />
				</ContentContainer>
			</Container>
		</>
	);
};

export default Home;
