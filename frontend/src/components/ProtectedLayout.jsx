import { Navigate, useOutlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { AppBar } from "./AppBar";

export const ProtectedLayout = () => {
  const { user } = useAuthContext();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <AppBar pages={[
          { label: "Profile", path: "profile" },
          { label: "Order History", path: "order-history" },
          { label: "Cart", path: "cart" },
          { label: "Menu", path: "menu" },
        ]} 
      />
      {outlet}
    </div>
  )
};