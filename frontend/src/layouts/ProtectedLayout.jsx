import { Navigate, useOutlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { AppNavbar } from "../components/navigation/AppNavbar";

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
          { label: "Order History", path: "order-history" },
        ]} 
      />
      {outlet}
    </div>
  )
};