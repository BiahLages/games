// import { useState, useEffect } from 'react';
// import { useFavorites } from "../../contexts/FavoritesContext";
// import Card from "../Card/index";
import { FavoritesTitle } from "./styles";

const Favorites = (): JSX.Element => {
	// const { favorites } = useFavorites();
	return (
		<div>
			<FavoritesTitle>FAVORITOS ❤️</FavoritesTitle>
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
