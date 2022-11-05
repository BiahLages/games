import { Container, ContentContainer } from "../styles";
import { HomeContentCards } from "./styles";
import Menu from "../../components/Menu";
import Card from "src/components/Card";
import { useGame } from "src/contexts/GamesContext";

const Home = (): JSX.Element => {
	const { games } = useGame();
	return (
		<>
			<Menu path="home" />
			<Container>
				<ContentContainer>
					<HomeContentCards>
						<div>aqui aparecerão os cards dos jogos</div>
						<Card game={games[0]} currentKey={1}></Card>
					</HomeContentCards>
				</ContentContainer>
			</Container>
		</>
	);
}; 

export default Home;
