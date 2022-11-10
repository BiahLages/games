import Card from "../../Card";
import { useGame } from "../../../contexts/GamesContext";
import { ArrowBack, ArrowFoward } from "./styles";
import {
	SHomeComponentsContainer,
	HomeComponentsTitle,
	HomeComponentsRow,
} from "../styled";

const TopRated = (): JSX.Element => {
	const { games, currentPage, setCurrentPage, lastValidPage } = useGame();
	return (
		<SHomeComponentsContainer scroll="side">
			<HomeComponentsTitle>EM ALTA 🔥</HomeComponentsTitle>
			<HomeComponentsRow
				type="overflow"
				align="center"
			>
				{currentPage > 1 && (
					<ArrowBack
						onClick={(): void => {
							setCurrentPage(currentPage - 1);
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
				{!lastValidPage && (
					<ArrowFoward
						onClick={(): void => {
							setCurrentPage(currentPage + 1);
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
