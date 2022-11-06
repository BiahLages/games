import styled, { keyframes } from "styled-components";
import mixings from "../../assets/styles/mixins";

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

export const SwicherContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	#forgot {
		cursor: pointer;
		&:hover {
			transform: scale(0.98);
		}
	}

	p {
		font-size: 2.5em;
	}
`;

export const SwicherButtom = styled.button`
	height: 2.5em;
	width: 5.5em;
	background: transparent;
	color: ${mixings.colors.primaryColor};
	border: none;
	border-radius: 0.5em;
	font-family: ${mixings.constants.FontFamily};
	font-size: 2.5em;
	cursor: pointer;

	&:hover {
		transform: scale(0.98);
	}
`;

export const SubmitButtom = styled.button`
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
