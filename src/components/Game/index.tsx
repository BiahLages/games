import { ApiGames, ApiGenres } from "../../types/interfaces/api";
import { SGame } from "./styles";

const Game = ({ game }: { game: ApiGames }): JSX.Element => {
	return (
		<SGame>
			<span>{game.id}</span>
			<span>{game.title}</span>
			<span>{game.description}</span>
			<span>{game.year}</span>
			<span>{game.score}</span>
			<span>{game.image}</span>
			<span>{game.gameplay}</span>
			<span>{game.trailer}</span>

			{game.genres && (
				<div>
					{game.genres.map((genre: ApiGenres, i: number) => {
						return (
							<div>
								<span key={`id_${i}`}>{genre.id}</span>
								<span key={`name_${i}`}>{genre.name}</span>
							</div>
						);
					})}
				</div>
			)}
		</SGame>
	);
};

export default Game;
