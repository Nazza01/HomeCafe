import { Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { HomeLayout } from "./components/HomeLayout";

import Home from "./components/Home";
import Login from "./components/Login";

import Profile from "./components/Profile";
import OrderHistory from "./components/OrderHistory";
import Cart from "./components/Cart";
import Menu from "./components/Menu";

const App = () => {
	// Start here with using react router v6.4 data library APIs
	return (
		<Routes>
			<Route element={<HomeLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Route>

			<Route path="/user" element={<ProtectedLayout />}>
				<Route path="profile" element={<Profile />} />
				<Route path="order-history" element={<OrderHistory />} />
				<Route path="cart" element={<Cart />} />
				<Route path="menu" element={<Menu />} />
			</Route>
		</Routes>
	);
};

export default App;
