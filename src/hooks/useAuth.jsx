import { useContext } from "react";
import { AuthContextCine } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContextCine);
  return auth;
};

export default useAuth;
