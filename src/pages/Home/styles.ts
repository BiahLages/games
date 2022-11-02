import mixings from "../../assets/styles/mixins";
import styled from "styled-components";

export const HomeContentCards = styled.main`
	width: 100%;
	height: calc(100% - calc(20vh + 25em));
	overflow-y: auto;
`;

export const HomeContentHeaderTitle = styled.div`
	border: inset 1px ${mixings.colors.contrast1}cc;
	border-radius: 25rem;
	max-height: 25%;
	max-width: 70rem;
	margin-top: 5rem;
	padding: 2rem;
	box-shadow: 0 0 3rem 0.5rem #f55, inset 0 0 2rem 1rem #f55a;
	transition: 2s;

	&:hover {
		box-shadow: 0 0 3rem 0.5rem #ff5, inset 0 0 2rem 1rem #ffff5555;
	}
`;
