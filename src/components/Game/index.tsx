import { ApiGames, ApiGenres } from "../../types/interfaces/api";
import { SGame, SVideo, SImage, STitle, SText, SRatingContent, SMediaContent, SVideosContent } from "./styles";

const Game = ({ game}: { game: ApiGames }): JSX.Element => {
	return (
		<SGame>			
			<STitle>{game.title}</STitle>
			<SRatingContent>
			<SText>{game.year}</SText>
			<SText>{game.score}</SText>	
			</SRatingContent>
			<SMediaContent>
			<SImage src={game.image} alt={`${game.title} picture`}/>
			<SVideosContent>
			<SVideo src={game.gameplay}/>
			<SVideo src={game.trailer}/>
			</SVideosContent>
			</SMediaContent>
			<SText>{game.description}</SText>
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
