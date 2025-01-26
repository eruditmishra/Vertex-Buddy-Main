import Header from "../components/common/Header";
import JobsTable from "../components/core/allJobs/JobsTable";

const Jobs = () => {
  return (
    <div>
      <Header
        title={"All Jobs"}
        desc={"Manage all job openings and applicants."}
      />
      <JobsTable />
    </div>
  );
};

export default Jobs;
