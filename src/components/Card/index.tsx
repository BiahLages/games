import { ICardGames } from "../../types/interfaces/games";
import { Link } from "react-router-dom";

import { STitle, SDate, SGameImg, /* SDescription, SActionButton,*/ SCard } from "./styles";

const Card = ({ game, currentKey }: { game: ICardGames; currentKey: number }): JSX.Element => {
	return (
		<Link to={`/game/${game.id}`}>
			<SCard>
				<SGameImg
					src={game.image}
					alt={"Imagem do jogo"}
				/>
				<STitle key={`title${currentKey}`}>
					{game.title} - {game.year}
					{/* <SDate key={`date${currentKey}`}>{game.year}</SDate> */}
				</STitle>
				{/* <SDescription>Integer iaculis vestibulum malesuada. Maecenas accumsan eleifend mi, non tempor massa elementum vel. Vivamus condimentum at orci ultricies aliquam. Etiam gravida ullamcorper metus, in suscipit lacus sagittis ultrices.</SDescription>
			<SActionButton>Gender1</SActionButton>
			<SActionButton>Gender2</SActionButton> */}
			</SCard>
		</Link>
	);
};

export default Card;
