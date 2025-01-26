import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { candidateEndpoints } from "../apis";

const {
  ADD_CANDIDATE_API,
  GET_MYCANDIDATES_API,
  GET_ALL_CANDIDATES_API,
  APPLY_CANDIDATE_API,
  GET_CANDIDATE_DETAILS_API,
  EDIT_CANDIDATE_DETAILS_API,
} = candidateEndpoints;

export async function addCandidate(candidate, resume, token) {
  try {
    const {
      name,
      email,
      dateOfBirth,
      phoneNumber,
      alternatePhoneNumber,
      gender,
      highestQualification,
      skills,
      currentCompany,
      currentDesignation,
      totalExperience,
      relevantExperience,
      currentLocation,
      preferredLocation,
      currentCTC,
      expectedCTC,
      noticePeriod,
      lastWorkingDay,
      holdingAnyOffer,
      interestedRole,
      languagesKnown,
      profile,
      vendorName,
    } = candidate;

    const data = new FormData();

    data.set("name", name);
    data.set("email", email);
    data.set("dateOfBirth", dateOfBirth);
    data.set("phoneNumber", phoneNumber);
    data.set("alternatePhoneNumber", alternatePhoneNumber);
    data.set("gender", gender);
    data.set("highestQualification", highestQualification);
    data.set(
      "skills",
      skills.split(",").map((skill) => skill.trim())
    );
    data.set("currentCompany", currentCompany);
    data.set("currentDesignation", currentDesignation);
    data.set("totalExperience", totalExperience);
    data.set("relevantExperience", relevantExperience);
    data.set("currentLocation", currentLocation);
    data.set(
      "preferredLocation",
      preferredLocation.split(",").map((skill) => skill.trim())
    );
    data.set("currentCTC", currentCTC);
    data.set("expectedCTC", expectedCTC);
    data.set("noticePeriod", noticePeriod);
    data.set("lastWorkingDay", lastWorkingDay);
    data.set("holdingAnyOffer", holdingAnyOffer);
    data.set("interestedRole", interestedRole);
    data.set("languagesKnown", languagesKnown);
    data.set("profile", profile);
    data.set("vendorName", vendorName);
    data.set("resume", resume[0]);

    const response = await apiConnector("POST", ADD_CANDIDATE_API, data, {
      Authorization: `Bearer ${token}`,
    });

    return response.data;
  } catch (error) {
    // console.log(error.message);
    toast.error(`${error?.response?.data?.message}`);
  }
}

export async function getMyCandidatesData(token) {
  try {
    const response = await apiConnector("GET", GET_MYCANDIDATES_API, null, {
      Authorization: `Bearer ${token}`,
    });

    // console.log(response);

    return response?.data;
  } catch (error) {
    // console.log(error.message);
    toast.error(`${error?.response?.data?.message}`);
  }
}

export async function getAllCandidates(token) {
  try {
    const response = await apiConnector("GET", GET_ALL_CANDIDATES_API, null, {
      Authorization: `Bearer ${token}`,
    });

    // console.log(response);

    return response?.data;
  } catch (error) {
    // console.log(error.message);
    toast.error(`${error?.response?.data?.message}`);
  }
}

