import { ApiGames, ApiGenres } from "../../types/interfaces/api";
import { SGame, SImage, STitle, SText, SRatingContent, SMediaContent, SVideosContent, SGameplay, STrailer, SInfoContent, SGenre, SButton, SButtonsContainer, SHeart, STitleHeart } from "./styles";
import heartBlank from "src/assets/icons/heartBlank.png";

const Game = ({ game }: { game: ApiGames }): JSX.Element => {
	return (
		<SGame>
			<STitleHeart>
				<STitle>{game.title}</STitle>
				<SHeart src={heartBlank} />
			</STitleHeart>
			<SRatingContent>
				<SText>{game.year}</SText>
				<SText>{game.score}</SText>
			</SRatingContent>
			<SMediaContent>
				<SImage
					src={game.image}
					alt={`${game.title} picture`}
				/>
				<SInfoContent>
					<SVideosContent>
						<SGameplay src={game.gameplay} />
						<STrailer src={game.trailer} />
					</SVideosContent>
					<SText>{game.description}</SText>
				</SInfoContent>
			</SMediaContent>
			{game.genres && (
				<SGenre>
					{game.genres.map((genre: ApiGenres) => {
						return <SText>{genre.name}</SText>;
					})}
				</SGenre>
			)}
			<SButtonsContainer>
				<SButton>Delete</SButton>
				<SButton>Update</SButton>
			</SButtonsContainer>
		</SGame>
	);
};

export default Game;
