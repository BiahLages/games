import { LogoContainer, MenuContainer, MenuContent, MenuOptions, Profile } from "./styles";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useProfiles } from "../../contexts/ProfilesContext";
import triangule from "../../assets/icons/triangulo.png";
import { useAuth } from "../../contexts/AccountContext";
import logo from "../../assets/images/gamedevs.png";
import { MenuProps } from "../../types/types";
import { useState } from "react";
import Input from "../Input";
import { useConfigUser } from "src/contexts/ConfigUserContext";

const Menu = ({ path }: MenuProps): JSX.Element => {
	const { logged, logout } = useAuth();
	const { currentProfile } = useProfiles();
	const { functions } = useConfigUser();
	const navigate: NavigateFunction = useNavigate();
	const [active, setActive] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [search, setSearch] = useState("");

	return (
		<MenuContainer>
			<MenuContent>
				<LogoContainer>
					<img
						onClick={() => {
							navigate("/");
						}}
						src={logo}
						alt="GameDevs Logo"
					/>
				</LogoContainer>
				{path === "home" && (
					<Input
						label="search"
						type="text"
						placeholder="Pesquisa"
						value={setSearch}
					/>
				)}
				{currentProfile && logged && (
					<Profile backgroundImage={currentProfile.imageUrl}>
						<div
							id="profileMenu"
							onClick={() => {
								setActive(!active);
							}}
						></div>
						<img
							src={triangule}
							alt="triangule"
							onClick={() => {
								setActive(!active);
							}}
						/>
					</Profile>
				)}
				{active ? (
					<MenuOptions>
						<li
							onClick={() => {
								navigate("/profile");
								setActive(!active);
							}}
						>
							Profiles
						</li>
						<li
							onClick={() => {
								navigate("/settings");
								functions.handdleConfigMenus();
								setActive(!active);
							}}
						>
							Settings
						</li>
						<li
							onClick={() => {
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
