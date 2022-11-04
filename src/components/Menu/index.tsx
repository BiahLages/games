import { NavigateFunction, useNavigate } from "react-router-dom";
import { MenuContainer, MenuOptions, Profile } from "./styles";
import type { MenuProps } from "../../types/interfaces/system";
import { useAuth } from "../../contexts/AccountContext";
import triangule from "../../assets/icons/triangulo.png";
import { useState } from "react";
import Input from "../Input";

const Menu = ({ path }: MenuProps): JSX.Element => {
	const { logged, logout } = useAuth();
	const navigate: NavigateFunction = useNavigate();
	const [active, setActive] = useState(false);
	const [search, setSearch] = useState("");

	return (
		<MenuContainer>
			<div className="menuContainer">
				<h1
					onClick={() => {
						navigate("/");
					}}
				>
					Logo
				</h1>
				{path === "home" ? (
					<Input
						label="search"
						type="text"
						placeholder="Pesquisa"
						value={setSearch}
					/>
				) : (
					<></>
				)}
				{logged && (
					<Profile>
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
			</div>
		</MenuContainer>
	);
};

export default Menu;
