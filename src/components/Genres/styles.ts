import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const GenresConteiner = styled.div`
	box-shadow: inset 0 0 0.25rem 0.5rem ${mixings.colors.contrast0}22;
	width: 1150px;
	margin: 30px auto;
	padding: 20px;
	min-height: 398.59px;
	border-radius: 8px;
`;

export const GenresTitle = styled.h2`
	font-size: 20px;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
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
