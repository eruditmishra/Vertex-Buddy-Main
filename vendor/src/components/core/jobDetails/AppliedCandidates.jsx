import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const AppliedCandidates = ({ jobApplications }) => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedJobApplication, setSelectedJobApplication] = useState([]);

  const params = useParams();

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedJobApplication.length > 0 &&
      selectedJobApplication.length < jobApplications.length;
    setChecked(selectedJobApplication.length === jobApplications.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedJobApplication, jobApplications.length]);

  function toggleAll() {
    setSelectedJobApplication(checked || indeterminate ? [] : jobApplications);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className=" bg-white pt-6 rounded-lg mt-4">
      <div className="sm:flex sm:items-center px-4 sm:px-6 lg:px-8">
        <div className="sm:flex-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">
            Job Applications
          </h1>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex items-center gap-2">
            <Link to={`/jobs/select-candidates?jobId=${params.id}`}>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Select Candidates
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden ">
              {selectedJobApplication.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Shortlist all
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Delete all
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Reject all
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {jobApplications &&
                    jobApplications?.length >= 1 &&
                    jobApplications.map((application) => (
                      <tr
                        key={application?.candidate?.email}
                        className={
                          selectedJobApplication.includes(application)
                            ? "bg-gray-50"
                            : undefined
                        }
                      >
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                          {selectedJobApplication.includes(application) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                            value={application.email}
                            checked={selectedJobApplication.includes(
                              application
                            )}
                            onChange={(e) =>
                              setSelectedJobApplication(
                                e.target.checked
                                  ? [...selectedJobApplication, application]
                                  : selectedJobApplication.filter(
                                      (p) => p !== application
                                    )
                              )
                            }
                          />
                        </td>
                        <td className="whitespace-nowrap py-4  pr-3 text-sm ">
                          <Link to={`application/${application?._id}`}>
                            <div className="font-medium text-gray-900">
                              {application?.candidate?.name}
                            </div>
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {application?.candidate?.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-indigo-800 cursor-pointer">
                          View More
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

export default AppliedCandidates;
