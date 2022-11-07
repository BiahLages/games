import { SGame, SImage, STitle, SText, SRatingContent, SMediaContent, SVideosContent, SGameplay, STrailer, SInfoContent, SGenre, SButton, SButtonsContainer, SHeart, STitleHeart, SStars, SScore, SEditFrame } from "./styles";
import { ApiGames, ApiGenres } from "../../types/interfaces/api";
import heartBlank from "src/assets/icons/heartBlank.png";
import CreateUpGame from "../CreateUpGame";
import { useState } from "react";

const Game = ({ game }: { game: ApiGames }): JSX.Element => {
	const [update, setUpdate] = useState(false);

	return (
		<>
			<SGame>
				{update && (
					<SEditFrame>
						<CreateUpGame
							game={game}
							mode="update"
							close={(): void => {
								setUpdate(!update);
							}}
						/>
					</SEditFrame>
				)}
				<STitleHeart>
					<STitle>{game.title}</STitle>
					<SHeart src={heartBlank} />
				</STitleHeart>
				<SRatingContent>
					<SText>{game.year}</SText>
					<SScore>
						<SStars score={Number(game.score)}>
							<img
								src="https://media.discordapp.net/attachments/985645895779508254/1039019480359112775/stars.png"
								alt="stars imdb"
							/>
						</SStars>
						<SText>{game.score}</SText>
					</SScore>
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
					<SButton
						onClick={(): void => {
							setUpdate(!update);
						}}
					>
						Update
					</SButton>
				</SButtonsContainer>
			</SGame>
		</>
	);
};

export default Game;
