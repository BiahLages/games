import { createGlobalStyle, DefaultTheme, GlobalStyleComponent, ThemeProps } from "styled-components";
import mixings from "./mixins";

const GlobalStyle: GlobalStyleComponent<ThemeProps<DefaultTheme>, DefaultTheme> = createGlobalStyle`
	body {
	    margin: 0;
	    padding: 0;
		box-sizing: border-box;
		font-family: ${mixings.constants.FontFamily};
		font-weight: 400;
	}
`;

export default GlobalStyle;
