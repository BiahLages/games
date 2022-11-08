import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const FavoritesConteiner = styled.div`
	box-shadow: inset 0 0 0.25rem 0.5rem ${mixings.colors.contrast0}22;
	width: 1150px;
	margin: 30px auto;
	padding: 20px;
	min-height: 330.59px;
	border-radius: 8px;
`;

export const FavoritesTitle = styled.h2`
	font-size: 20px;
`;

export const Msg = styled.h3`
	margin-top: 230px;
	font-size: 15px;
`;
