import {
	SGame,
	SImage,
	STitle,
	SText,
	SRatingContent,
	SMediaContent,
	SVideosContent,
	SGameplay,
	STrailer,
	SInfoContent,
	SGenre,
	SButton,
	SButtonsContainer,
	SHeart,
	STitleHeart,
	SStars,
	SScore,
} from "./styles";
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
import { useNavigate } from "react-router-dom";
import { ContentContainer } from "src/pages/styles";
import { useAuth } from "src/contexts/AccountContext";

const Game = ({ game }: { game: ApiGames }): JSX.Element => {
	const { deleteGame } = UseAdminGames();
	const { currentUser } = useAuth();
	const [update, setUpdate] = useState(false);
	const [deleteModal, setdeleteModal] = useState(false);
	const [gamePages, setGamePage] = useState(true);
	const { favThis, favorites } = useFavorites();
	const [isFavorite, setIsFavorite] = useState<boolean>(true);

	const navigate = useNavigate();

	const handleDeleteModalOpen = (): void => {
		setdeleteModal(true);
		setGamePage(false);
	};

	const handleDeleModalClose = (): void => {
		setdeleteModal(false);
		setGamePage(true);
	};

	const verificIsfavorite = (): void => {
		if (favorites.length > 0) {
			const test = favorites.some((e): boolean => {
				if (e.games.length > 0) {
					return e.games[0].id === game.id;
				} else {
					return false;
				}
			});
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
					<ContentContainer>
						<SContainerSettings>
							<BackgroundForm>
								<h1>
									Do you really want to delete your account?
								</h1>
								<div>
									<SYesOrNoButton
										answer="yes"
										onClick={(): void => {
											deleteGame(game.id);
											success("Successfully Deleted");
											setTimeout(
												() => navigate("/"),
												3000,
											);
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
					</ContentContainer>
				</>
			)}
			{gamePages && (
				<>
					<SGame>
						<STitleHeart>
							<STitle>{game.title}</STitle>
							<SHeart
								src={isFavorite ? heartFull : heartBlank}
								onClick={(): void => {
									favThis(game.id, isFavorite);
								}}
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
								{game.genres.map(
									(genre: ApiGenres, i: number) => {
										return (
											<SText key={i}>{genre.name}</SText>
										);
									},
								)}
							</SGenre>
						)}
						{currentUser && currentUser.user.isAdmin ? (
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
						) : (
							<></>
						)}
					</SGame>
				</>
			)}
		</>
	);
};

export default Game;
