import Card from "../../Card";
import { useGame } from "../../../contexts/GamesContext";
import { ArrowBack, ArrowFoward } from "../styles";
import {
	SHomeComponentsContainer,
	HomeComponentsTitle,
	HomeComponentsRow,
} from "../styles";

const TopRated = (): JSX.Element => {
	const { games, currentGamesPage, setCurrentGamesPage, lastValidGamePage } =
		useGame();
	return (
		<SHomeComponentsContainer scroll="side">
			<HomeComponentsTitle>EM ALTA 🔥</HomeComponentsTitle>
			<HomeComponentsRow
				type="overflow"
				align="center"
			>
				{currentGamesPage > 1 && (
					<ArrowBack
						onClick={(): void => {
							setCurrentGamesPage(currentGamesPage - 1);
						}}
					>
						◀
					</ArrowBack>
				)}
				{games
					? games.map((game, key) => (
							<Card
								key={key}
								game={game}
								currentKey={key}
							/>
					  ))
					: []}
				{!lastValidGamePage && (
					<ArrowFoward
						onClick={(): void => {
							setCurrentGamesPage(currentGamesPage + 1);
						}}
					>
						▶
					</ArrowFoward>
				)}
			</HomeComponentsRow>
		</SHomeComponentsContainer>
	);
};

export default TopRated;
