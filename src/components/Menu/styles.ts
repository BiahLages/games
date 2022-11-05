import { MenuItemButtonProps } from "../../types/interfaces/system";
import styled from "styled-components";
import mixings from "../../assets/styles/mixins";

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
`;

export const MenuContent = styled.div`
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
		margin-top: 10rem;
		max-height: 100%;
		max-width: 40rem;
		cursor: pointer;
		transition: 0.42s;
	}

	img:active {
		transform: scale(0.995);
	}
`;
export const MenuOptions = styled.nav<MenuItemButtonProps>`
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
	width: 20%;
	display: flex;
	justify-content: flex-end;

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
`;
