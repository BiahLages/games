import styled from "styled-components";

export const Values = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.3em;
	font-size: 16px;

	label {
		text-transform: capitalize;
		font-size: 1.5em;
		margin-bottom: 0.8em;
		text-align: center;
	}

	input {
		height: 3em;
		margin-bottom: 1em;
		border: none;
		border-radius: 0.5em;
		padding-left: 1.5em;
	}
`;

export const Blind = styled.span`
	position: absolute;
	right: 1em;
	bottom: 1.5em;
	max-height: 100%;
	text-shadow: 0 0 1px #fff;
	color: #000b;
	cursor: pointer;
`;
