import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "../AuthProvider/helpers";
import Home from "../components/Common/Home";
import Cart from "../components/Common/Cart";
import OrderHistory from "../components/Common/OrderHistory";
import Profile from "../components/Authentication/Profile";
import Login from "../components/Authentication/Login";
import NotFound from "../components/Common/NoMatch";

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
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;