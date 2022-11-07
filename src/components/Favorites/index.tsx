// import { useState, useEffect } from 'react';
import { useFavorites } from "../../contexts/FavoritesContext";
import Card from "../Card/index";

const Favorites = (): JSX.Element => {
	const { favorites } = useFavorites();
	return (
		<div>
			<h2>FAVORITES</h2>
			<div>
				{favorites.length > 0 ? (
					favorites.map((game, key) => (
						<>
							<Card
								key={key}
								game={game}
								currentKey={key}
							/>
						</>
					))
				) : (
					<h3>Adicione jogos aos favoritos</h3>
				)}
			</div>
		</div>
	);
};

export default Favorites;
