import { Navigate } from "react-router-dom";
import DashBoard from "../dashBoard/DashBoard";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (user) return <DashBoard />;
  if (!user) return <Navigate to="/">ProtectedRoute</Navigate>;

  return <>{children}</>;
}
export default ProtectedRoute;
