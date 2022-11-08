import { useFavorites } from "../../contexts/FavoritesContext";
import Card from "../Card/index";
import { FavoritesConteiner, FavoritesTitle, Msg } from "./styles";

const Favorites = (): JSX.Element => {
	const { favorites } = useFavorites();
	return (
		<FavoritesConteiner>
			<FavoritesTitle>FAVORITES</FavoritesTitle>
			<div>
				{favorites.length > 0 ? (
					favorites.map((game, key) => (
						<Card
							key={key}
							game={game}
							currentKey={key}
						/>
					))
				) : (
					<Msg>Adicione jogos aos favoritos...</Msg>
				)}
			</div>
		</FavoritesConteiner>
	);
};

export default Favorites;
