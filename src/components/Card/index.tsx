import React from "react";
import { Link } from "react-router-dom";
import { ICardGames } from "../../types/interfaces/games";

import { STitle, SDate, SDescription, SActionButton, SCard } from "./styles";

const Card = ({ game, currentKey }: { game: ICardGames; currentKey: number }) => {
	return (
		<Link to={`/game/${game.id}`}>
			<SCard>
				<STitle key={`title${currentKey}`}>{game.title}</STitle>
				<SDate key={`date${currentKey}`}>{game.year}</SDate>
				<div>{game.image}</div>/
				<img src={game.image} alt={"Imagem do jogo"}/>
				{/* <SDescription>Integer iaculis vestibulum malesuada. Maecenas accumsan eleifend mi, non tempor massa elementum vel. Vivamus condimentum at orci ultricies aliquam. Etiam gravida ullamcorper metus, in suscipit lacus sagittis ultrices.</SDescription>
			<SActionButton>Gender1</SActionButton>
			<SActionButton>Gender2</SActionButton> */}
			</SCard>
		</Link>
	);
};

export default Card;
