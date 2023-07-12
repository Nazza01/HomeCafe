import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <nav>
        <Link to="/user/profile">Profile</Link>
        <Link to="/user/order-history">Order History</Link>
        <Link to="/user/cart">Cart</Link>
        <Link to="/user/menu">Menu</Link>
      </nav>
      <Outlet />
    </div>
  )
};