import { useFavorites } from "../../contexts/FavoritesContext";
import Card from "../Card/index";
import { FavoritesConteiner } from "./styles";

const Favorites = (): JSX.Element => {
	const { favorites } = useFavorites();
	return (
		<FavoritesConteiner>
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
		</FavoritesConteiner>
	);
};

export default Favorites;
