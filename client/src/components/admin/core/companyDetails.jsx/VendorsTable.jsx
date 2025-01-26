import { useState } from "react";
import { Link } from "react-router-dom";

const people = [
  {
    name: "Lindsay Walton",
    company: "Optimization",
    email: "lindsay.walton@example.com",
    totalCandidates: "4",
    id: "65744852",
    createdAt: "22-04-2024",
  },
  {
    name: "Lindsay Walton",
    company: "Optimization",
    email: "lindsay.walton@example.com",
    totalCandidates: "4",
    id: "65744852",
    createdAt: "22-04-2024",
  },
  {
    name: "Lindsay Walton",
    company: "Optimization",
    email: "lindsay.walton@example.com",
    totalCandidates: "4",
    id: "65744852",
    createdAt: "22-04-2024",
  },
  {
    name: "Lindsay Walton",
    company: "Optimization",
    email: "lindsay.walton@example.com",
    totalCandidates: "4",
    id: "65744852",
    createdAt: "22-04-2024",
  },
];

const VendorsTable = ({ company }) => {
  const [vendors, setVendors] = useState(people);

  return (
    <div className="bg-white rounded-lg w-[98%]  ">
      <div className="sm:flex sm:items-center px-4 sm:px-6 lg:px-8 pt-5">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Vendors</h1>
        </div>
      </div>
      <div className="mt-8 flex flex-col h-[20rem] bg-white ">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden  ">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Company
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
                    vendors?.map((vendor) => (
                      <tr key={vendor?.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <Link to={`/jobs/vendor-details/${vendor?.id}`}>
                              <div className="font-medium text-gray-900">
                                {vendor?.name}
                              </div>
                              <div className="text-primary-violet font-medium">
                                #{vendor?.id}
                              </div>
                            </Link>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">{vendor?.company}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {vendor?.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {vendor?.totalCandidates}
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

export default VendorsTable;
