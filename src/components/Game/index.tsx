import { SGame, SImage, STitle, SText, SRatingContent, SMediaContent, SVideosContent, SGameplay, STrailer, SInfoContent, SGenre, SButton, SButtonsContainer, SHeart, STitleHeart, SStars, SScore } from "./styles";
import { ApiGames, ApiGenres } from "../../types/interfaces/api";
import heartBlank from "src/assets/icons/heartBlank.png";
import heartFull from "src/assets/icons/heartFull.png";
import CreateUpGame from "../CreateUpGame";
import { useEffect, useState } from "react";
import { useFavorites } from "src/contexts/FavoritesContext";
import { success } from "src/utils/validation.tools";
import { BackgroundForm } from "../Gate/styles";
import { SYesOrNoButton } from "../MenuDeleteUser/styles";
import { SContainerSettings } from "src/pages/Setting/styles";
import { UseAdminGames } from "src/contexts/AdminGamesContext";

const Game = ({ game }: { game: ApiGames }): JSX.Element => {
	const { deleteGame } = UseAdminGames();
	const [update, setUpdate] = useState(false);
	const [deleteModal, setdeleteModal] = useState(false);
	const [gamePages, setGamePage] = useState(true);
	const { favThis, favorites } = useFavorites();
	const [isFavorite, setIsFavorite] = useState<boolean>(true);

	const handleDeleteModalOpen = () => {
		setdeleteModal(true);
		setGamePage(false);
	};

	const handleDeleModalClose = () => {
		setdeleteModal(false);
		setGamePage(true);
	};

	const verificIsfavorite = (): void => {
		console.log("valor de favoritos", favorites);
		if (favorites.length > 0) {
			const test = favorites.find(e => e.id === game.id);
			test ? setIsFavorite(true) : setIsFavorite(false);
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
			{deleteModal && (
				<>
					<SContainerSettings>
						<BackgroundForm>
							<h1>Do you really want to delete your account?</h1>
							<div>
								<SYesOrNoButton
									answer="yes"
									onClick={(): void => {
										deleteGame(game.id);
										success("Successfully Deleted");
									}}
								>
									Yes
								</SYesOrNoButton>
								<SYesOrNoButton
									answer="no"
									onClick={(): void => {
										handleDeleModalClose();
									}}
								>
									No
								</SYesOrNoButton>
							</div>
						</BackgroundForm>
					</SContainerSettings>
				</>
			)}
			{gamePages && (
				<>
					<SGame>
						<STitleHeart>
							<STitle>{game.title}</STitle>
							<SHeart
								src={isFavorite ? heartFull : heartBlank}
								onClick={() => favThis(game.id, true)}
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
							<SButton
								onClick={(): void => {
									handleDeleteModalOpen();
								}}
							>
								Delete
							</SButton>
							<SButton
								onClick={(): void => {
									setUpdate(true);
								}}
							>
								Update
							</SButton>
						</SButtonsContainer>
					</SGame>
				</>
			)}
		</>
	);
};

export default Game;
