import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apis";
import { setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
import toast from "react-hot-toast";

const {
  SIGNUP_API,
  LOGIN_API,
  REGISTER_WITH_GOOGLE_API,
  LOGIN_WITH_GOOGLE_API,
  VERIFY_EMAIL_API,
  SEND_RESET_PASSWORD_EMAIL,
  UPDATE_PASSWORD,
} = authEndpoints;

export async function signUp(data, navigate) {
  try {
    const response = await apiConnector("POST", SIGNUP_API, data);

    if (response?.data?.success) {
      navigate("/user/verify-email");
    }
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
    // console.log(`Error in Sign Up:`);
  }
}

export function signupWithGoogle(credentialResponse, navigate) {
  return async (dispatch) => {
    try {
      const data = {
        email: credentialResponse?.email,
        name: credentialResponse?.name,
      };

      // console.log(data);

      const response = await apiConnector(
        "POST",
        `${REGISTER_WITH_GOOGLE_API}`,
        data
      );

      const result = response?.data;

      dispatch(setToken(result?.token));
      dispatch(setUser(response?.data?.user));

      navigate("/user");
    } catch (error) {
      toast.error(`${error?.response?.data?.message}`);
    }
  };
}

export function login(data, navigate) {
  return async (dispatch) => {
    try {
      const response = await apiConnector("POST", LOGIN_API, data);

      dispatch(setToken(response?.data?.token));
      dispatch(setUser(response?.data?.user));
      navigate("/user");
    } catch (error) {
      toast.error(`${error?.response?.data?.message}`);
    }
  };
}

export function loginWithGoogle(email, navigate) {
  return async (dispatch) => {
    try {
      const response = await apiConnector("POST", `${LOGIN_WITH_GOOGLE_API}`, {
        email,
      });

      // console.log(response?.data?.user);

      dispatch(setToken(response?.data?.token));
      dispatch(setUser(response?.data?.user));
      navigate("/user");
    } catch (error) {
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

export async function verifyEmail(id, token) {
  try {
    const response = await apiConnector(
      "GET",
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

export async function sendPasswordResetMail(email) {
  try {
    const response = await apiConnector("POST", SEND_RESET_PASSWORD_EMAIL, {
      email,
    });

    const result = response?.data;

    return result;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
  }
}

export async function updatePassword(id, token, password) {
  try {
    const response = await apiConnector(
      "PUT",
      `${UPDATE_PASSWORD}/${id}/${token}`,
      { password }
    );

    const result = response?.data;

    return result;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
  }
}
