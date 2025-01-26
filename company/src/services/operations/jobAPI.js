import { apiConnector } from "../apiConnector";
import { jobEndpoints } from "../apis";
import toast from "react-hot-toast";

const {
  CREATE_JOB_API,
  GET_JOBS_API,
  GET_JOB_API,
  UPDATE_JOB_API,
  DELETE_JOB_API,
  GET_JOB_APPLICATIONS_API,
  GET_JOB_APPLICATION_API,
} = jobEndpoints;

export const createJob = async (data, companyId, selectedVendors, token) => {
  try {
    if (selectedVendors?.length >= 1) {
      data.vendors = selectedVendors;
    }

    const response = await apiConnector(
      "POST",
      CREATE_JOB_API,
      data,
      {
        Authorization: `Bearer ${token}`,
      },
      {
        companyId: companyId,
      }
    );

    if (!response?.data?.success) {
      toast.error(`${response?.data?.message}`);
    }

    return response?.data;
  } catch (error) {
    toast.error(`${error?.message || error?.response?.data?.message}`);
  }
};

export const getJobs = async (companyId, token) => {
  try {
    const response = await apiConnector(
      "GET",
      GET_JOBS_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
      {
        companyId: companyId,
      }
    );

    if (!response?.data?.success) {
      toast.error(`${response?.data?.message}`);
    }

    return response?.data;
  } catch (error) {
    toast.error(`${error?.message || error?.response?.data?.message}`);
  }
};

export const getJobDetails = async (jobId, token) => {
  try {
    const response = await apiConnector(
      "GET",
      GET_JOB_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
      {
        jobId: jobId,
      }
    );

    if (!response?.data?.success) {
      toast.error(`${response?.data?.message}`);
    }

    return response?.data;
  } catch (error) {
    toast.error(`${error?.message || error?.response?.data?.message}`);
  }
};

export const getJobApplications = async (jobId, token) => {
  try {
    const response = await apiConnector(
      "GET",
      GET_JOB_APPLICATIONS_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
      {
        jobId: jobId,
      }
    );

    if (!response?.data?.success) {
      toast.error(`${response?.data?.message}`);
    }

    return response?.data;
  } catch (error) {
    toast.error(`${error?.message || error?.response?.data?.message}`);
  }
};

export const getJobApplication = async (applicationId, token) => {
  try {
    const response = await apiConnector(
      "GET",
      GET_JOB_APPLICATION_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
      {
        applicationId: applicationId,
      }
    );

    if (!response?.data?.success) {
      toast.error(`${response?.data?.message}`);
    }

    return response?.data;
  } catch (error) {
    toast.error(`${error?.message || error?.response?.data?.message}`);
  }
};
