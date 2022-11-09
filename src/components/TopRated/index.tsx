// import { useState, useEffect } from 'react';
import Card from "../Card";
import { useGame } from "../../contexts/GamesContext";
import {
	Row,
	TopRatedConteiner,
	ArrowBack,
	ArrowFoward,
	TopRatedTitle,
} from "./styles";

const TopRated = (): JSX.Element => {
	const { games, currentPage, setCurrentPage, lastValidPage } = useGame();
	return (
		<TopRatedConteiner>
			<TopRatedTitle>EM ALTA 🔥</TopRatedTitle>
			<Row>
				{true && (
					<ArrowBack
						onClick={(): void => {
							setCurrentPage(currentPage - 1);
						}}
					>
						◀
					</ArrowBack>
				)}
				{games
					? games.map((game, key) => (
							<Card
								key={key}
								game={game}
								currentKey={key}
							/>
					  ))
					: []}
				{!lastValidPage && (
					<ArrowFoward
						onClick={(): void => {
							setCurrentPage(currentPage + 1);
						}}
					>
						▶
					</ArrowFoward>
				)}
			</Row>
		</TopRatedConteiner>
	);
};

export default TopRated;
