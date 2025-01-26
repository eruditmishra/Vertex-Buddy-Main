import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getCompanyVendors } from "../../../services/operations/vendorAPI";
import { useSelector } from "react-redux";

const people = [
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    totalCandidates: 22,
    role: "Internal",
    id: "65744852",
  },
  // More people...
];

const VendorTable = ({ setshowAddVendorModal }) => {
  const checkbox = useRef();

  const [vendors, setVendors] = useState([]);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const fetchVendors = async () => {
    const response = await getCompanyVendors(user?._id, token);

    if (response?.success) {
      setVendors(response?.data);
    }
  };

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <div className=" bg-white pt-6 rounded-lg">
      <div className="sm:flex sm:items-center px-4 sm:px-6 lg:px-8">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Vendors</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            onClick={() => setshowAddVendorModal(true)}
          >
            + Add Vendor
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden ">
              {selectedPeople.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Delete all
                  </button>
                </div>
              )}
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
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {vendors &&
                    vendors?.length >= 1 &&
                    vendors.map((person) => (
                      <tr
                        key={person.email}
                        className={
                          selectedPeople.includes(person)
                            ? "bg-gray-50"
                            : undefined
                        }
                      >
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                          {selectedPeople.includes(person) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                            value={person.email}
                            checked={selectedPeople.includes(person)}
                            onChange={(e) =>
                              setSelectedPeople(
                                e.target.checked
                                  ? [...selectedPeople, person]
                                  : selectedPeople.filter((p) => p !== person)
                              )
                            }
                          />
                        </td>
                        <td className="whitespace-nowrap py-4  pr-3 text-sm ">
                          <div className="font-medium text-gray-900">
                            {person?.name}
                          </div>
                          <div className="text-primary-violet font-medium">
                            #{person?.id}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person?.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person?.candidates?.length}
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
  );
};

export default VendorTable;
