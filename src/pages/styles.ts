import mixings from "../assets/styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	background: ${mixings.colors.baseBg1};
	color: ${mixings.colors.contrast1};
`;
export const ContentContainer = styled.div`
	width: calc(100% - 15rem);
`;
