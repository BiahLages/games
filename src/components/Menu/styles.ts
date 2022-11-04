import { MenuItemButtonProps, MenuItemProps } from "../../types/interfaces/system";
import styled, { css, Interpolation } from "styled-components";
import mixings from "../..//assets/styles/mixins";

export const MenuContainer = styled.header`
	position: fixed;
	box-sizing: border-box;
	padding: 2rem;
	width: 100%;
	height: 8vh;
	background-color: rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;

	div.menuContainer {
		position: relative;
		width: 100%;
		height: 8vh;
		max-width: 1280px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		h1 {
			font-size: 4rem;
			cursor: pointer;
		}

		input {
			outline: none;
			border: none;
			width: 50%;
			max-width: 250px;
			padding: 1.2rem;
			border-radius: 5px;
			background-color: rgba(255, 255, 255, 0.7);
		}

		article {
			width: 10rem;
			display: flex;
			justify-content: center;

			div#profileMenu {
				width: 7rem;
				height: 7rem;
				border-radius: 3.5rem;
				background-color: black;
				cursor: pointer;
			}

			img {
				width: 3rem;
				height: 3rem;
				cursor: pointer;
			}
		}

		div#menuOptions {
			position: absolute;
			right: 0;
			top: 8vh;
			width: 20rem;
			background-color: white;
			display: flex;
			flex-direction: column;
			align-items: center;

			li {
				box-sizing: border-box;
				width: 100%;
				padding: 2rem;
				cursor: pointer;
				list-style-type: none;
				text-align: center;
				font-size: 2.5rem;

				:hover {
					background-color: rgba(0, 0, 0, 0.3);
				}
			}
		}
	}
`;

export const MenuItem = styled.div<MenuItemProps>`
	width: calc(100% - 0.8rem);
	aspect-ratio: 1;
	margin-left: 0.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${mixings.colors.baseBg2};
	border-radius: 0.8rem 0 0 0.8rem;

	${({ logout }): Interpolation<MenuItemProps> =>
		logout &&
		css`
			position: absolute;
			bottom: 0;
			width: calc(15vw - 0.8rem);
			max-width: calc(15rem - 0.8rem);
			border-radius: 0.8rem 0 0 0.8rem;
		`}

	${({ active }): Interpolation<MenuItemProps> =>
		active &&
		css`
			background-color: ${mixings.colors.baseBg3}cc;
		`}
`;

export const MenuItemButton = styled.button<MenuItemButtonProps>`
	width: 75%;
	aspect-ratio: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 0.75rem;
	background-color: ${mixings.colors.baseBg3}cc;
	border-radius: 0.5rem;
	cursor: pointer;

	:hover {
		transform: scale(1.1);
		svg {
			path#VampireMouthBlood,
			path#VampireEyes,
			path#VampireMouth {
				fill: #800000;
			}
			path#Gear {
				fill: #f559;
				stroke: #fff;
			}
		}
	}

	${({ active }): Interpolation<MenuItemProps> =>
		active &&
		css`
			background-color: ${mixings.colors.primaryColor};
			color: ${mixings.colors.contrast1};
		`}
`;
