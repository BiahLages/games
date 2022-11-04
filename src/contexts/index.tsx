import { OrderSettingsProvider } from "./OrderSettingsContext";
import { FavoritesProvider } from "./FavoritesContext";
import { ProfilesProvider } from "./ProfilesContext";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AccountContext";
import { GamesProvider } from "./GamesContext";
import { ReactNode } from "react";
import { ConfigUserProvider } from "./ConfigUserContext";
interface ProvidersProps {
	children: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
	return (
		<BrowserRouter>
			<AuthProvider>
<<<<<<< HEAD
				<ConfigUserProvider>
=======
				<ProfilesProvider>
>>>>>>> 3ea2746848fe5825555193dd64216672a30b7370
					<FavoritesProvider>
						<OrderSettingsProvider>
							<GamesProvider>{children}</GamesProvider>
						</OrderSettingsProvider>
					</FavoritesProvider>
<<<<<<< HEAD
				</ConfigUserProvider>
=======
				</ProfilesProvider>
>>>>>>> 3ea2746848fe5825555193dd64216672a30b7370
			</AuthProvider>
		</BrowserRouter>
	);
};

export default Providers;
