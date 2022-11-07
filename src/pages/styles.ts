import mixings from "../assets/styles/mixins";
import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: 99vh;
	display: flex;
	background: ${mixings.colors.baseBg1Dark};
	color: ${mixings.colors.contrast1};
`;
export const ContentContainer = styled.div`
	width: 100%;
	padding-top: 10rem;
	height: calc(100% - 10rem);
`;
