import { ICardGames } from "../../types/interfaces/games";
import { Link } from "react-router-dom";
import { IStyleScore } from "src/types/interfaces/games";
import { STitle, SScore, SStars, SText, SGameImg, /* SDescription, SActionButton, SDate*/ SCard } from "./styles";

const Card = ({ game, currentKey }: { game: ICardGames; currentKey: number }): JSX.Element => {
	interface IStyleScore {
		score: number;
	}

	return game ? (
		<Link to={`/game/${game.id}`}>
			<SCard>
				<SGameImg
					src={game.image}
					alt={"Imagem do jogo"}
				/>
				<STitle key={`title${currentKey}`}>
					{game.title} - {game.year}
					{/* <SDate key={`date${currentKey}`}>{game.year}</SDate> */}
				</STitle>
				<SScore>
					<SStars score={Number(game.score)}>
						<img
							src="https://media.discordapp.net/attachments/985645895779508254/1039019480359112775/stars.png"
							alt="stars imdb"
						/>
					</SStars>
					<SText>{game.score}</SText>
				</SScore>
				{/* <SDescription>Integer iaculis vestibulum malesuada. Maecenas accumsan eleifend mi, non tempor massa elementum vel. Vivamus condimentum at orci ultricies aliquam. Etiam gravida ullamcorper metus, in suscipit lacus sagittis ultrices.</SDescription>
			<SActionButton>Gender1</SActionButton>
			<SActionButton>Gender2</SActionButton> */}
			</SCard>
		</Link>
	) : (
		<></>
	);
};

export default Card;
