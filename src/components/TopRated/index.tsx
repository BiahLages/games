// import { useState, useEffect } from 'react';
import Card from "../Card";
import { useGame } from "../../contexts/GamesContext";

const TopRated = (): JSX.Element => {
	const { games } = useGame();
	return (
		<div>
			<h2>EM ALTA</h2>
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

export default TopRated;
