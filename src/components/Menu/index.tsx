import { LogoContainer, MenuContainer, MenuContent, MenuOptions, Profile, SContentSeach } from "./styles";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useProfiles } from "../../contexts/ProfilesContext";
import triangule from "../../assets/icons/triangulo.png";
import { useAuth } from "../../contexts/AccountContext";
import logo from "../../assets/images/gamedevs.png";
import { MenuProps } from "../../types/types";
import { useEffect, useState } from "react";
import Input from "../Input";
import { useConfigUser } from "src/contexts/ConfigUserContext";
import { ApiGames } from "src/types/interfaces/api";
import { useGame } from "src/contexts/GamesContext";

const Menu = ({ path }: MenuProps): JSX.Element => {
	const { logout } = useAuth();
	const { allGames, handleGetServerStatus } = useGame();
	const { currentProfile } = useProfiles();
	const { functions } = useConfigUser();
	const navigate: NavigateFunction = useNavigate();
	const [active, setActive] = useState(false);
	const [allGamesSwitch, setAllGamesSwitch] = useState<ApiGames[]>([]);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [search, setSearch] = useState("");

	useEffect(() => {
		if (search.length > 0) {
			handleGetServerStatus();
			setAllGamesSwitch(allGames);
		} else {
			setAllGamesSwitch([]);
		}
	}, [search]);

	return (
		<MenuContainer>
			<MenuContent>
				<LogoContainer>
					<img
						onClick={(): void => {
							navigate("/");
						}}
						src={logo}
						alt="GameDevs Logo"
					/>
				</LogoContainer>
				{Boolean(path === "home" || path === "/game/:id") && (
					<SContentSeach>
						<Input
							label="search"
							type="text"
							placeholder="Pesquisa"
							value={setSearch}
						/>
						{allGamesSwitch
							.filter((e: ApiGames) => e.title.toLowerCase().includes(search.toLowerCase()))
							.map((e: ApiGames) => {
								return (
									<span
										key={e.id}
										onClick={(): void => {
											navigate("/loading");
											setTimeout(() => navigate(`/game/${e.id}`), 2000);
										}}
									>
										{e.title}
									</span>
								);
							})}
					</SContentSeach>
				)}
				{Boolean(path === "home" || path === "/game/:id") &&
					currentProfile && (
						<Profile backgroundImage={currentProfile.imageUrl}>
							<div
								id="profileMenu"
								onClick={(): void => {
									setActive(!active);
								}}
							></div>
							<img
								src={triangule}
								alt="triangule"
								onClick={(): void => {
									setActive(!active);
								}}
							/>
						</Profile>
					)}
				{active ? (
					<MenuOptions>
						<li
							onClick={(): void => {
								navigate("/profile");
								setActive(!active);
							}}
						>
							Profiles
						</li>
						<li
							onClick={(): void => {
								navigate("/settings");
								functions.handdleConfigMenus();
								setActive(!active);
							}}
						>
							Settings
						</li>
						<li
							onClick={(): void => {
								logout();
								setActive(!active);
							}}
						>
							Logout
						</li>
					</MenuOptions>
				) : (
					<></>
				)}
			</MenuContent>
		</MenuContainer>
	);
};

export default Menu;
