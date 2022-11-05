import mixings from "../../assets/styles/mixins";
import styled from "styled-components";

export const GameContentCards = styled.main`
	width: 100%;
	height: calc(100% - calc(20vh + 25em));
	color: ${mixings.colors.contrast1};
	overflow-y: auto;
`;
