import { apiConnector } from "../apiConnector";
import { jobEndpoints } from "../apis";

const { GET_JOBS_OF_A_COMPANY_API } = jobEndpoints;

export const getJobsOfACompany = async (companyId, token) => {
  try {
    const response = await apiConnector(
      "GET",
      GET_JOBS_OF_A_COMPANY_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
      { companyId }
    );

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
