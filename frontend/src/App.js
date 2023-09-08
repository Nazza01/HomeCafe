import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	defer,
} from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { HomeLayout } from "./layouts/HomeLayout";
import { HomePage } from "./pages/Home";
import { ProtectedLayout } from "./layouts/ProtectedLayout";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import MenuPage from "./pages/Menu";
import { OrderHistoryPage } from "./pages/OrderHistory";
import { CartPage } from "./pages/Cart";
import { NotFoundPage } from "./pages/NotFound";

import "./styles.css";

const getUserData = () => 
	new Promise((resolve) =>
		setTimeout(() => {
			const user = window.localStorage.getItem("user");
			resolve(user);
		}, 500)
	);

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			element={<AuthLayout />}
			loader={() => defer({ userPromise: getUserData() })}
		>
			<Route element={<HomeLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
			</Route>
			<Route path="/user" element={<ProtectedLayout />}>
				<Route path="menu" element={<MenuPage />} />
				<Route path="cart" element={<CartPage />} />
				<Route path="profile" element={<ProfilePage />} />
				<Route path="order-history" element={<OrderHistoryPage />} />
			</Route>
			<Route path="*" element={<NotFoundPage />}></Route>
		</Route>
	)
);
