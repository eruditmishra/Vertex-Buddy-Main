const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api/v1"
    : "https://api.vertexbuddy.com/api/v1";

export const authEndpoints = {
  REGISTER_API: BASE_URL + "/auth/company/register-company",
  VERIFY_EMAIL_API: BASE_URL + "/auth/company/verify-email",
  LOGIN_API: BASE_URL + "/auth/company/login",
};

export const vendorEndpoints = {
  ADD_VENDOR_API: BASE_URL + "/vendors/add-vendor",
  GET_VENDORS_API: BASE_URL + "/vendors/get-vendors",
  GET_VENDOR_API: BASE_URL + "/vendors/get-vendor",
  UPDATE_VENDOR_API: BASE_URL + "/vendors/update-vendor",
  GET_COMPANY_VENDORS_API: BASE_URL + "/vendors/get-company-vendors",
};

export const jobEndpoints = {
  CREATE_JOB_API: BASE_URL + "/jobs/create-new-job",
  GET_JOBS_API: BASE_URL + "/jobs/get-jobs-of-a-company",
  GET_JOB_API: BASE_URL + "/jobs/get-job-details",
  UPDATE_JOB_API: BASE_URL + "/jobs/update-job",
  DELETE_JOB_API: BASE_URL + "/jobs/delete-job",
  GET_JOB_APPLICATIONS_API: BASE_URL + "/jobs/get-applications-by-job",
  GET_JOB_APPLICATION_API: BASE_URL + "/jobs/get-job-application",
};

export const candidateEndpoints = {
  GET_CANDIDATE_DETAILS_API: BASE_URL + "/candidates/getCandidateDetails",
};
