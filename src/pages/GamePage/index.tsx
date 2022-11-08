import { Container, ContentContainer } from "../styles";
import { ApiGames } from "../../types/interfaces/api";
import { useGame } from "../../contexts/GamesContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Game from "../../components/Game";
import Menu from "../../components/Menu";
import { useAuth } from "src/contexts/AccountContext";
import { useProfiles } from "src/contexts/ProfilesContext";

const GamePage = (): JSX.Element => {
	const { handleGetGameById } = useGame();
	const { logged, currentUser } = useAuth();
	const { currentProfileId } = useProfiles();
	const { id } = useParams();
	const [current, setCurrent] = useState<ApiGames | undefined>();

	const showGame = async (): Promise<void> => {
		if (id && logged && currentUser && currentProfileId) {
			const game = await handleGetGameById(id);
			if (game) {
				setCurrent(game);
			}
		}
	};

	useEffect(() => {
		showGame();
	}, [logged, currentUser, currentProfileId]);

	return (
		<>
			<Menu path="/game/:id" />
			<Container>
				<ContentContainer>{current ? <Game game={current} /> : <span>Game not found</span>}</ContentContainer>
			</Container>
		</>
	);
};

export default GamePage;
