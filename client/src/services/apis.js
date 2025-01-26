const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api/v1"
    : "https://api.vertexbuddy.com/api/v1";

export const authEndpoints = {
  SIGNUP_API: BASE_URL + "/auth/register",
  LOGIN_API: BASE_URL + "/auth/login",
  REGISTER_WITH_GOOGLE_API: BASE_URL + "/auth/registerWithGoogle",
  LOGIN_WITH_GOOGLE_API: BASE_URL + "/auth/loginWithGoogle",
  ADD_RECRUITER_API: BASE_URL + "/auth/addRecruiter",
  VERIFY_EMAIL_API: BASE_URL + "/auth",
  SEND_RESET_PASSWORD_EMAIL: BASE_URL + "/auth/sendResetPasswordEmail",
  UPDATE_PASSWORD: BASE_URL + "/auth/forgotPassword",
};

export const candidateEndpoints = {
  ADD_CANDIDATE_API: BASE_URL + "/candidates/addCandidate",
  GET_MYCANDIDATES_API: BASE_URL + "/candidates/myCandidates",
  GET_ALL_CANDIDATES_API: BASE_URL + "/candidates/getAllCandidates",
  APPLY_CANDIDATE_API: BASE_URL + "/candidates/addCandidateOpen",
  GET_CANDIDATE_DETAILS_API: BASE_URL + "/candidates/getCandidateDetails",
  EDIT_CANDIDATE_DETAILS_API: BASE_URL + "/candidates/updateCandidateDetails",
};

export const adminEndpoints = {
  REGISTER_ADMIN_API: BASE_URL + "/admin/auth/registerAdmin",
  LOGIN_ADMIN_API: BASE_URL + "/admin/auth/loginAdmin",
};

export const recruiterEndpoints = {
  ADD_RECRUITER_API: BASE_URL + "/auth/addRecruiter",
  GET_ALL_RECRUITERS_API: BASE_URL + "/recruiter/getAllRecruiters",
  DELETE_RECRUITER_API: BASE_URL + "/recruiter/deleteRecruiter",
};

export const companyEndpoints = {
  // ADD_COMPANY_API: BASE_URL + "/company/addCompany",
  GET_ALL_COMPANIES_API: BASE_URL + "/company/get-all-companies",
  GET_COMPANY_DETAILS_API: BASE_URL + "/company/get-company-details",
  // DELETE_COMPANY_API: BASE_URL + "/company/deleteCompany",
};

export const vendorEndpoints = {
  // ADD_VENDOR_API: BASE_URL + "/vendors/addVendor",
  GET_ALL_VENDORS_API: BASE_URL + "/vendors/get-vendors",
  // DELETE_VENDOR_API: BASE_URL + "/vendors/deleteVendor",
};

export const jobEndpoints = {
  GET_JOBS_OF_A_COMPANY_API: BASE_URL + "/jobs/get-jobs-of-a-company",
};
