import styled, { css, Interpolation } from "styled-components/macro";
import { ProfileItemProps } from "src/types/interfaces/system";
import mixings from "src/assets/styles/mixins";

export const LoadingUserStyle = styled.div<ProfileItemProps>`
	background: ${mixings.colors.baseBg1Dark};
	width: 100%;
	height: 100vh;
	max-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		width: 20vw;
		aspect-ratio: 1;
		box-shadow: 0 0 1rem 1rem ${mixings.colors.baseBg1Dark};
		${({ backgroundImage }): Interpolation<ProfileItemProps> => {
			return css`
				background-image: url(${backgroundImage});
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			`;
		}}
	}
`;
