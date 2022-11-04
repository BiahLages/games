import { OrderSettingsProvider } from "./OrderSettingsContext";
import { FavoritesProvider } from "./FavoritesContext";
import { ProfilesProvider } from "./ProfilesContext";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AccountContext";
import { GamesProvider } from "./GamesContext";
import { ReactNode } from "react";

interface ProvidersProps {
	children: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<ProfilesProvider>
					<FavoritesProvider>
						<OrderSettingsProvider>
							<GamesProvider>{children}</GamesProvider>
						</OrderSettingsProvider>
					</FavoritesProvider>
				</ProfilesProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default Providers;
