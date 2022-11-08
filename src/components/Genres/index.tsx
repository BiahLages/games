import { useEffect } from "react";
import Card from "../Card";
import { useGame } from "../../contexts/GamesContext";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Row, Column, GenresConteiner, GenresTitle, SelectGender, CardsConteiner } from "./styles";
// import { useState } from "react";

const Genres = (): JSX.Element => {
	const { gamesByGender, allGenres, handleGetGamesByGenre } = useGame();
	useEffect(() => {
		handleGetGamesByGenre("b901bd71-40a2-4515-9154-7c73b29a253b");
	}, []);

	return (
		<GenresConteiner>
			<Column>
				<GenresTitle>Escolha por gênero:</GenresTitle>
				<CardsConteiner>
					<SelectGender
						onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
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
				<Row>
					{gamesByGender
						? gamesByGender.map((game, key) => (
								<Card
									key={key}
									game={game}
									currentKey={key}
								/>
						  ))
						: []}
				</Row>
			</Column>
		</GenresConteiner>
	);
};

export default Genres;
