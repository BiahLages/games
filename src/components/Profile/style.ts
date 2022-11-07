import styled, { css, Interpolation, keyframes } from "styled-components";
import mixings from "../../assets/styles/mixins";
import { ProfileItemProps } from "../../types/interfaces/system";

/*first initial state(case false)*/
export const ContainerProfile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ContentProfile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 40em;
	height: 45em;
`;

export const ContainerImgProfile = styled.div<ProfileItemProps>`
	width: 30em;
	height: 30em;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	box-shadow: 1px 1px 3px 1px ${mixings.colors.primaryColor};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;

	${({ backgroundImage }): Interpolation<ProfileItemProps> => {
		return css`
			background-image: url(${backgroundImage});
		`;
	}}
`;

export const NameUser = styled.div`
	h2 {
		font-size: 3em;
		text-align: center;
		margin-top: 1em;
	}
`;

export const DivImgEdit = styled.div`
	height: 6em;
	cursor: pointer;
	span {
		font-size: 2em;
	}
`;

export const ImgEditDelete = styled.img`
	width: 7em;
	cursor: pointer;
`;

/* second page state*/

export const toBottom = keyframes`
    to {
        position: fixed;
        top: 0;
    }
    from {
        position: fixed;
        top: -100vh;
    }
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: ${mixings.colors.primaryColorOpacity};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 9999;
	animation: ${toBottom} 2s normal;
`;

export const FormEditProfile = styled.div`
	width: 60em;
	height: 65em;
	padding: 5em;
	background: ${mixings.colors.baseBg1Dark};
	border-radius: 1em;
	box-shadow: 1px 1px 3px 2px ${mixings.colors.primaryColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const HeaderForm = styled.div`
	width: 100%;
	text-align: center;
	cursor: default;
	h2 {
		position: relative;
		top: -2em;
		font-size: 3em;
		cursor: default;
	}
	span {
		position: relative;
		right: -50%;
		top: -0.5em;
		font-size: 3em;
		background: ${mixings.colors.primaryColorOpacity};
		padding: 0.5em;
		border-radius: 50%;
		transform: rotate(45deg);
		cursor: pointer;
	}
`;

export const OptionsEditDelete = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5rem;

	div {
		width: 50%;
		aspect-ratio: 1;
		gap: 0.5em;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		span {
			font-size: 2em;
		}
	}
`;
