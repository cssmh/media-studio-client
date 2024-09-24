import useAuth from "../hooks/useAuth";
import LoginModal from "../Component/LoginModal";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    <div className="flex justify-center my-12">
      <span className="loading loading-dots loading-lg"></span>
    </div>;
    return;
  }

  if (user) return children;
  return <LoginModal isOpen={true} onClose={false} />;
};

export default PrivateRoute;
