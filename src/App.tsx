import "./App.css";
import GlobalStyle from "./assets/styles/global";
import Providers from "./contexts";
import Router from "./routers";

function App(): JSX.Element {
	return (
		<div className="App">
			<Providers>
				<GlobalStyle />
				<Router />
			</Providers>
		</div>
	);
}

export default App;
