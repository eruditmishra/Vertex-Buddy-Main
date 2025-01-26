import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";

import { companyEndpoints } from "../apis";

const { GET_ALL_COMPANIES_API, GET_COMPANY_DETAILS_API } = companyEndpoints;

export const getAllCompanies = async (token) => {
  try {
    const response = await apiConnector("GET", GET_ALL_COMPANIES_API, null, {
      Authorization: `Bearer ${token}`,
    });

    return response?.data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
  }
};

export const getCompanyDetails = async (companyId, token) => {
  try {
    const response = await apiConnector(
      "GET",
      GET_COMPANY_DETAILS_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
      { companyId }
    );

    return response?.data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
  }
};
