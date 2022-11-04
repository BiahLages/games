import styled, {keyframes} from "styled-components";
import mixings from "src/assets/styles/mixins";

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

export const ContainerImgProfile = styled.div`
	width: 30em;
	height: 30em;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	box-shadow: 1px 1px 3px 1px ${mixings.colors.primaryColor};
`;

export const ImgProfile = styled.img`
	width: 25em;
	height: 25em;
`;

export const NameUser = styled.div`
	h2 {
		font-size: 3em;
		text-align: center;
	}
`;

export const DivImgEdit = styled.div`
	height: 6em;
`;

export const ImgEditDelete = styled.img`
	width: 6em;
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
`

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
	div {
		position: relative;
		right: calc(2em - 50%);
		cursor: pointer;
	}
	h2 {
		position: relative;
		top: -2em;
		font-size: 3em;
	}
`;

export const OptionsEditDelete = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
        div {
            width: 7em;
            cursor: pointer;
    }
`;
