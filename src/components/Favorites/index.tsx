// import { useState, useEffect } from 'react';
import { useFavorites } from "../../contexts/FavoritesContext";
// import Card from "../Card/index";

const Favorites = (): JSX.Element => {
	const { favorites } = useFavorites();
	return (
		<div>
			<h2>FAVORITES</h2>
			<div>
			{favorites.map((game, key) => {
				return (<></>
					// <Card
					// 	key={key}
					// 	game={game}
					// 	currentKey={key}
					// />
				)
			})}
			</div>
		</div>
	);
};

export default Favorites;
