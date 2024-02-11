import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContextCine } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const loc = useLocation();
  const { user, loading } = useContext(AuthContextCine);
  if (loading) {
    <div className="flex justify-center my-12">
      <span className="loading loading-dots loading-lg"></span>
    </div>;
    return;
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={loc.pathname} to={"/login"}></Navigate>;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
