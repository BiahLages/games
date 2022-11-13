import type {
	CssConstants,
	IDevices,
	IDevicesSize,
} from "../../types/interfaces/system";

export const constants: CssConstants = {
	FontFamily: "Audiowide",
};

const size: IDevicesSize = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	mobileMax: "599px",
	tabletMin: "600px",
	tablet: "768px",
	tabletMax: "1022px",
	laptop: "1023px",
	laptopL: "1440px",
	desktop: "2560px",
};

export const device: IDevices = {
	min: {
		mobileS: `(min-width: ${size.mobileS})`,
		mobileM: `(min-width: ${size.mobileM})`,
		mobileL: `(min-width: ${size.mobileL})`,
		tabletMin: `(min-width: ${size.tabletMin})`,
		tablet: `(min-width: ${size.tablet})`,
		laptop: `(min-width: ${size.laptop})`,
		laptopL: `(min-width: ${size.laptopL})`,
		desktop: `(min-width: ${size.desktop})`,
	},
	max: {
		mobileS: `(max-width: ${size.mobileS})`,
		mobileM: `(max-width: ${size.mobileM})`,
		mobileL: `(max-width: ${size.mobileL})`,
		mobileMax: `(max-width: ${size.mobileMax})`,
		tablet: `(max-width: ${size.tablet})`,
		tabletMax: `(max-width: ${size.tabletMax})`,
		laptop: `(max-width: ${size.laptop})`,
		laptopL: `(max-width: ${size.laptopL})`,
		desktop: `(max-width: ${size.desktop})`,
	},
};
