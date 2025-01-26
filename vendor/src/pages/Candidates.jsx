import Header from "../components/common/Header";
import CandidatesTable from "../components/core/candidates/CandidatesTable";

const Candidates = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header title={"Candidates"} desc={"Easily manage your candidates"} />
      <CandidatesTable />
    </div>
  );
};

export default Candidates;
