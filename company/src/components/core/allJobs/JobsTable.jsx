import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJobs } from "../../../services/operations/jobAPI";
import { useSelector } from "react-redux";
import { formattedDate } from "../../../utils/dateFormatter";

const JobsTable = () => {
  const [jobs, setJobs] = useState([]);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const fetchJobs = async () => {
    const response = await getJobs(user?._id, token);

    if (response?.success) {
      setJobs(response?.data);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="bg-white rounded-lg  ">
      <div className="sm:flex sm:items-center px-4 sm:px-6 lg:px-8 pt-5">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Recent Openings
          </h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link to="create">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              + Create Job
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
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
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Created On
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
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
                  {jobs &&
                    jobs?.length >= 1 &&
                    jobs.map((job) => (
                      <tr key={job?.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <Link to={`/jobs/job-details/${job?.jobId}`}>
                              <div className="font-medium text-gray-900">
                                {job?.title}
                              </div>
                              <div className="text-primary-violet font-medium">
                                #{job?.jobId}
                              </div>
                            </Link>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {formattedDate(job?.createdAt)}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {job?.type}
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

export default JobsTable;
