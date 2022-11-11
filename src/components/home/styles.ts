import mixings from "src/assets/styles/mixins";
import styled, { css, Interpolation } from "styled-components";

export interface IHomeComponentsContainer {
	scroll?: "side" | "down";
}

export interface IHomeComponentsRow {
	type?: "overflow" | "mini";
	align?: "start" | "center";
}

export const SHomeComponentsContainer = styled.div<IHomeComponentsContainer>`
	box-shadow: inset 0 0 0.25rem 0.5rem ${mixings.colors.contrast0}22;
	width: 100%;
	min-height: 50vh;
	padding: 2rem;
	border-radius: 8px;
	margin-bottom: 1rem;

	${({ scroll }): Interpolation<IHomeComponentsContainer> => {
		switch (scroll) {
			case "side":
				return (
					scroll &&
					css`
						display: flex;
						overflow-x: hidden;
						flex-direction: column;
						justify-content: space-around;
						align-items: flex-start;
					`
				);
			case "down":
				break;

			default:
				return css`
					display: flex;
				`;
		}
	}}
`;

export const HomeComponentsTitle = styled.h2`
	font-size: 20px;
	margin-bottom: 10px;
`;

export const HomeComponentsRow = styled.div<IHomeComponentsRow>`
	height: calc(100% - 30px);
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	justify-content: flex-start;
	padding-bottom: 2rem;

	${({ type, align }): Interpolation<IHomeComponentsRow> => {
		switch (type) {
			case "mini":
				return css`
					flex-wrap: wrap;

					div#genres {
						height: 20vh;
						font-size: 0.75rem;

						h2#genresTitle {
							bottom: -2rem;
							font-style: italic;
							font-weight: lighter;
							letter-spacing: 0.2rem;
							line-height: 1.2rem;
						}
						div#genresScore {
							display: none;
						}
					}
				`;

			case "overflow":
				return css`
					${align === "start" &&
					css`
						justify-content: flex-start;
					`}
					${align === "center" &&
					css`
						justify-content: space-between;
					`}
					overflow-x: auto;
					&::-webkit-scrollbar-track {
						background-color: ${mixings.colors.baseBg1Dark};
					}
					&::-webkit-scrollbar {
						width: 0.8vw;
						background: ${mixings.colors.baseBg2Dark};
					}
					&::-webkit-scrollbar-thumb {
						background: ${mixings.colors.baseBg2Dark};
						box-shadow: 0 0 3rem 0 ${mixings.colors.baseBg2Dark},
							inset 0 0 1.8rem 0.5rem
								${mixings.colors.contrast1}33;
						border-radius: 20px;
					}
				`;

			default:
				return css`
					flex-wrap: wrap;
				`;
		}
	}}

	overflow-x: auto;

	&::-webkit-scrollbar-track {
		background-color: ${mixings.colors.baseBg1Dark};
	}
	&::-webkit-scrollbar {
		height: 1vh;
		background: ${mixings.colors.baseBg2Dark};
	}
	&::-webkit-scrollbar-thumb {
		background: ${mixings.colors.baseBg2Dark};
		box-shadow: 0 0 3rem 0 ${mixings.colors.baseBg2Dark},
			inset 0 0 1.8rem 0.5rem ${mixings.colors.contrast1}33;
		border-radius: 20px;
	}
`;

export const ArrowBack = styled.div`
	font-size: 40px;
	border: solid 1px #fff;
	border: none;
	cursor: pointer;
`;

export const ArrowFoward = styled.div`
	font-size: 40px;
	border: solid 1px #fff;
	border: none;
	cursor: pointer;
`;
