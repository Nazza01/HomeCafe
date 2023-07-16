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
		}
	}, []);

	const login = (token) => {
		setToken(token);
		setUser({ user });
	};

	const logout = () => {
		removeToken();
		setUser(null); // Update the user state immediately after removing the token
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
