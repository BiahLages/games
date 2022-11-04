import { ReactNode } from "react";

export interface AllProvidersProps {
	children: ReactNode;
}

export interface CssColors {
	baseBg1: string;
	baseBg2: string;
	baseBg3: string;
	baseBg1Dark: string;
	baseBg2Dark: string;
	baseBg1Light: string;
	baseBg2Light: string;
	secondaryBg1: string;
	secondaryBg2: string;
	baseLine: string;
	contrast0: string;
	contrast1: string;
	menuItemBtnS: string;
	primaryColor: string;
	primaryColorOpacity: string;
	secondaryColor: string;
	shadowColor: string;
	textColor: string;
	textLighter: string;
	textLight: string;
	textNeutral: string;
	textDark: string;
}

export interface CssConstants {
	FontFamily: string;
}

export interface LoaderProps {
	animated?: boolean;
}

export interface MenuItemProps {
	logout?: boolean;
	active?: boolean;
}

export interface MenuItemButtonProps {
	active?: boolean;
}

export interface MenuProps {
	path: "home" | "settings" | "profile" | "login";
}

export interface IMixings {
	colors: CssColors;
	constants: CssConstants;
}

