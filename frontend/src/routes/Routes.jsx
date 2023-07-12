import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "../hooks/AuthProvider.jsx/helpers";
import Home from "../components/Common/Home";
import Cart from "../components/Common/Cart";
import OrderHistory from "../components/Common/OrderHistory";
import Profile from "../Profile";
import Login from "../Login";
import NotFound from "../components/Common/NoMatch";
import Menu from "../components/Common/Menu";

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
				element={getToken() ? <Menu /> : <Navigate to="/menu" />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;