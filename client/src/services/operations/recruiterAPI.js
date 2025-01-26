import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { recruiterEndpoints } from "../apis";

const { ADD_RECRUITER_API, GET_ALL_RECRUITERS_API, DELETE_RECRUITER_API } =
  recruiterEndpoints;

export async function addRecruiter(data, token) {
  try {
    const response = await apiConnector("POST", ADD_RECRUITER_API, data, {
      Authorization: `Bearer ${token}`,
    });

    // console.log("Add Recruiter API response", response);

    return response?.data;
  } catch (error) {
    // console.error("Error while adding a recruiter");
    // console.error(error.message);
    toast.error(`${error?.response?.data?.message}`);
  }
}

export async function getAllRecruiters(token) {
  try {
    const response = await apiConnector("GET", GET_ALL_RECRUITERS_API, null, {
      Authorization: `Bearer ${token}`,
    });
    return response?.data;
  } catch (error) {
    // console.error("Error Fetching Recruiters");
    // console.error(error.message);
    toast.error(`${error?.response?.data?.message}`);
  }
}

export async function deleteRecruiter(token, id) {
  try {
    const response = await apiConnector(
      "DELETE",
      `${DELETE_RECRUITER_API}/${id}`,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    return response?.data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
  }
}
