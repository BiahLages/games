import styled from "styled-components";

const TopRatedTitle = styled.h2`
	font-size: 20px;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

const Div = styled.div`
	margin: 50px;
`;

const ArrowBack = styled.div`
	font-size: 65px;
	border: solid 1px #fff;
	background-color: cyan;
`;

export { Row, Column, Div, ArrowBack, TopRatedTitle };
