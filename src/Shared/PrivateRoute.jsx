import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoginModal from "../Component/LoginModal";
import Loader from "../Component/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <Loader />;

  const handleModalClose = () => {
    navigate(-1);
  };

  if (user) {
    return children;
  }
  return <LoginModal isOpen={true} onClose={handleModalClose} replace />;
};

export default PrivateRoute;
