import toast from "react-hot-toast";
import mixings from "src/assets/styles/mixins";

export const isEmail = /\S+@\S+\.\S+/;

export const isPw = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export const error = (message: string): string => {
	return toast.error(message, {
		style: {
			borderRadius: "1rem",
			fontSize: "3rem",
			backgroundColor: "#dedede",
			fontFamily: `${mixings.constants.FontFamily}`,
		},
	});
};

export const success = (message: string): string => {
	return toast.success(message, {
		style: {
			borderRadius: "1rem",
			fontSize: "3rem",
			backgroundColor: "#dedede",
			fontFamily: `${mixings.constants.FontFamily}`,
		},
	});
};

export const validateName = (name: string): boolean | void => {
	if (Boolean(name)) {
		return Boolean(name);
	} else {
		error("Name must be filled");
	}
};

export const validateEmail = (mail: string): boolean | void => {
	if (isEmail.test(mail)) {
		return isEmail.test(mail);
	} else {
		error("Email must be in format mail@mail.com");
	}
};

export const validatePassword = (pw: string): boolean | void => {
	if (isPw.test(pw) && pw.length > 7) {
		return isPw.test(pw);
	} else {
		error(
			"Must have a minimal of 8 characters, one uppercase, one lowercase, one symbol and one number.",
		);
	}
};
