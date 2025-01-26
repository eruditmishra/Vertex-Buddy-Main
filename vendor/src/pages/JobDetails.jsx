import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import AppliedCandidates from "../components/core/jobDetails/AppliedCandidates";
import JobSkills from "../components/core/jobDetails/JobSkills";
import JobDetailCard from "../components/core/jobDetails/JobDetailCard";
import {
  getJobApplicationsByVendor,
  getJobDetails,
} from "../services/operations/jobAPI";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const JobDetails = () => {
  const [job, setJob] = useState("");
  const [jobApplications, setJobApplications] = useState([]);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const params = useParams();

  const fetchJob = async () => {
    const response = await getJobDetails(params?.id, token);

    if (response?.success) {
      setJob(response?.data);
    }
  };

  const fetchJobApplications = async () => {
    const response = await getJobApplicationsByVendor(
      job._id,
      user?._id,
      token
    );

    if (response?.success) {
      setJobApplications(response?.data);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  useEffect(() => {
    job && job?._id && fetchJobApplications();
  }, [job]);

  return (
    <div>
      <Header title={"Job Details"} desc={"View job details and applicants."} />
      <JobDetailCard jobDetails={job} />
      <JobSkills jobDetails={job} />
      <AppliedCandidates jobApplications={jobApplications} />
    </div>
  );
};

export default JobDetails;
