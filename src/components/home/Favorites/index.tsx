import { useFavorites } from "../../../contexts/FavoritesContext";
import Card from "../../Card/index";
import {
	SHomeComponentsContainer,
	HomeComponentsTitle,
	HomeComponentsRow,
} from "../styled";
import { Msg } from "./styles";

const Favorites = (): JSX.Element => {
	const { favorites } = useFavorites();
	return (
		<SHomeComponentsContainer scroll="side">
			<HomeComponentsTitle>FAVORITOS</HomeComponentsTitle>
			<HomeComponentsRow
				type="overflow"
				align="start"
			>
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
			</HomeComponentsRow>
		</SHomeComponentsContainer>
	);
};

export default Favorites;
