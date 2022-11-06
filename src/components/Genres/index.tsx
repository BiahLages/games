// import { useState, useEffect } from 'react';
import Card from "../Card";
import { useGame } from "../../contexts/GamesContext";

const Genres = (): JSX.Element => {
	const { games } = useGame();
	return (
		<div>
			<select
			name="GENERO">
				<option>TIRO</option>
				<option>LUTA</option>
				<option>RPG</option>
			</select>
			<div>
				{games.map((game, key) => (
					<Card
						key={key}
						game={game}
						currentKey={key}
					/>
				))}
			</div>
		</div>
	);
};

export default Genres;
