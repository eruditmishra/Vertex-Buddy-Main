import { IoLocationOutline } from "react-icons/io5";
import { FaBriefcase, FaUserClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

import { getVendorJobs } from "../../../services/operations/jobAPI";

import { useSelector } from "react-redux";
import { useEffect } from "react";

const JobOpenings = () => {
  const [jobs, setJobs] = useState([]);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const fetchJobs = async () => {
    const response = await getVendorJobs(user._id, token);

    if (response?.success) {
      setJobs(response.data);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <dl className=" grid grid-cols-1 gap-5 sm:grid-cols-3 cursor-pointer">
      {jobs &&
        jobs?.length >= 1 &&
        jobs.map((item, index) => (
          <Link to={`${item?.jobId}`}>
            <div
              key={index}
              className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 "
            >
              <dd className="mt-1 text-xl font-semibold text-gray-900">
                {item.title}
              </dd>
              <dd className="flex mt-2 items-center gap-2">
                <FaBriefcase className="text-xl" />
                {item.experience}
              </dd>
              <dd className="flex mt-2 items-center gap-2">
                <IoLocationOutline className="text-xl" />
                {`${item?.location?.city}, ${item?.location?.state}`}
              </dd>
              <dd className="flex mt-2 items-center gap-2">
                <FaUserClock className="text-xl" />
                {item.type}
              </dd>
            </div>
          </Link>
        ))}
    </dl>
  );
};

export default JobOpenings;
