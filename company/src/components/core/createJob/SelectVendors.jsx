import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { getCompanyVendors } from "../../../services/operations/vendorAPI";
import { useSelector } from "react-redux";

const SelectVendors = ({
  prevStepHandler,
  selectedVendors,
  setSelectedVendors,
  createJobOpening,
}) => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [vendors, setVendors] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedVendors &&
      selectedVendors.length > 0 &&
      selectedVendors.length < vendors.length;
    setChecked(selectedVendors.length === vendors.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedVendors, vendors]);

  function toggleAll() {
    if (checked || indeterminate) {
      setSelectedVendors([]); // Deselect all
    } else {
      setSelectedVendors(vendors.map((vendor) => vendor.id)); // Select all vendor IDs
    }
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const getVendors = async () => {
    const response = await getCompanyVendors(user._id, token);

    if (response?.success) {
      setVendors(response.data);
    }
  };

  useEffect(() => {
    getVendors();
  }, [token, user]);

  useEffect(() => {
    console.log(selectedVendors);
  }, [selectedVendors]);

  return (
    <div className="bg-white rounded-md px-8 py-6">
      <div className=" ">
        <h3 className="text-xl leading-6 font-medium text-gray-900">
          Select Vendors
        </h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Select the vendors for this job application. Only selected vendors
          will be able to add candidates for this job post.
        </p>
      </div>
      <div className=" bg-white pt-3 rounded-lg">
        <div className="mt-4 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="relative overflow-hidden ">
                <table className="min-w-full table-fixed divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="relative w-12 px-6 sm:w-16 sm:px-8"
                      >
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                      </th>
                      <th
                        scope="col"
                        className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Total Candidates
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {vendors &&
                      vendors.length >= 1 &&
                      vendors.map((vendor) => (
                        <tr
                          key={vendor.email}
                          className={
                            selectedVendors.includes(vendor._id)
                              ? "bg-gray-50"
                              : undefined
                          }
                        >
                          <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                            {selectedVendors.includes(vendor._id) && (
                              <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                            )}
                            <input
                              type="checkbox"
                              className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                              value={vendor._id}
                              checked={selectedVendors.includes(vendor._id)}
                              onChange={(e) =>
                                setSelectedVendors((prevSelected) =>
                                  e.target.checked
                                    ? [...prevSelected, vendor._id]
                                    : prevSelected.filter(
                                        (id) => id !== vendor._id
                                      )
                                )
                              }
                            />
                          </td>
                          <td className="whitespace-nowrap py-4 pr-3 text-sm">
                            <div className="font-medium text-gray-900">
                              {vendor.name}
                            </div>
                            <div className="text-primary-violet font-medium">
                              #{vendor.id}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {vendor.email}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {vendor.candidates?.length || 0}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {vendor.role}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <button
          type="button"
          className="inline-flex w-fit place-self-end mt-8 items-center px-6 py-3 border  shadow-sm text-base font-medium rounded-md text-indigo-600 border-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={prevStepHandler}
        >
          <ChevronLeftIcon className="mr-3 -ml-1 h-5 w-5" aria-hidden="true" />
          Previous
        </button>
        <button
          type="button"
          className="inline-flex w-fit place-self-end mt-8 items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={createJobOpening}
        >
          Submit
          <ChevronRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default SelectVendors;
