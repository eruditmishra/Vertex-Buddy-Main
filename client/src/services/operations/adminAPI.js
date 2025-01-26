import { apiConnector } from "../apiConnector";
import { adminEndpoints } from "../apis";
import { setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
import toast from "react-hot-toast";

const { LOGIN_ADMIN_API } = adminEndpoints;

export function loginAdmin(data, navigate) {
  return async (dispatch) => {
    try {
      const response = await apiConnector("POST", LOGIN_ADMIN_API, data);

      dispatch(setToken(response?.data?.token));
      dispatch(setUser(response?.data?.user));

      // console.log(response);

      navigate("/admin");
    } catch (error) {
      // console.error(error.message);
      toast.error(`${error?.response?.data?.message}`);
    }
  };
}
