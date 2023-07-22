import { Navigate, useOutlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { AppNavbar } from "./AppNavbar";

export const ProtectedLayout = () => {
  const { user } = useAuthContext();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <AppNavbar pages={[
          { label: "Menu", path: "menu" },
          { label: "Cart", path: "cart" },
          { label: "Profile", path: "profile" },
          { label: "Order History", path: "order-history" },
        ]} 
      />
      {outlet}
    </div>
  )
};