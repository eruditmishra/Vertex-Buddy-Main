import React from "react";
import CandidateInfoCard from "../components/core/candidateDetails/CandidateInfoCard";
import ContactInfoCard from "../../../company/src/components/core/applicationDetails/ContactInfoCard";
import CandidateGenderDOBCard from "../../../company/src/components/core/applicationDetails/CandidateGenderDOBCard";
import InterviewRounds from "../../../company/src/components/core/applicationDetails/InterviewRounds";
import CandidateSkillsCard from "../../../company/src/components/core/applicationDetails/CandidateSkillsCard";
import CandidateDetailsSection from "../components/core/candidateDetails/CandidateDetailsSection";
import { useState } from "react";
import { getCandidateDetails } from "../services/operations/candidateAPI";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CandidateDetails = () => {
  const [candidate, setCandidate] = useState("");

  const params = useParams();

  const { token } = useSelector((state) => state.auth);

  const fetchCandidate = async () => {
    const response = await getCandidateDetails(params.id, token);
    if (response?.success) {
      setCandidate(response.data);
    }
  };

  useEffect(() => {
    fetchCandidate();
  }, []);

  return (
    <div className="flex gap-6 w-full">
      <div className="flex flex-col gap-3 min-w-[25%]">
        <CandidateInfoCard candidate={candidate} />
        <ContactInfoCard candidate={candidate} />
        <CandidateGenderDOBCard candidate={candidate} />
        {/* <InterviewRounds /> */}
      </div>
      <div className=" flex flex-col w-[73%] gap-3">
        <CandidateSkillsCard candidate={candidate} />
        <CandidateDetailsSection candidate={candidate} />
      </div>
    </div>
  );
};

export default CandidateDetails;
