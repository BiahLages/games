import styled, { keyframes } from "styled-components/macro";
import mixings from "../../assets/styles/mixins";

const showForm = keyframes`
    0% {
     position: relative;
	 right: -100vh;
    }
    100% {
		position: relative;
	 right: 0;
    }
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100vw;
	min-height: 100vh;
	height: auto;
	background: ${mixings.colors.primaryColorOpacity};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 9999;
`;

export const FormUpCreate = styled.div`
	width: 65em;
	height: auto;
	padding: 5em;
	border-radius: 1em;
	background: ${mixings.colors.baseBg1Dark};
	box-shadow: 1px 1px 5px 1px ${mixings.colors.primaryColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	animation: ${showForm} 1s normal;
`;

export const HeaderForm = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 0.7em;
	cursor: pointer;

	h1 {
		text-align: center;
		font-size: 3.5em;
	}

	span {
		position: relative;
		top: -1em;
		right: -80%;
		font-size: 3em;
		padding: 0.5em;
		border-radius: 50%;
		transform: rotate(45deg);
		background: ${mixings.colors.primaryColorOpacity};
	}
`;

export const ButtonSubmit = styled.button`
	background: ${mixings.colors.primaryColor};
	color: ${mixings.colors.contrast1};
	padding: 0.5em 1.5em;
	border: none;
	border-radius: 0.7em;
	box-shadow: 0.5px 0.5px 2px 0.5px ${mixings.colors.contrast1};
	font-size: 3em;
	cursor: pointer;
`;
