import styled, { css, Interpolation } from "styled-components";
import { IStyleScore } from "src/types/interfaces/games";
import mixings from "src/assets/styles/mixins";
import { ProfileItemProps } from "src/types/interfaces/system";

export const SCard = styled.div<ProfileItemProps>`
	box-shadow: 0 0 0.4rem 0.3rem ${mixings.colors.contrast1}33;
	height: 40vh;
	aspect-ratio: 0.706;
	margin: 1rem;
	position: relative;
	cursor: pointer;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	${({ backgroundImage }): Interpolation<ProfileItemProps> => {
		return css`
			background-image: url(${backgroundImage});
		`;
	}}
`;

export const STitle = styled.h2`
	color: #fff;
	font-weight: 400;
	position: absolute;
	bottom: 5rem;
	left: 50%;
	transform: translate(-50%, -50%);
	background: rgb(2, 0, 36);
	background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(205, 10, 204, 1) 82%, rgba(0, 212, 255, 1) 100%);
	padding: 7px 0px 7px 0px;
	width: 100%;
	text-align: center;
`;
export const SDate = styled.text`
	color: #fff;
	font-weight: 300;
	position: absolute;
	top: 85%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* background-color: rgba(0, 0, 0, 0.4); */
	padding: 7px 0px 7px 0px;
	width: 100%;
	text-align: center;
	size: 15px;
	font-size: 200;
`;
export const SDescription = styled.p`
	color: #fff;
	font-weight: 300;
`;
export const SActionButton = styled.button`
	margin: 0 5px;
	padding: 8px 14px;
	background: rgba(155, 155, 155, 0.2);
	color: #fff;
	cursor: pointer;
	border: 1px solid #fff;
	outline: 0;
	font-weight: 300;
	:hover {
		opacity: 0.8;
	}
`;

export const SStars = styled.div`
	width: 20rem;
	height: 2rem;
	background: ${(props: IStyleScore): string => `linear-gradient(90deg, rgba(241, 255, 0, 1) ${props.score * 10}%, rgba(255, 255, 255, 1) ${props.score * 10}%)`};
	img {
		width: 100%;
		height: 100%;
	}
`;

export const SScore = styled.div`
	position: absolute;
	bottom: 3rem;
	width: calc(100% - 2px);
	border-left: 1px solid #fff3;
	border-right: 1px solid #fff3;
	display: flex;
	flex-direction: row;
	gap: 1.5rem;
	padding: 1rem 0;
	color: ${mixings.colors.contrast1};
	background-color: ${mixings.colors.baseBg1Dark};
`;

export const SText = styled.p`
	font-size: 2em;
	padding-left: 0.3em;
`;
