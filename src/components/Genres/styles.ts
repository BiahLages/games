import styled from "styled-components";

const GenresTitle = styled.h2`
	font-size: 20px;
	margin-top: 1rem;
	margin-bottom: 2rem;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 2rem;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	/* margin: 4rem; */
	margin-top: 4rem;
`;

const Div = styled.div`
	margin: 50px;
`;

export { Row, Column, Div, GenresTitle };
