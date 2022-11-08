import { FavoritesTitle } from "./styles";
import Card from "../Card";
import { useFavorites } from "src/contexts/FavoritesContext";

const Favorites = (): JSX.Element => {
	const { favorites } = useFavorites();
	return (
		<div>
			<FavoritesTitle>FAVORITOS ❤️</FavoritesTitle>
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
