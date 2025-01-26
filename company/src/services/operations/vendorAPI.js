import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { vendorEndpoints } from "../apis";

const {
  ADD_VENDOR_API,
  GET_VENDORS_API,
  GET_VENDOR_API,
  UPDATE_VENDOR_API,
  GET_COMPANY_VENDORS_API,
} = vendorEndpoints;

export const addVendor = async (data, token) => {
  try {
    const response = await apiConnector("POST", ADD_VENDOR_API, data, {
      Authorization: `Bearer ${token}`,
    });

    return response?.data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
  }
};

export const getCompanyVendors = async (companyId, token) => {
  try {
    const response = await apiConnector(
      "GET",
      GET_COMPANY_VENDORS_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
      {
        companyId,
      }
    );

    return response?.data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
  }
};
