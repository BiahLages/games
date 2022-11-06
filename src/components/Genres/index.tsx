// import { useState, useEffect } from 'react';
import Card from "../Card";
import { useGame } from "../../contexts/GamesContext";
import { Row, Column, Div } from "./styles";

const Genres = (): JSX.Element => {
	const { allGames } = useGame();
	return (
		<Column>
			<select
			name="GENERO">
				<option>TIRO</option>
				<option>LUTA</option>
				<option>RPG</option>
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
