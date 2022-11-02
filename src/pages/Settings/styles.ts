import mixings from "../../assets/styles/mixins";
import styled from "styled-components";

export const SettingsContent = styled.main`
	width: 100%;
	height: calc(100% - 20vh);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	overflow-y: auto;
`;

export const ToggleButtom = styled.button`
	height: 3em;
	width: 9em;
	background: ${mixings.colors.secondaryColor};
	border: none;
	border-radius: 2em;
	font-family: ${mixings.constants.FontFamily};
	font-size: 4em;
	margin-bottom: 5rem;
	cursor: pointer;

	&:hover {
		transform: scale(0.99);
	}
`;

export const SubmitButtom = styled.button`
	height: 3em;
	width: 9em;
	background: ${mixings.colors.primaryColor};
	border: none;
	border-radius: 2em;
	font-family: ${mixings.constants.FontFamily};
	font-size: 6em;
	margin-bottom: 5rem;
	cursor: pointer;

	&:hover {
		transform: scale(0.99);
	}
`;

export const FormContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	legend {
		line-height: 2em;
		font-size: 5rem;
	}
	span {
		font-size: 3rem;
		color: ${mixings.colors.textColor};
	}
`;
