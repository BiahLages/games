// import { useState, useEffect } from 'react';
import Card from "../Card";
import { useGame } from "../../contexts/GamesContext";
import { Row, Column, TopRatedConteiner, ArrowBack, ArrowFoward, TopRatedTitle } from "./styles";

const TopRated = (): JSX.Element => {
	const { games, currentPage, setCurrentPage, lastValidPage } = useGame();
	return (
		<TopRatedConteiner>
			<Column>
				<TopRatedTitle>EM ALTA</TopRatedTitle>
				<Row>
					{true && (
						<ArrowBack
							onClick={(): void => {
								console.log("ArrowBack");
								console.log(currentPage);
								setCurrentPage(currentPage - 1);
							}}
						>
							◀
						</ArrowBack>
					)}
					{games.map((game, key) => (
						<Card
							key={key}
							game={game}
							currentKey={key}
						/>
					))}
					{!lastValidPage && (
						<ArrowFoward
							onClick={(): void => {
								console.log("ArrowForward");
								console.log(lastValidPage);
								console.log(currentPage);
								setCurrentPage(currentPage + 1);
							}}
						>
							▶
						</ArrowFoward>
					)}
				</Row>
			</Column>
		</TopRatedConteiner>
	);
};

export default TopRated;
