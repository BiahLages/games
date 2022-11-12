import styled from "styled-components/macro";
import mixings from "../../assets/styles/mixins";

export const Values = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-content: center;
	gap: 0.5em;
	font-size: 8px;

	label {
		text-transform: capitalize;
		font-size: 1.5em;
		margin-bottom: 0.7em;
		color: ${mixings.colors.primaryColor};
	}

	input {
		height: 2em;
		margin-bottom: 0.7em;
		background: ${mixings.colors.baseBg2Dark};
		color: gray;
		border: none;
		border-radius: 0.5em;
		padding-left: 1em;
		outline: 0;
	}
`;

export const Blind = styled.span`
	position: absolute;
	right: 0.5em;
	bottom: calc(50% - 1.2em);
	max-height: 100%;
	font-size: 2em;
	text-shadow: 0 0 1px #fff;
	color: #000b;
	cursor: pointer;
`;
