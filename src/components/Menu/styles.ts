import {
	MenuItemButtonProps,
	ProfileItemProps,
} from "../../types/interfaces/system";
import styled, { css, Interpolation, keyframes } from "styled-components/macro";
import mixings from "../../assets/styles/mixins";

const SGrownAnimation = keyframes`
 0% { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);}
 100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);}
`;

export const MenuContainer = styled.header`
	position: fixed;
	width: 100%;
	height: 10vh;
	background-color: ${mixings.colors.primaryColorOpacity};
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
`;

export const MenuContent = styled.div`
	position: relative;
	width: calc(100% - 10rem);
	height: 8vh;
	max-width: 1600px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		font-size: 4rem;
		cursor: pointer;
	}
	div {
		width: 60%;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		label {
			display: none;
		}
		input {
			outline: none;
			border: none;
			height: calc(100% - 7rem);
			width: 100%;
			max-width: 400px;
			padding: 1.2rem;
			border-radius: 5px;
			background-color: ${mixings.colors.baseLine};
		}
	}
`;

export const LogoContainer = styled.header`
	max-height: 90%;
	width: 20%;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	img {
		margin-top: 0.8rem;
		max-height: 100%;
		max-width: 20rem;
		cursor: pointer;
		transition: 0.42s;
	}

	img:active {
		transform: scale(0.995);
	}
`;
export const MenuOptions = styled.nav<MenuItemButtonProps>`
	position: absolute;
	right: -10rem;
	top: 9vh;
	color: ${mixings.colors.primaryColor};
	width: calc(100% - 10rem);
	max-width: 100rem;
	height: calc(100vh - 10vh);
	background-color: ${mixings.colors.baseBg1Dark};
	background-image: linear-gradient(
		0deg,
		${mixings.colors.primaryColorOpacity} 0%,
		${mixings.colors.primaryColorOpacity} 100%
	);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	gap: 1rem;
	transition: 0.84s;
	clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

	${({ active }): Interpolation<MenuItemButtonProps> => {
		return (
			active &&
			css`
				animation-name: ${SGrownAnimation};
				animation-duration: 0.84s;
				animation-direction: normal;
				animation-fill-mode: forwards;
			`
		);
	}}

	li {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		padding: 2rem;
		list-style-type: none;
		text-align: center;
		font-size: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		:hover {
			background-color: ${mixings.colors.primaryColorOpacity};
			color: ${mixings.colors.secondaryColor};
		}
	}
`;

export const Profile = styled.article<ProfileItemProps>`
	width: 20%;
	display: flex;
	justify-content: flex-end;

	div#profileMenu {
		width: 7rem;
		height: 7rem;
		border-radius: 3.5rem;
		cursor: pointer;
		${({ backgroundImage }): Interpolation<ProfileItemProps> => {
			return css`
				background-image: url(${backgroundImage});
			`;
		}}
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	img {
		width: 3rem;
		height: 3rem;
		transition: 1.42s;
		cursor: pointer;
		${({ active }): Interpolation<ProfileItemProps> => {
			return (
				active &&
				css`
					transform: rotateX(-180deg);
				`
			);
		}}
	}
`;

export const SContentSeach = styled.div`
	position: absolute;
	top: 1rem;
	left: 50rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-top: 3rem;
	gap: 1rem;
	span {
		display: flex;
		align-items: center;
		width: 100%;
		max-width: 400px;
		padding: 1.2rem;
		background-color: ${mixings.colors.contrast1};
		font-size: 2rem;
		color: black;
		justify-content: center;
		cursor: pointer;
		&:hover {
			background-color: grey;
		}
	}
	@media (max-width: 599px) {
		left: 23rem;
	}
	@media (min-width: 600px) and (max-width: 1022px) {
		left: 30rem;
	}
`;
