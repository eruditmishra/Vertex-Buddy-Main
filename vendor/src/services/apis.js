const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api/v1"
    : "https://api.vertexbuddy.com/api/v1";

export const authEndpoints = {
  LOGIN_API: BASE_URL + "/auth/vendor/login",
};

export const jobEndpoints = {
  GET_JOB_API: BASE_URL + "/jobs/get-job-details",
  GET_VENDOR_JOBS_API: BASE_URL + "/jobs/get-jobs-by-vendor",
  APPLY_FOR_JOB_API: BASE_URL + "/jobs/apply",
  GET_JOB_APPLICATIONS_BY_VENDOR_API:
    BASE_URL + "/jobs/get-applications-by-vendor",
  GET_JOB_APPLICATION_API: BASE_URL + "/jobs/get-job-application",
};

export const candidateEndpoints = {
  ADD_CANDIDATE_API: BASE_URL + "/candidates/add-candidate-by-vendor",
  GET_CANDIDATES_API: BASE_URL + "/candidates/vendor/get-candidates",
  GET_CANDIDATE_DETAILS_API: BASE_URL + "/candidates/getCandidateDetails",
};
