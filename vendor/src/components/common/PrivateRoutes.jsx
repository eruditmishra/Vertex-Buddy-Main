import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  return token && user ? children : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
