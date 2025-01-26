import Header from "../components/common/Header";
import OpenedJobs from "../components/core/homepage/OpenedJobs";
import StatsContainer from "../components/core/homepage/StatsContainer";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header title={"Hi Monika,"} desc={"Welcome to your dashboard"} />
      {/* <StatsContainer /> */}
      <h2 className=" text-[1.3rem] font-semibold">Current Job Openings </h2>
      <OpenedJobs />
    </div>
  );
};

export default Home;
