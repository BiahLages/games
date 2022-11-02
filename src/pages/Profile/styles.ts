import styled, { css, Interpolation } from "styled-components";

interface ProfileContentSelectorProps {
	profile: string;
}

export const ProfileContentCards = styled.main`
	width: 100%;
	height: calc(100% - 20vh);
	overflow-y: auto;
`;

export const ProfileContentSelector = styled.section<ProfileContentSelectorProps>`
	height: 10em;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 2em;

	h2 {
		border-radius: 100em;
		padding: 0.2em 0.5em;
		box-shadow: 0 0 1rem 0.25rem #181a26, inset 0 0 0.5em 0.15em #161823;
		transition: 0.42s;

		&:hover {
			box-shadow: 0 0 1rem 0.25rem #181a26, inset 0 0 0.5em 0.1em #272d45;
		}

		${({ profile }): Interpolation<ProfileContentSelectorProps> => {
			return css`
				&#${profile} {
					box-shadow: 0 0 1rem 0.25rem #181a26, inset 0 0 0.5em 0.1em #575d75;
				}
			`;
		}}
	}
`;
