// import { useState, useEffect } from 'react';
import Card from "../Card";
import { useGame } from "../../contexts/GamesContext";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Row, Column, Div } from "./styles";
// import { useState } from "react";

const Genres = (): JSX.Element => {
	const { gamesByGender, allGenres, handleGetGamesByGenre } = useGame();

	return (
		<Column>
			<select
				onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
					handleGetGamesByGenre(e.target.value);
				}}
				name="GENERO"
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
			</select>

			<Row>
				{gamesByGender.map((game, key) => (
					<Card
						key={key}
						game={game}
						currentKey={key}
					/>
				))}
			</Row>
		</Column>
	);
};

export default Genres;
