// import { useState, useEffect } from 'react';
// import { useFavorites } from "../../contexts/FavoritesContext";
// import Card from "../Card/index";
import { FavoritesConteiner } from "./styles";

const Favorites = (): JSX.Element => {
	// const { favorites } = useFavorites();
	return (
		<FavoritesConteiner>
			<h2>FAVORITOS ❤️</h2>
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
		</FavoritesConteiner>
	);
};

export default Favorites;
