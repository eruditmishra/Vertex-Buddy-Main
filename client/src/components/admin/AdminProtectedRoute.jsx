import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../commom/layout/Layout";

const AdminProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  // console.log(user);

  return token && user?.accountType === "admin" ? (
    children
  ) : (
    <Navigate to={"/admin/login"} />
  );
};

export default AdminProtectedRoute;
