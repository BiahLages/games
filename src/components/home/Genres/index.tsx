import { useEffect } from "react";
import Card from "../../Card";
import { useGame } from "../../../contexts/GamesContext";
import { Column, SelectGender, CardsConteiner } from "./styles";
import {
	SHomeComponentsContainer,
	HomeComponentsTitle,
	HomeComponentsRow,
} from "../styled";

const Genres = (): JSX.Element => {
	const { gamesByGender, allGenres, handleGetGamesByGenre } = useGame();
	useEffect(() => {
		handleGetGamesByGenre("b901bd71-40a2-4515-9154-7c73b29a253b");
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
							handleGetGamesByGenre(e.target.value);
						}}
					>
						{allGenres.map((genre, key) => {
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
					{gamesByGender
						? gamesByGender.map((game, key) => (
								<Card
									key={key}
									game={game}
									currentKey={key}
								/>
						  ))
						: []}
				</HomeComponentsRow>
			</Column>
		</SHomeComponentsContainer>
	);
};

export default Genres;
