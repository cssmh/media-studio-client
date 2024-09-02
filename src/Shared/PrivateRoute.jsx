import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const loc = useLocation();
  if (loading) {
    <div className="flex justify-center my-12">
      <span className="loading loading-dots loading-lg"></span>
    </div>;
    return;
  }

  if (user) return children;
  return <Navigate state={loc.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
