import { AUTH_TOKEN } from "./constants";

/**
 * Helpers for JWT authentication
 **/

export const getToken = () => {
	return localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token) => {
	if (token) {
		localStorage.setItem(AUTH_TOKEN, token);
	}
};

export const removeToken = () => {
	return localStorage.removeItem(AUTH_TOKEN);
};