export async function applyCandidate(candidate, resume) {
  try {
    const {
      name,
      email,
      dateOfBirth,
      phoneNumber,
      alternatePhoneNumber,
      gender,
      highestQualification,
      skills,
      currentCompany,
      currentDesignation,
      totalExperience,
      relevantExperience,
      currentLocation,
      preferredLocation,
      currentCTC,
      expectedCTC,
      noticePeriod,
      lastWorkingDay,
      holdingAnyOffer,
      interestedRole,
      languagesKnown,
      profile,
      vendorName,
    } = candidate;

    const data = new FormData();

    data.set("name", name);
    data.set("email", email);
    data.set("dateOfBirth", dateOfBirth);
    data.set("phoneNumber", phoneNumber);
    data.set("alternatePhoneNumber", alternatePhoneNumber);
    data.set("gender", gender);
    data.set("highestQualification", highestQualification);
    data.set(
      "skills",
      skills.split(",").map((skill) => skill.trim())
    );
    data.set("currentCompany", currentCompany);
    data.set("currentDesignation", currentDesignation);
    data.set("totalExperience", totalExperience);
    data.set("relevantExperience", relevantExperience);
    data.set("currentLocation", currentLocation);
    data.set(
      "preferredLocation",
      preferredLocation.split(",").map((skill) => skill.trim())
    );
    data.set("currentCTC", currentCTC);
    data.set("expectedCTC", expectedCTC);
    data.set("noticePeriod", noticePeriod);
    data.set("lastWorkingDay", lastWorkingDay);
    data.set("holdingAnyOffer", holdingAnyOffer);
    data.set("interestedRole", interestedRole);
    data.set("languagesKnown", languagesKnown);
    data.set("profile", profile);
    data.set("vendorName", vendorName);
    data.set("resume", resume[0]);

    const response = await apiConnector("POST", APPLY_CANDIDATE_API, data);

    return response.data;
  } catch (error) {
    // console.log(error.message);
    toast.error(`${error?.response?.data?.message}`);
  }
}

export async function getCandidateDetails(candidateId, token) {
  try {
    const response = await apiConnector(
      "GET",
      `${GET_CANDIDATE_DETAILS_API}/${candidateId}`,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    // console.log(response);

    return response?.data;
  } catch (error) {
    // console.log(error.message);
    toast.error(`${error?.response?.data?.message}`);
  }
}

export async function updateCandidateDetails(
  candidateId,
  candidate,
  resume,
  token
) {
  try {
    const {
      name,
      email,
      dateOfBirth,
      phoneNumber,
      alternatePhoneNumber,
      gender,
      highestQualification,
      skills,
      currentCompany,
      currentDesignation,
      totalExperience,
      relevantExperience,
      currentLocation,
      preferredLocation,
      currentCTC,
      expectedCTC,
      noticePeriod,
      lastWorkingDay,
      holdingAnyOffer,
      interestedRole,
      languagesKnown,
      profile,
      vendorName,
    } = candidate;

    const data = new FormData();

    data.set("name", name);
    data.set("email", email);
    data.set("dateOfBirth", dateOfBirth);
    data.set("phoneNumber", phoneNumber);
    data.set("alternatePhoneNumber", alternatePhoneNumber);
    data.set("gender", gender);
    data.set("highestQualification", highestQualification);
    data.set(
      "skills",
      skills.includes(",")
        ? skills.split(",").map((skill) => skill.trim())
        : skills
    );
    data.set("currentCompany", currentCompany);
    data.set("currentDesignation", currentDesignation);
    data.set("totalExperience", totalExperience);
    data.set("relevantExperience", relevantExperience);
    data.set("currentLocation", currentLocation);
    data.set(
      "preferredLocation",
      preferredLocation.includes(",")
        ? preferredLocation.split(",").map((location) => location.trim())
        : preferredLocation
    );
    data.set("currentCTC", currentCTC);
    data.set("expectedCTC", expectedCTC);
    data.set("noticePeriod", noticePeriod);
    data.set("lastWorkingDay", lastWorkingDay);
    data.set("holdingAnyOffer", holdingAnyOffer);
    data.set("interestedRole", interestedRole);
    data.set("languagesKnown", languagesKnown);
    data.set("profile", profile);
    data.set("vendorName", vendorName);
    data.set("resume", resume[0]);

    const response = await apiConnector(
      "PUT",
      `${EDIT_CANDIDATE_DETAILS_API}/${candidateId}`,
      data,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log(response?.data);

    return response?.data;
  } catch (error) {
    console.log(error);
    toast.error(`${error?.response?.data?.message}`);
  }
}
