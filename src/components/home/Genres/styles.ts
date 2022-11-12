import mixings from "src/assets/styles/mixins";
import styled from "styled-components/macro";

export const Row = styled.div`
	height: calc(100% - 30px);
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 1rem;

	flex-wrap: wrap;

	div#genres {
		height: 20vh;
		font-size: 0.75rem;

		h2#genresTitle {
			bottom: -2rem;
			font-style: italic;
			font-weight: lighter;
			letter-spacing: 0.2rem;
			line-height: 1.2rem;
		}
		div#genresScore {
			display: none;
		}
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 4rem;
`;

export const SelectGender = styled.select`
	width: 40rem;
	margin: 2rem 2rem;
	padding: 2rem;
	text-align: center;
	font-size: 4rem;
	color: ${mixings.colors.contrast1};
	background-color: ${mixings.colors.baseBg1Dark};
	border: none;
	box-shadow: inset 0 0 4rem 0.1rem ${mixings.colors.contrast1}33;
	border-radius: 10rem;
`;

export const CardsConteiner = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
