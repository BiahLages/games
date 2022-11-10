import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const Row = styled.div`
	height: calc(100% - 30px);
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	justify-content: space-between;

	overflow-x: auto;

	&::-webkit-scrollbar-track {
		background-color: ${mixings.colors.baseBg1Dark};
	}
	&::-webkit-scrollbar {
		width: 1.3vw;
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
