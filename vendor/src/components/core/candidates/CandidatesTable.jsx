import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getCandidates } from "../../../services/operations/candidateAPI";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { applyForJob } from "../../../services/operations/jobAPI";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const CandidatesTable = () => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [candidates, setCandidates] = useState([]);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const jobId = searchParams.get("jobId");

  const fetchCandidates = async () => {
    const response = await getCandidates(token, user?._id);
    if (response?.success) {
      setCandidates(response?.data);
    }
  };

  // Toggles the selection of all candidates
  function toggleAll() {
    if (checked || indeterminate) {
      setSelectedCandidates([]);
    } else {
      setSelectedCandidates(candidates);
    }
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  const selectCandidates = async () => {
    const loadingToast = toast.loading("Applying for job...");

    const candidateIds = selectedCandidates.map((candidate) => candidate._id);

    const response = await applyForJob(
      jobId,
      candidateIds,
      token,
      loadingToast
    );

    if (response?.success) {
      navigate(`/jobs/${jobId}`);
      toast.dismiss(loadingToast);
    }
  };

  // Fetch candidates on component mount
  useEffect(() => {
    fetchCandidates();
  }, []);

  // Update the checked and indeterminate states when selectedCandidates or candidates change
  useLayoutEffect(() => {
    const isIndeterminate =
      selectedCandidates.length > 0 &&
      selectedCandidates.length < candidates.length;
    setChecked(
      selectedCandidates.length === candidates.length && candidates.length > 0
    );
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedCandidates, candidates]);

  return (
    <div className=" bg-white pt-6 rounded-lg">
      <div className="sm:flex sm:items-center px-4 sm:px-6 lg:px-8">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            All Candidates
          </h1>
        </div>
        {location?.pathname === "/jobs/select-candidates" ? (
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              onClick={selectCandidates}
            >
              Select
            </button>
          </div>
        ) : (
          <Link to="/candidates/add-candidate">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              + Add Candidate
            </button>
          </Link>
        )}
      </div>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden">
              {/* {selectedCandidates.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Delete all
                  </button>
                </div>
              )} */}
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
                      Mobile
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
                      Experience
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Profile
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {candidates &&
                    candidates?.length >= 1 &&
                    candidates.map((person) => (
                      <tr
                        key={person.email}
                        className={
                          selectedCandidates.includes(person)
                            ? "bg-gray-50"
                            : undefined
                        }
                      >
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                          {selectedCandidates.includes(person) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                            value={person.email}
                            checked={selectedCandidates.includes(person)}
                            onChange={(e) =>
                              setSelectedCandidates(
                                e.target.checked
                                  ? [...selectedCandidates, person]
                                  : selectedCandidates.filter(
                                      (p) => p !== person
                                    )
                              )
                            }
                          />
                        </td>
                        <td className="whitespace-nowrap py-4 pr-3 text-sm">
                          <div className="font-medium text-gray-900">
                            {person?.firstName} {person?.middleName}{" "}
                            {person?.lastName}
                          </div>
                          <Link to={person.id}>
                            <div className="text-primary-violet font-medium">
                              #{person.id}
                            </div>
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.phoneNumber}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.totalExperience} Yrs
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.profile}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CandidatesTable;
