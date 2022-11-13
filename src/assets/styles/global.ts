import {
	createGlobalStyle,
	DefaultTheme,
	GlobalStyleComponent,
	ThemeProps,
} from "styled-components/macro";
import mixings from "./mixins";

const GlobalStyle: GlobalStyleComponent<
	ThemeProps<DefaultTheme>,
	DefaultTheme
> = createGlobalStyle`
@media (max-width: 599px) {
	html {
		font-size: 1vw;
	}
}
@media (min-width: 600px) and (max-width: 1022px) {
	html {
		font-size: 0.7vw;
	}
}
@media (min-width: 1023px) {
	html {
		font-size: 0.8vh;
	}
}

*{
	margin: 0;
	padding: 0;
}

html, body {
		height: 100vh;
		box-sizing: border-box;
		font-family: ${mixings.constants.FontFamily};
		font-weight: 400;
	}
body::-webkit-scrollbar-track {
	background-color: ${mixings.colors.baseBg1Dark};
}
body::-webkit-scrollbar {
	width: 1.3vw;
	background: ${mixings.colors.baseBg2Dark};
}
body::-webkit-scrollbar-thumb {
	background: ${mixings.colors.baseBg2Dark};
	box-shadow: 0 0 3rem 0 ${mixings.colors.baseBg2Dark}, inset 0 0 1.8rem 0.5rem ${mixings.colors.contrast1}33;
	border-radius: 20px;
}
`;

export default GlobalStyle;
