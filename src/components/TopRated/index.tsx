// import { useState, useEffect } from 'react';
import Card from "../Card";
import { useGame } from "../../contexts/GamesContext";
import { Row, Column, Div, ArrowBack } from "./styles";

const TopRated = (): JSX.Element => {
	const { games, currentPage, setCurrentPage, lastValidPage, setSubmit } = useGame();
	return (
		<Div>
			<Column>
				<h2>EM ALTA</h2>
				<Row>
					{currentPage !== 1 && (
						<ArrowBack
							onClick={(): void => {
								console.log("ArrowBack");
								console.log(currentPage);
								setCurrentPage(currentPage - 1);
								setSubmit(true);
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
						<ArrowBack
							onClick={(): void => {
								console.log("ArrowForward");
								console.log(lastValidPage);
								console.log(currentPage);
								setCurrentPage(currentPage + 1);
								setSubmit(true);
							}}
						>
							▶
						</ArrowBack>
					)}
				</Row>
			</Column>
		</Div>
	);
};

export default TopRated;
