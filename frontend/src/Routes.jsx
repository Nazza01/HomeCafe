import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "./helpers";
import Home from "./components/Common/Home";
import Profile from "./components/Authentication/Profile";
import Signin from "./components/Authentication/Signin";
import OrderHistory from "./components/Common/OrderHistory";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signin" element={<Signin />} />
			<Route
				path="/profile"
				element={getToken() ? <Profile /> : <Navigate to="/signin" />}
			/>
			<Route path="/order-history" element={<OrderHistory />} />
		</Routes>
	);
};

export default AppRoutes;