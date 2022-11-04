import { OrderSettingsProvider } from "./OrderSettingsContext";
import { FavoritesProvider } from "./FavoritesContext";
import { GamesProvider } from "./GamesContext";
import { AuthProvider } from "./AccountContext";
import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";
import { ConfigUserProvider } from "./ConfigUserContext";
interface ProvidersProps {
	children: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<ConfigUserProvider>
					<FavoritesProvider>
						<OrderSettingsProvider>
							<GamesProvider>{children}</GamesProvider>
						</OrderSettingsProvider>
					</FavoritesProvider>
				</ConfigUserProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default Providers;
