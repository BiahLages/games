import { ReactNode } from "react";

export interface AllProvidersProps {
	children: ReactNode;
}

export interface CssColors {
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

export interface ProfileItemProps {
	backgroundImage?: string;
	active?: boolean;
}

export interface IMixings {
	colors: CssColors;
	constants: CssConstants;
	device: IDevices;
}

export interface IDevices {
	min: IDevicesSize;
	max: IDevicesSize;
}
export interface IDevicesSize {
	mobileS: string;
	mobileM: string;
	mobileL: string;
	mobileMax?: string;
	tabletMin?: string;
	tablet: string;
	tabletMax?: string;
	laptop: string;
	laptopL: string;
	desktop: string;
}
