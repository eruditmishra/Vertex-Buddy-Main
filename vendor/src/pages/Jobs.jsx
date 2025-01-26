import Header from "../components/common/Header";
import JobOpenings from "../components/core/jobsPage/JobOpenings";

const Jobs = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header title={"Jobs"} desc={"Job openings for you"} />
      <JobOpenings />
    </div>
  );
};

export default Jobs;
