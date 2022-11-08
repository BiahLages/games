import * as S from "./style";
import { useState } from "react";
import { ICardGames } from "../../types/interfaces/games";
import Input from "../Input";
import { UseAdminGames } from "../../contexts/AdminGamesContext";

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
				if (game.id) {
					editGame(game.id, data);
				}
				break;
			case "create":
				createGame(data);
				break;
		}
	};

	return (
		<S.Overlay>
			<S.FormUpCreate>
				<S.HeaderForm>
					<h1> {Boolean(mode === "update") ? `Edit Game` : `Add Game`}</h1>
					<span
						onClick={(e): void => {
							close();
							e.stopPropagation();
						}}
					>
						➕
					</span>
				</S.HeaderForm>
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
					Save
				</S.ButtonSubmit>
			</S.FormUpCreate>
		</S.Overlay>
	);
};

export default CreateUpGame;
