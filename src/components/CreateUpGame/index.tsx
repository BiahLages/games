import { UseAdminGames } from "../../contexts/AdminGamesContext";
import { ICardGames } from "../../types/interfaces/games";
import { useState } from "react";
import * as S from "./style";
import Input from "../Input";

const CreateUpGame = ({ game, mode, close }: { game: ICardGames; mode: string; close: () => void }): JSX.Element => {
	const { createGame, editGame } = UseAdminGames();

	const [valueTitle, setValueTitle] = useState(game.title || "");
	const [valueImage, setValueImage] = useState(game.image || "");
	const [valueDescription, setValueDescription] = useState(game.description || "");
	const [valueYear, setValueYear] = useState(game.year || "");
	const [valueScore, setValueScore] = useState(game.score || "");
	const [valueTrailer, setValueTrailer] = useState(game.trailer || "");
	const [valueGamePlay, setValueGamePlay] = useState(game.gameplay || "");
	const [valueGenre, setValueGenre] = useState("");

	/*setMode(modeUporCreate);*/
	const actionCUpGames = async (): Promise<void> => {
		const data: ICardGames = {
			title: valueTitle,
			image: valueImage,
			description: valueDescription,
			year: valueYear,
			score: valueScore,
			trailer: valueTrailer,
			gameplay: valueGamePlay,
			genreId: valueGenre,
		};
		switch (mode) {
			case "update":
				if (game.id) editGame(game.id, data);
				break;
			case "create":
				createGame(data);
				break;
		}
	};

	return (
		<S.Overlay>
			<S.FormUpCreate>
				<h1> {!mode ? `To Edit Game` : `Add Game`}</h1>
				<span
					onClick={(): void => {
						close();
					}}
				>
					✖️
				</span>
				<Input
					label="Game Name"
					placeholder={valueTitle}
					type="text"
					value={setValueTitle}
				/>
				<Input
					label="Link Image"
					placeholder={valueImage}
					type="text"
					value={setValueImage}
				/>
				<Input
					label="Description"
					placeholder={valueDescription}
					type="text"
					value={setValueDescription}
				/>
				<Input
					label="Year"
					placeholder={valueYear}
					type="text"
					value={setValueYear}
				/>
				<Input
					label="Score"
					placeholder={valueScore}
					type="text"
					value={setValueScore}
				/>
				<Input
					label="Link Trailer"
					placeholder={valueTrailer}
					type="text"
					value={setValueTrailer}
				/>
				<Input
					label="Link Gameplay"
					placeholder={valueGamePlay}
					type="text"
					value={setValueGamePlay}
				/>
				<Input
					label="Genre"
					placeholder={valueGenre}
					type="text"
					value={setValueGenre}
				/>
				<S.ButtonSubmit
					onClick={(e): void => {
						actionCUpGames();
						e.preventDefault();
						e.stopPropagation();
					}}
				>
					{!mode ? `To Edit` : `Add`}
				</S.ButtonSubmit>
			</S.FormUpCreate>
		</S.Overlay>
	);
};

export default CreateUpGame;
