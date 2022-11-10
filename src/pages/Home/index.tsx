import { Container } from "../styles";
import Menu from "../../components/Menu";
import Favorites from "src/components/home/Favorites";
import TopRated from "src/components/home/TopRated";
import Genres from "src/components/home/Genres";
import { HomeContainer } from "./styles";

const Home = (): JSX.Element => {
	return (
		<>
			<Menu path="home" />
			<Container>
				<HomeContainer>
					<Favorites />
					<TopRated />
					<Genres />
				</HomeContainer>
			</Container>
		</>
	);
};

export default Home;
