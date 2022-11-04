import { MenuContainer /*, MenuItem, MenuItemButton*/ } from "./styles";
import { NavigateFunction, useNavigate } from "react-router-dom";
import type { MenuProps } from "../../types/interfaces/system";
import { useAuth } from "../../contexts/AccountContext";
import triangule from "../../assets/icons/triangulo.png";
import { useState } from "react";

const Menu = ({ path }: MenuProps): JSX.Element => {
	const { logged, logout } = useAuth();
	const navigate: NavigateFunction = useNavigate();
	const [active, setActive] = useState(false);

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
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Pesquisa"
					/>
				) : (
					<></>
				)}
				{logged && (
					<article>
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
					</article>
				)}
				{active ? (
					<div id="menuOptions">
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
					</div>
				) : (
					<></>
				)}
			</div>
		</MenuContainer>
	);
};

export default Menu;
