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
	}
`;

export const MenuOptions = styled.div`
	position: absolute;
	right: 0;
	top: 8vh;
	width: 20rem;
	background-color: ${mixings.colors.contrast1};
	display: flex;
	flex-direction: column;
	align-items: center;

	li {
		box-sizing: border-box;
		width: 100%;
		padding: 2rem;
		list-style-type: none;
		text-align: center;
		font-size: 2.5rem;
		cursor: pointer;

		:hover {
			background-color: ${mixings.colors.primaryColorOpacity};
		}
	}
`;

export const Profile = styled.article`
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
`;
