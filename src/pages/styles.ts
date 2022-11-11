import mixings from "../assets/styles/mixins";
import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	max-width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: ${mixings.colors.baseBg1Dark};
	color: ${mixings.colors.contrast1};
`;
export const ContentContainer = styled.div`
	/* width: calc(100% - 20rem); */
	margin-top: 10rem;
	min-height: auto;
	/* calc(100% - 15rem); */
`;
