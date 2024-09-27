import useAuth from "../hooks/useAuth";
import LoginModal from "../Component/LoginModal";
import Loader from "../Component/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <Loader />;

  if (user) return children;
  return <LoginModal isOpen={true} onClose={false} />;
};

export default PrivateRoute;
