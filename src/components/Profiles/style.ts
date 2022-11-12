import mixings from "src/assets/styles/mixins";
import styled, { keyframes } from "styled-components/macro";

export const ContainerProfiles = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	justify-items: flex-start;
	flex-wrap: wrap-reverse;
`;

export const DivAdd = styled.div`
	width: 40em;
	height: 45em;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	cursor: pointer;
	div {
		font-size: 20em;
		color: ${mixings.colors.contrast0};
		border-radius: 50%;
		box-shadow: 1px 1px 2px 1px ${mixings.colors.primaryColor};
	}
`;

/* state form active*/
export const toRight = keyframes`
	to {
		position: fixed;
		left: 0;
	}
	from {
		position: fixed;
		left: -100vw
	}
`;

export const Overlay = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	max-width: 100%;
	height: 100vh;
	background: ${mixings.colors.primaryColorOpacity};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 2;
	animation: ${toRight} 2s normal;
`;

export const FormCreateProfile = styled.div`
	width: 60em;
	height: 65em;
	padding: 4em 7em;
	background: ${mixings.colors.baseBg1Dark};
	border-radius: 1em;
	box-shadow: 1px 1px 3px 2px ${mixings.colors.primaryColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const HeaderForm = styled.div`
	display: flex;

	h2 {
		font-size: 3em;
		cursor: default;
	}
	span {
		position: relative;
		top: -0.6em;
		right: -35%;
		background: ${mixings.colors.primaryColorOpacity};
		border-radius: 50%;
		padding: 0.2em;
		font-size: 4.5em;
		transform: rotate(45deg);
		cursor: pointer;
	}
`;

export const Button = styled.div`
	width: 5em;
	font-size: 3em;
	text-align: center;
	background: ${mixings.colors.primaryColor};
	box-shadow: 1px 1px 2px 1px ${mixings.colors.contrast0};
	border-radius: 0.5em;
	padding: 0.5em;
	cursor: pointer;
`;
