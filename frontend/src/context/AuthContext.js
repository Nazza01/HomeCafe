import { createContext, useContext, useEffect, useState } from "react";
import { getToken, setToken, removeToken } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const token = getToken();

		// Check if the token exists, if it does set the user state accordingly
		if (token) {
			setUser({ token });
		} else {
			setUser(null);
		}
	}, []);

	const login = (token) => {
		setToken(token);
		setUser({ token });
	};

	const logout = () => {
		removeToken();
		setUser(null); // Update the user state immediately after removing the token
	};

	const getUser = () => {
		return user;
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, getUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
