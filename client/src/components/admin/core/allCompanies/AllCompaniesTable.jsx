import { useLayoutEffect, useRef, useState } from "react";
import { getAllCompanies } from "../../../../services/operations/companyAPI";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AllCompaniesTable = () => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [companies, setCompanies] = useState([]);

  const token = useSelector((state) => state.auth.token);

  const fetchCompanies = async () => {
    const response = await getAllCompanies(token);
    if (response?.success) {
      setCompanies(response?.companies);
    }
  };

  function toggleAll() {
    if (checked || indeterminate) {
      setSelectedCompanies([]);
    } else {
      setSelectedCompanies(companies);
    }
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedCompanies.length > 0 &&
      selectedCompanies.length < companies.length;
    setChecked(selectedCompanies.length === companies.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedCompanies, companies]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="bg-white pt-6 rounded-lg w-[95%] mx-auto">
      <div className="sm:flex sm:items-center px-4 sm:px-6 lg:px-8">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">All Companies</h1>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden">
              {selectedCompanies.length > 0 && (
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
                      Contact Person
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
                  {companies?.map((company) => (
                    <tr
                      key={company?.email}
                      className={
                        selectedCompanies.includes(company)
                          ? "bg-gray-50"
                          : undefined
                      }
                    >
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedCompanies.includes(company) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          value={company?.email}
                          checked={selectedCompanies.includes(company)}
                          onChange={(e) =>
                            setSelectedCompanies(
                              e.target.checked
                                ? [...selectedCompanies, company]
                                : selectedCompanies.filter((p) => p !== company)
                            )
                          }
                        />
                      </td>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm">
                        <div className="font-medium text-gray-900">
                          {company?.companyName}
                        </div>
                        <div className="text-primary-violet font-medium">
                          #{company?.companyID}
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {company?.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {company?.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {company?.vendors?.length}
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

export default AllCompaniesTable;
