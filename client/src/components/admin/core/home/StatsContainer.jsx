import { useSelector } from "react-redux";
import StatCard from "./StatCard";
import { getAllRecruiters } from "../../../../services/operations/recruiterAPI";
import { useEffect, useState } from "react";
import { getAllCandidates } from "../../../../services/operations/candidateAPI";

const StatsContainer = () => {
  const { token } = useSelector((state) => state.auth);

  const [totalRecruiters, setTotalRecruiters] = useState("--");
  const [internalRecruiters, setInternalRecruiters] = useState("--");
  const [externalRecruiters, setExternalRecruiters] = useState("--");
  const [totalCandidates, setTotalCandidates] = useState("--");

  const fetchRecruiters = async () => {
    const response = await getAllRecruiters(token);
    setTotalRecruiters(response.data.length);
    let internalRecruiters = 0;
    let externalRecruiters = 0;
    response?.data.map((recruiter) => {
      if (recruiter.accountType === "internalUser") {
        internalRecruiters++;
      } else if (recruiter.accountType === "externalUser") {
        externalRecruiters++;
      }
    });

    setInternalRecruiters(internalRecruiters);
    setExternalRecruiters(externalRecruiters);
  };

  const fetchCandidates = async () => {
    const response = await getAllCandidates(token);
    setTotalCandidates(response.data.length);
  };

  useEffect(() => {
    fetchRecruiters();
    fetchCandidates();
  }, [token]);

  return (
    <div className="flex justify-between self-stretch mt-4 gap-5">
      <StatCard label={"Total Candidates"} stat={totalCandidates} />
      <StatCard label={"Total Recruiters"} stat={totalRecruiters} />
      <StatCard label={"Internal Recruiters"} stat={internalRecruiters} />
      <StatCard label={"External Recruiters"} stat={externalRecruiters} />
    </div>
  );
};

export default StatsContainer;
