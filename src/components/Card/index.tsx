import { ICardGames } from "../../types/interfaces/games";
import { Link } from "react-router-dom";
import { STitle, SScore, SStars, SText, SCard } from "./styles";

const Card = ({
	game,
	currentKey,
}: {
	game: ICardGames;
	currentKey: number;
}): JSX.Element => {
	return game ? (
		<Link to={`/game/${game.id}`}>
			<SCard
				backgroundImage={game.image}
				id="genres"
			>
				<STitle
					id="genresTitle"
					key={`title${currentKey}`}
				>
					{game.title}
				</STitle>
				<SScore id="genresScore">
					<SStars score={Number(game.score)}>
						<img
							src="https://media.discordapp.net/attachments/985645895779508254/1039019480359112775/stars.png"
							alt="stars imdb"
						/>
					</SStars>
					<SText>{game.score}</SText>
					<SText>{game.year}</SText>
				</SScore>
			</SCard>
		</Link>
	) : (
		<></>
	);
};

export default Card;
