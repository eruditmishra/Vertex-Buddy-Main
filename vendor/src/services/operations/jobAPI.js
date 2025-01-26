import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast";
import { jobEndpoints } from "../apis";

const {
  GET_VENDOR_JOBS_API,
  GET_JOB_API,
  APPLY_FOR_JOB_API,
  GET_JOB_APPLICATIONS_BY_VENDOR_API,
  GET_JOB_APPLICATION_API,
} = jobEndpoints;

export const getVendorJobs = async (vendorId, token) => {
  try {
    const response = await apiConnector(
      "GET",
      GET_VENDOR_JOBS_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
      {
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

export const applyForJob = async (jobId, candidates, token, loadingToast) => {
  try {
    const response = await apiConnector(
      "POST",
      APPLY_FOR_JOB_API,
      {
        candidateIds: candidates,
      },
      {
        Authorization: `Bearer ${token}`,
      },
      {
        jobId,
      }
    );

    if (!response?.data?.success) {
      toast.error(`${response?.data?.message}`);
    }

    return response?.data;
  } catch (error) {
    toast.dismiss(loadingToast);
    toast.error(`${error?.message || error?.response?.data?.message}`);
  }
};

export const getJobApplicationsByVendor = async (jobId, vendorId, token) => {
  try {
    const response = await apiConnector(
      "GET",
      GET_JOB_APPLICATIONS_BY_VENDOR_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
      {
        vendorId: vendorId,
        jobId,
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
        applicationId,
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
