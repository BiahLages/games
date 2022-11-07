import mixings from "../assets/styles/mixins";
import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	display: flex;
	min-height: 100vh;
	background: ${mixings.colors.baseBg1Dark};
	color: ${mixings.colors.contrast1};
`;
export const ContentContainer = styled.div`
	width: 100%;
	padding-top: 10rem;
`;
