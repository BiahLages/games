import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const FavoritesConteiner = styled.div`
	box-shadow: inset 0 0 0.25rem 0.5rem ${mixings.colors.contrast0}22;
	width: 100%;
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	padding: 2rem;
	border-radius: 8px;
	overflow-x: hidden;

	div#favorites {
		overflow-x: auto;
		height: calc(100% - 30px);
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	div#favorites::-webkit-scrollbar-track {
		background-color: ${mixings.colors.baseBg1Dark};
	}
	div#favorites::-webkit-scrollbar {
		width: 20px;
		background: ${mixings.colors.baseBg2Dark};
	}
	div#favorites::-webkit-scrollbar-thumb {
		background: ${mixings.colors.baseBg2Dark};
		border-radius: 20px;
	}
`;

export const FavoritesTitle = styled.h2`
	font-size: 20px;
`;

export const Msg = styled.h3`
	margin-top: 230px;
	font-size: 15px;
`;
