import styled from "styled-components";
import mixings from "src/assets/styles/mixins";

export const Overlay = styled.div`
	position: fixed;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: ${mixings.colors.primaryColorOpacity};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 2;
`;
