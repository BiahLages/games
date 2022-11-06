import * as S from "./style";
import { useState } from "react";
import { api } from "../../helpers/Api";
import { ICardGames } from "../../types/interfaces/games";
import Input from "../Input";

const CreateUpGame = (/*modeUporCreate*/): JSX.Element => {
	// const { createGame, editGame } = UseAdminGames();

	const [mode, setMode] = useState(true /*modeUporCreate*/);
	const [valueTitle, setValueTitle] = useState("");
	const [valueImage, setValueImage] = useState("");
	const [valueDescription, setValueDescription] = useState("");
	const [valueYear, setValueYear] = useState("");
	const [valueScore, setValueScore] = useState("");
	const [valueTrailer, setValueTrailer] = useState("");
	const [valueGamePlay, setValueGamePlay] = useState("");
	const [valueGenre, setValueGenre] = useState("");

	/*setMode(modeUporCreate);*/
	const actionCUpGames = async (): Promise<void> => {
		switch (mode) {
			case false: {
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
				const updateGame = await api.patch("/games", data).then(res => res);
				switch (updateGame.status) {
					case 201: {
						console.log(updateGame.data);
					}
				}
			}
		}
		switch (mode) {
			case true: {
				const data: ICardGames = {
					id: "",
					title: valueTitle,
					image: valueImage,
					description: valueDescription,
					year: valueYear,
					score: valueScore,
					trailer: valueTrailer,
					gameplay: valueGamePlay,
					genreId: valueGenre,
				};
				const createGame = await api.post("/games", data).then(res => res);
				switch (createGame.status) {
					case 201: {
						console.log(createGame.data);
					}
				}
			}
		}
	};

	return (
		<S.Overlay>
			<S.FormUpCreate>
				<h1> {!mode ? `To Edit Game` : `Add Game`}</h1>
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
					label="Link Game Play"
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
