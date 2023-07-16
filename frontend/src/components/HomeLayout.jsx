import { Navigate, useOutlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { AppBar } from "./AppBar";

export const HomeLayout = () => {
  const { user } = useAuthContext();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/user/cart" replace />;
  }

  return (
    <div>
      <AppBar 
        pages={[
          { label: 'Home', path: "/"},
          { label: 'Login', path: "/login"},
        ]}
      />
      {outlet}
    </div>
  )
};