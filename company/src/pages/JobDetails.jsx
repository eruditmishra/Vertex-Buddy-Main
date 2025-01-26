import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import JobDetailCard from "../components/core/createJob/JobDetailCard";
import JobSkills from "../components/core/createJob/JobSkills";
import CandidatesList from "../components/core/jobDetails/CandidatesList";
import {
  getJobApplications,
  getJobDetails,
} from "../services/operations/jobAPI";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import RoundsBanner from "../components/core/createJob/RoundsBanner";

const JobDetails = () => {
  const [job, setJob] = useState("");
  const [jobApplications, setJobApplications] = useState([]);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const params = useParams();

  const fetchJob = async () => {
    const response = await getJobDetails(params?.jobId, token);

    if (response?.success) {
      setJob(response?.data);
    }
  };

  const fetchJobApplications = async () => {
    const response = await getJobApplications(job._id, token);

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
      <RoundsBanner />
      <JobDetailCard jobDetails={job} />
      <JobSkills jobDetails={job} />
      <CandidatesList jobApplications={jobApplications} />
    </div>
  );
};

export default JobDetails;
