import { SGame, SImage, STitle, SText, SRatingContent, SMediaContent, SVideosContent, SGameplay, STrailer, SInfoContent, SGenre, SButton, SButtonsContainer, SHeart, STitleHeart, SStars, SScore } from "./styles";
import { ApiGames, ApiGenres } from "../../types/interfaces/api";
import heartBlank from "src/assets/icons/heartBlank.png";
import heartFull from "src/assets/icons/heartFull.png";
import CreateUpGame from "../CreateUpGame";
import { useEffect, useState } from "react";
import { useFavorites } from "src/contexts/FavoritesContext";

const Game = ({ game }: { game: ApiGames }): JSX.Element => {
	const [update, setUpdate] = useState(false);
	const { favThis, favorites } = useFavorites();
	const [isFavorite, setIsFavorite] = useState<boolean>(true);

	const verificIsfavorite = (): void => {
		console.log("valor de favoritos", favorites);
		if (favorites.length > 0) {
			favorites.forEach(e => (e.id === game.id ? setIsFavorite(true) : setIsFavorite(false)));
		} else {
			setIsFavorite(false);
		}
	};

	useEffect(() => verificIsfavorite(), [favorites]);

	return (
		<>
			{update && (
				<CreateUpGame
					game={game}
					mode="update"
					close={(): void => {
						setUpdate(!update);
					}}
				/>
			)}
			<SGame>
				<STitleHeart>
					<STitle>{game.title}</STitle>
					<SHeart
						src={isFavorite ? heartFull : heartBlank}
						onClick={() => favThis(game.id, isFavorite)}
					/>
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
							<STrailer src={game.trailer} />
							<SGameplay src={game.gameplay} />
						</SVideosContent>
						<SText>{game.description}</SText>
					</SInfoContent>
				</SMediaContent>
				{game.genres && (
					<SGenre>
						{game.genres.map((genre: ApiGenres, i: number) => {
							return <SText key={i}>{genre.name}</SText>;
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
