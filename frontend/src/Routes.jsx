import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "./helpers";
import Home from "./components/Common/Home";
import Profile from "./components/Authentication/Profile";
import Login from "./components/Authentication/Login";
import OrderHistory from "./components/Common/OrderHistory";
import Cart from "./components/Common/Cart";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route
				path="/profile"
				element={getToken() ? <Profile /> : <Navigate to="/login" />}
			/>
			<Route path="/order-history" element={<OrderHistory />} />
			<Route path="/cart" element={<Cart />} />
			<Route 
				path="/menu" 
				element={getToken() ? '' : <Navigate to="/menu" />} />
		</Routes>
	);
};

export default AppRoutes;