import { useOrderSettings } from "../../../contexts/OrderSettingsContext";
import { ApiGames, ApiGenres } from "../../../types/interfaces/api";
import { Column, SelectGender, CardsConteiner } from "./styles";
import loaderGif from "../../../assets/icons/loader.png";
import { useGame } from "../../../contexts/GamesContext";
import { ArrowFoward } from "../styles";
import { useEffect } from "react";
import Card from "../../Card";
import {
	SHomeComponentsContainer,
	HomeComponentsTitle,
	HomeComponentsRow,
} from "../styles";

const Genres = (): JSX.Element => {
	const {
		setCurrentGenresPage,
		lastValidGenrePage,
		currentGenresPage,
		handleGetGenres,
		allGenres,
		setGenres,
		genres,
	} = useGame();

	const { currentGenre, setCurrentGenre } = useOrderSettings();

	useEffect(() => {
		handleGetGenres();
	}, [currentGenresPage, currentGenre]);

	useEffect(() => {
		setCurrentGenresPage(1);
		setGenres([]);
		handleGetGenres();
	}, []);

	return (
		<SHomeComponentsContainer>
			<Column>
				<HomeComponentsTitle>GENEROS</HomeComponentsTitle>
				<CardsConteiner>
					<SelectGender
						onChange={(
							e: React.ChangeEvent<HTMLSelectElement>,
						): void => {
							setGenres([]);
							setCurrentGenresPage(1);
							setCurrentGenre(e.target.value);
						}}
					>
						{allGenres.map((genre: ApiGenres, key: number) => {
							return (
								<option
									value={genre.id}
									key={key}
								>
									{genre.name}
								</option>
							);
						})}
					</SelectGender>
				</CardsConteiner>
				<HomeComponentsRow type="mini">
					{genres ? (
						genres.map((game: ApiGames, key: number) => (
							<Card
								key={key}
								game={game}
								currentKey={key}
							/>
						))
					) : (
						<img
							src={loaderGif}
							alt="loader"
							height="32px"
						/>
					)}
					{!lastValidGenrePage && (
						<ArrowFoward
							onClick={(): void => {
								setCurrentGenresPage(currentGenresPage + 1);
							}}
						>
							▼
						</ArrowFoward>
					)}
				</HomeComponentsRow>
			</Column>
		</SHomeComponentsContainer>
	);
};

export default Genres;
