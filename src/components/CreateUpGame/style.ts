import styled, { keyframes } from "styled-components";
import mixings from "../../assets/styles/mixins";

const showForm = keyframes`
    0% {
        width: 0em;
        height: 0em;
    }
    100% {
        width: 100vw;
        height: auto;
    }
`;

export const Overlay = styled.div`
	position: relative;
	top: 0;
	max-width: 100vw;
	max-height: 100vh;
	height: auto;
	padding: 10em 0;
	background: ${mixings.colors.primaryColorOpacity};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 4;
	animation: ${showForm} 2s normal;
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

	h1 {
		text-align: center;
		font-size: 3em;
	}
`;

export const ButtonSubmit = styled.button`
	background: ${mixings.colors.primaryColor};
	color: ${mixings.colors.contrast0};
	padding: 0.5em;
	border: none;
	border-radius: 0.7em;
	font-size: 2.5em;
	cursor: pointer;
`;
