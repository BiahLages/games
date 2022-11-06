import styled, { keyframes } from "styled-components";
import mixings from "../../assets/styles/mixins";

export const ContainerVerification = styled.div``;
export const VerificationResponse = styled.div``;

const toRight = keyframes`
  0% {
    position: relative;
    left: -50vw;
    opacity: 0;
  }
 100% {
  position: relative;
  left: 0px;
  opacity: 1;
 }`;

export const BackgroundForm = styled.div`
	height: auto;
	width: 75rem;
	padding: 1em;
	background: #252525;
	border-radius: 1em;
	box-shadow: 1px 1px 4px 1px ${mixings.colors.primaryColor};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-content: center;
	align-items: center;
	animation: ${toRight} 2s normal;

	h1 {
		font-size: 4em;
	}
`;

export const SubmitButton = styled.button`
	position: relative;
	left: calc(50% - 3em);
	height: 2em;
	width: 6em;
	background: ${mixings.colors.primaryColor};
	color: ${mixings.colors.contrast1};
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

export const ContainerVerification = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const VerificationResponse = styled.span`
	font-size: 2.5em;
	font-style: italic;
	margin: 0 1em 1em 1.5em;
`;
