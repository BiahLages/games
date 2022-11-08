import { useFavorites } from "../../contexts/FavoritesContext";
import Card from "../Card/index";
import { FavoritesConteiner, FavoritesTitle, Msg } from "./styles";

const Favorites = (): JSX.Element => {
	const { favorites } = useFavorites();
	return (
		<FavoritesConteiner>
			<FavoritesTitle>FAVORITES</FavoritesTitle>
			<div id="favorites">
				{favorites.length > 0 ? (
					favorites.map((game, key) => {
						if (game && game.games)
							return (
								<Card
									key={key}
									game={game.games[0]}
									currentKey={key}
								/>
							);
					})
				) : (
					<Msg>Adicione jogos aos favoritos...</Msg>
				)}
			</div>
		</FavoritesConteiner>
	);
};

export default Favorites;
