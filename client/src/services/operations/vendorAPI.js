import { apiConnector } from "../apiConnector";

import { toast } from "react-hot-toast";

import { vendorEndpoints } from "../apis";

const { GET_ALL_VENDORS_API } = vendorEndpoints;

export const getAllVendors = async (token) => {
  try {
    const response = await apiConnector("GET", GET_ALL_VENDORS_API, null, {
      Authorization: `Bearer ${token}`,
    });

    return response?.data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
  }
};
