import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RecruiterProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  return (token && user?.accountType === "internalUser") ||
    user?.accountType === "externalUser" ? (
    children
  ) : (
    <Navigate to={"/login"} />
  );
};

export default RecruiterProtectedRoute;
