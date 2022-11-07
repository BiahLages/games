// import { useState, useEffect } from 'react';
import Card from "../Card";
import { useGame } from "../../contexts/GamesContext";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Row, Column, Div } from "./styles";

const Genres = (): JSX.Element => {
	const { allGames, allGenres } = useGame();
	return (
		<Column>
			<select name="GENERO">
				{allGenres.map((genre, key) => (
					<option>{genre.name}</option>
				))}
			</select>
			<Row>
				{allGames.map((game, key) => (
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
