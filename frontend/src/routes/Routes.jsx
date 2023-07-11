import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Common/Home";
import Profile from "../components/Authentication/Profile";
import Login from "../components/Authentication/Login";
import Cart from "../components/Common/Cart";

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<HomeLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Route>
			<Route path="/order" element={<ProtectedLayout />}>
				<Route 
					path="profile" 
					element={<Profile />}
				>
					Profile
				</Route>
				<Route 
					path="history" 
					element={<History />}
				>
					History
				</Route>
				<Route 
					path="cart" 
					element={<Cart />}
				>
					Cart
				</Route>
			</Route>
		</Routes>
	);
};

export default AppRoutes;