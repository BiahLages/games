import { MenuContainer, MenuItem, MenuItemButton } from "./styles";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Gear, Home, Lock, LogOut, User } from "../../assets/icons";
import type { MenuProps } from "../../types/interfaces/system";
import { useAuth } from "../../contexts/AccountContext";

const Menu = ({ path }: MenuProps): JSX.Element => {
	const { logged, logout } = useAuth();
	const navigate: NavigateFunction = useNavigate();

	return (
		<MenuContainer>
			{!logged && (
				<MenuItem>
					<MenuItemButton onClick={(): void => navigate("/login")}>
						<Lock />
					</MenuItemButton>
				</MenuItem>
			)}
			<nav>
				<MenuItem active={path === "home"}>
					<MenuItemButton
						onClick={(): void => navigate("/")}
						active={path === "home"}
					>
						<Home />
					</MenuItemButton>
				</MenuItem>
				{logged && (
					<>
						<MenuItem active={path === "profile"}>
							<MenuItemButton
								onClick={(): void => navigate("/profile")}
								active={path === "profile"}
							>
								<User />
							</MenuItemButton>
						</MenuItem>
						<MenuItem active={path === "settings"}>
							<MenuItemButton
								onClick={(): void => navigate("/settings")}
								active={path === "settings"}
							>
								<Gear />
							</MenuItemButton>
						</MenuItem>
					</>
				)}
			</nav>
			{logged && (
				<MenuItem logout>
					<MenuItemButton
						onClick={(): void => {
							logout();
						}}
					>
						<LogOut />
					</MenuItemButton>
				</MenuItem>
			)}
		</MenuContainer>
	);
};

export default Menu;
