import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apis";
import { setToken } from "../../redux/slices/authSlice";
import { setUser } from "../../redux/slices/profileSlice";

const { REGISTER_API, VERIFY_EMAIL_API, LOGIN_API } = authEndpoints;

export const register = async (data, navigate) => {
  try {
    const response = await apiConnector("POST", REGISTER_API, data);

    if (response?.data?.success) {
      navigate("/verify-email");
    }
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
  }
};

export async function verifyEmail(id, token) {
  try {
    const response = await apiConnector(
      "POST",
      `${VERIFY_EMAIL_API}/${id}/verify/${token}`
    );

    const result = response?.data;

    return result;
  } catch (error) {
    // toast.error(`${error?.response?.data?.message}`);
    // console.error(error.message);
    toast.error(`${error?.response?.data?.message}`);
  }
}

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
