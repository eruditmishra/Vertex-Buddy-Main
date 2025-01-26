import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast";

import { candidateEndpoints } from "../apis";

const { GET_CANDIDATE_DETAILS_API } = candidateEndpoints;

export const getCandidateDetails = async (candidateId, token) => {
  try {
    const response = await apiConnector(
      "GET",
      `${GET_CANDIDATE_DETAILS_API}/${candidateId}`,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    return response?.data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
  }
};
