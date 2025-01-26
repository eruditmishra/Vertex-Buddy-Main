import Header from "../components/common/Header";
import CandidatesTable from "../components/core/candidates/CandidatesTable";

const SelectCandidates = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header
        title={"Select Candidates"}
        desc={"Select Candidates which you feel are best suited for this job"}
      />
      <CandidatesTable />
    </div>
  );
};

export default SelectCandidates;
