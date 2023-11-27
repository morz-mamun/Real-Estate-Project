import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";

const AgentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [data, isPending] = useUserRole();
  const location = useLocation()

  if (loading || isPending) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && data.role === "agent") {
    return children;
  }
  return <Navigate to={'/'} state={{from: location}} replace></Navigate>
};

export default AgentRoute;
