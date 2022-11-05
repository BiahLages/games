import styled, { css, Interpolation } from "styled-components";

interface ProfileContentSelectorProps {
	profile: string;
}

export const ProfileContentCards = styled.main`
	width: 98vw;
	height: 100%;
	overflow-y: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;
