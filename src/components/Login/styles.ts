import styled from "styled-components";
import mixings from "../../assets/styles/mixins";

export const SwicherButtom = styled.button`
	height: 3em;
	width: 10em;
	background: ${mixings.colors.primaryColor};
	border: none;
	border-radius: 1em;
	font-family: ${mixings.constants.FontFamily};
	font-size: 4em;
	cursor: pointer;

	&:hover {
		transform: scale(0.98);
	}
`;

export const SubmitButtom = styled.button`
	height: 2em;
	width: 100%;
	background: ${mixings.colors.primaryColor};
	border: none;
	border-radius: 2em;
	margin-top: 1em;
	font-family: ${mixings.constants.FontFamily};
	font-size: 16px;
	cursor: pointer;

	&:hover {
		transform: scale(0.98);
	}
`;

export const VerificationResponse = styled.span`
	font-size: 2em;
	font-style: italic;
	margin: 0 1em 1em 1.5em;
`;
