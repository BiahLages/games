import styled from "styled-components";

export const SettingsContent = styled.main`
	width: 100%;
	height: calc(100% - 20vh);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	overflow-y: auto;
	article {
		padding-top: 20em;
		display: flex;
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		padding: 5em;
		&:hover {
			transform: scale(0.99);
		}
	}
	span {
		font-size: 3em;
	}
`;

export const EditProfile = styled.img`
	width: 36em;
`;

export const CheckProfiles = styled.img`
	width: 36em;
`;