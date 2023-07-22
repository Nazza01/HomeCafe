import { Navigate, useOutlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { AppNavbar } from "./AppNavbar";

export const HomeLayout = () => {
  const { user } = useAuthContext();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/user/cart" replace />;
  }

  return (
    <div>
      <AppNavbar
        pages={[
          { label: 'Home', path: "/"},
          { label: 'Login', path: "/login"},
        ]}
      />
      {outlet}
    </div>
  )
};