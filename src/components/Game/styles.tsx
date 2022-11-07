import { IStyleScore } from "src/types/interfaces/games";
import styled from "styled-components";
import mixings from "../../assets/styles/mixins";

export const SGame = styled.div`
	color: #fff;
	margin-top: 3em;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	font-size: 3rem;
	padding: 1em 1em 0 1em;
`;

export const SRatingContent = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 1em;
`;

export const SInfoContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SMediaContent = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1em;
`;

export const SVideosContent = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1em;
	padding-bottom: 1em;
`;

export const STitleHeart = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const STitle = styled.h2`
	font-size: 2em;
	margin: 0;
`;

export const SHeart = styled.img`
	width: 3em;
	padding-right: 2em;
`;

export const SText = styled.p`
	font-size: 1em;
	margin: 0;
`;

export const SImage = styled.img`
	width: 15em;
`;

export const SGameplay = styled.iframe`
	width: 560px;
	height: 315px;
`;

export const STrailer = styled.iframe`
	max-width: 280px;
	max-height: 157.5px;
`;

export const SGenre = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1em;
`;

export const SButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1em;
`;

export const SButton = styled.button`
	position: relative;
	height: 2em;
	width: 6em;
	background: ${mixings.colors.primaryColor};
	color: ${mixings.colors.contrast1};
	border: none;
	border-radius: 2em;
	margin-top: 1em;
	font-family: ${mixings.constants.FontFamily};
	font-size: 16px;
	cursor: pointer;

	&:hover {
		transform: scale(0.98);
	}
`;

export const SScore = styled.div`
	display: flex;
	flex-direction: row;
`;

export const SStars = styled.div`
	width: 100rem;
	height: 9rem;
	background: ${(props: IStyleScore): string => `linear-gradient(90deg, rgba(241, 255, 0, 1) ${props.score * 10}%, rgba(255, 255, 255, 1) ${props.score * 10}%)`};
	img {
		width: 100%;
		height: 100%;
	}
`;
