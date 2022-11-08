import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const TopRatedTitle = styled.h2`
	font-size: 20px;
	margin-bottom: 10px;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 264.59px;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TopRatedConteiner = styled.div`
	box-shadow: inset 0 0 0.25rem 0.5rem ${mixings.colors.contrast0}22;
	width: 1150px;
	min-height: 330.59px;
	margin: auto;
	padding: 20px;
	border-radius: 8px;
`;

export const ArrowBack = styled.div`
	margin: auto auto auto 5px;
	font-size: 40px;
	border: solid 1px #fff;
	border: none;
	cursor: pointer;
`;
export const ArrowFoward = styled.div`
	margin: auto 5px auto auto;
	font-size: 40px;
	border: solid 1px #fff;
	border: none;
	cursor: pointer;
`;
