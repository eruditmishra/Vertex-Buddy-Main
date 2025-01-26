import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apis";
import { toast } from "react-hot-toast";
import { setToken } from "../../redux/slices/authSlice";
import { setUser } from "../../redux/slices/profileSlice";

const { LOGIN_API } = authEndpoints;

export function login(data, navigate) {
  return async (dispatch) => {
    try {
      const response = await apiConnector("POST", LOGIN_API, data);

      dispatch(setToken(response?.data?.token));
      dispatch(setUser(response?.data?.user));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(`${error?.response?.data?.message}`);
    }
  };
}

export function logout(navigate) {
  return async (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
}
