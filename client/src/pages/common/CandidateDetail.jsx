import { useSelector } from "react-redux";
import CandidateContactInfoCard from "../../components/core/candidateDetail/CandidateContactInfoCard";
import CandidateDetailsSection from "../../components/core/candidateDetail/CandidateDetailsSection";
import CandidateGenderDateOfBirthCard from "../../components/core/candidateDetail/CandidateGenderDateOfBirthCard";
import CandidateSkillsCard from "../../components/core/candidateDetail/CandidateSkillsCard";
import CandidateInfoCard from "../../components/core/candidateDetail/CandidateInfoCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCandidateDetails } from "../../services/operations/candidateAPI";

const CandidateDetail = () => {
  const { token } = useSelector((state) => state.auth);

  const [candidate, setCandidate] = useState();

  const params = useParams();

  const { candidateId } = params;

  const fetchCandidateDetails = async () => {
    const response = await getCandidateDetails(candidateId, token);

    if (response?.success) {
      setCandidate(response.data);
    }
  };

  useEffect(() => {
    fetchCandidateDetails();
  }, [token]);

  return (
    <div className="flex justify-between  my-9 mx-7">
      <div className=" flex flex-col w-[25%] gap-3 ">
        <CandidateInfoCard candidate={candidate && candidate} />
        <CandidateContactInfoCard candidate={candidate && candidate} />
        <CandidateGenderDateOfBirthCard candidate={candidate && candidate} />
        <CandidateSkillsCard candidate={candidate && candidate} />
      </div>
      <CandidateDetailsSection candidate={candidate && candidate} />
    </div>
  );
};

export default CandidateDetail;
