import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast";

import { candidateEndpoints } from "../apis";

const { ADD_CANDIDATE_API, GET_CANDIDATES_API, GET_CANDIDATE_DETAILS_API } =
  candidateEndpoints;

export const addCandidate = async (
  candidateData,
  vendorName,
  vendorId,
  token
) => {
  try {
    const response = await apiConnector(
      "POST",
      ADD_CANDIDATE_API,
      candidateData,
      {
        Authorization: `Bearer ${token}`,
      },
      {
        vendorName: vendorName,
        vendorId: vendorId,
      }
    );

    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }

    return response?.data;
  } catch (error) {
    toast.error(`${error?.message || error?.response?.data?.message}`);
  }
};

export const getCandidates = async (token, vendorId) => {
  try {
    const response = await apiConnector(
      "GET",
      GET_CANDIDATES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
      {
        vendorId: vendorId,
      }
    );

    return response?.data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
  }
};

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
