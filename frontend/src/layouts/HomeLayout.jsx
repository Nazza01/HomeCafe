import { Navigate, useOutlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { AppNavbar } from "../components/navigation/AppNavbar";

export const HomeLayout = () => {
  const { user } = useAuthContext();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/user/menu" replace />;
  }

  return (
    <div>
      <AppNavbar
        pages={[
          { label: 'Login', path: "/login"},
        ]}
      />
      {outlet}
    </div>
  )
};