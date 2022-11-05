// import { useState, useEffect } from 'react';
import { useFavorites } from "../../contexts/FavoritesContext";
import Card from "../Card";

const Favorites = (): JSX.Element => {
	const { favorites } = useFavorites();
	return (
		<div>
			{favorites.map((game, key) => {
				return (
					<Card
						key={key}
						game={game}
						currentKey={key}
					/>
				);
			})}
		</div>
	);
};

export default Favorites;
