import { Container, ContentContainer } from "../styles";
import { ApiGames } from "../../types/interfaces/api";
import { useGame } from "../../contexts/GamesContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Game from "../../components/Game";
import Menu from "../../components/Menu";

const GamePage = (): JSX.Element => {
	const { handleGetGameById } = useGame();
	const { id } = useParams();
	const navigate = useNavigate();
	const [current, setCurrent] = useState<ApiGames | undefined>();

	const showGame = async () => {
		if (id) {
			const game = await handleGetGameById(id);
			if (game) {
				setCurrent(game);
			} else {
				navigate("/");
			}
		} else {
			navigate("/");
		}
	};

	useEffect(() => {
		showGame();
	}, []);

	return (
		<>
			<Menu path="home" />
			<Container>
				<ContentContainer>{current && <Game game={current} />}</ContentContainer>
			</Container>
		</>
	);
};

export default GamePage;
