// import { useState, useEffect } from 'react';
import { useFavorites } from "../../contexts/FavoritesContext";
import Card from "../Card/index";

const Favorites = (): JSX.Element => {
	const { favorites } = useFavorites();
	return (
		<div>
			<h2>FAVORITES</h2>
			<div>
				<p>CARDS DOS FAVORITES</p>
			{/* {favorites.map((game, key) => (		
					<Card
						key={key}
						game={game}
						currentKey={key}
					/>			
			))} */}
			</div>
		</div>
	);
};

export default Favorites;
