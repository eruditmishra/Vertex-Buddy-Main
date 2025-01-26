import CandidateInfoCard from "../components/core/applicationDetails/CandidateInfoCard";
import ContactInfoCard from "../components/core/applicationDetails/ContactInfoCard";
import CandidateGenderDOBCard from "../components/core/applicationDetails/CandidateGenderDOBCard";
import CandidateSkillsCard from "../components/core/applicationDetails/CandidateSkillsCard";
import CandidateDetailsSection from "../components/core/applicationDetails/CandidateDetailsSection";
import InterviewRounds from "../components/core/applicationDetails/InterviewRounds";
import {
  getJobApplication,
  getJobDetails,
} from "../services/operations/jobAPI";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getCandidateDetails } from "../services/operations/candidateAPI";

const JobApplicationDetails = () => {
  const [jobApplication, setJobApplication] = useState("");
  const [candidateDetails, setCandidateDetails] = useState("");

  const { token } = useSelector((state) => state.auth);

  const params = useParams();

  const fetchJobApplication = async () => {
    const response = await getJobApplication(params?.applicationId, token);

    if (response?.success) {
      setJobApplication(response.data);
    }
  };

  const fetchCanidateDetails = async () => {
    const response = await getCandidateDetails(
      jobApplication?.candidate?.id,
      token
    );

    if (response?.success) {
      setCandidateDetails(response?.data);
    }
  };

  useEffect(() => {
    fetchJobApplication();
  }, []);

  useEffect(() => {
    if (jobApplication) {
      fetchCanidateDetails();
    }
  }, [jobApplication]);

  return (
    <div className="flex gap-6 w-full">
      <div className="flex flex-col gap-3 min-w-[25%]">
        <CandidateInfoCard candidateDetails={candidateDetails} />
        <ContactInfoCard candidate={candidateDetails} />
        <CandidateGenderDOBCard candidate={candidateDetails} />
        {/* <InterviewRounds /> */}
      </div>
      <div className=" flex flex-col w-[73%] gap-3">
        {/*  */}
        <CandidateSkillsCard candidate={candidateDetails} />
        <CandidateDetailsSection candidate={candidateDetails} />
      </div>
    </div>
  );
};

export default JobApplicationDetails;
