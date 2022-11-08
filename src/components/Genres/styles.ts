import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const GenresConteiner = styled.div`
	box-shadow: inset 0 0 0.25rem 0.5rem ${mixings.colors.contrast0}22;
	width: 100%;
	min-height: 50vh;
	display: flex;
	padding: 2rem;
	border-radius: 8px;
	margin-bottom: 1rem;
`;

export const GenresTitle = styled.h2`
	font-size: 20px;
`;

export const Row = styled.div`
	display: flex;
	width: 100%;
	gap: 5rem;
	justify-content: center;
	flex-direction: row;
	margin-top: 2rem;
	flex-wrap: wrap;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	/* margin: 4rem; */
	margin-top: 4rem;
`;

export const SelectGender = styled.select`
	margin: 22px auto 22px 3px;
	width: 35rem;
	font-size: 18px;
	color: #fff;
	background-color: black;
	border-radius: 5px;
`;

export const CardsConteiner = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
