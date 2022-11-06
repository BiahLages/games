import { Container, ContentContainer } from "../styles";
import { HomeContentCards } from "./styles";
import Menu from "../../components/Menu";
// import Card from "src/components/Card";
import { useGame } from "src/contexts/GamesContext";
import Favorites from "src/components/Favorites";
import TopRated from "src/components/TopRated";
import Genres from "src/components/Genres";

const Home = (): JSX.Element => {
	const { games } = useGame();
	return (
		<>
			<Menu path="home" />
			<Container>
				<ContentContainer>
					<HomeContentCards>
						<Favorites />
						<TopRated />
						<Genres />
					</HomeContentCards>
				</ContentContainer>
			</Container>
		</>
	);
};

export default Home;
