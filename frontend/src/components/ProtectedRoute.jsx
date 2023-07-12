import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;