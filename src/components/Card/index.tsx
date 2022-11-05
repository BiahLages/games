import React from "react";
import { ICardGames } from "../../types/interfaces/games";

import { STitle, SDate, SDescription, SActionButton } from "./styles";

const Card = ({ game, currentKey }: { game: ICardGames; currentKey: number }) => {
	return (
		<div>
			<STitle key={`title${currentKey}`}>{game.title}</STitle>
			<SDate key={`title${currentKey}`}>{game.year}</SDate>
			<div>{game.image}</div>
			{/* <SDescription>Integer iaculis vestibulum malesuada. Maecenas accumsan eleifend mi, non tempor massa elementum vel. Vivamus condimentum at orci ultricies aliquam. Etiam gravida ullamcorper metus, in suscipit lacus sagittis ultrices.</SDescription>
			<SActionButton>Gender1</SActionButton>
			<SActionButton>Gender2</SActionButton> */}
		</div>
	);
};

export default Card;
