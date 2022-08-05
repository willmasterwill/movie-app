import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});

	function login(user, pass) {
		console.log(user);
		console.log(pass);
		if (user === "admin" && pass === "1234") {
			const authUser = {
				user: user,
				name: "Bruno Diaz",
			};
			setUser(authUser);
			return true;
		}
		return false;
	}

	function logout() {
		setUser({});
	}

	function isAuth() {
		console.log(user);
		return user.name ? true : false;
	}

	return (
		<AuthContext.Provider value={{ user, login, logout, isAuth }}>
			{children}
		</AuthContext.Provider>
	);
};
