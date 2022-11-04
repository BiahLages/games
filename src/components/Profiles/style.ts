import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const ContainerProfiles = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	justify-items: flex-start;
	flex-wrap: wrap-reverse;
`;

export const DivAdd = styled.div`
	width: 40em;
	height: 45em;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	cursor: pointer;
	div {
		font-size: 20em;
		color: ${mixings.colors.contrast0};
		border-radius: 50%;
		box-shadow: 1px 1px 2px 1px ${mixings.colors.primaryColor};
	}
`;
