import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import RecentJobs from "../components/core/home/RecentJobs";
import StatsContainer from "../components/core/home/StatsContainer";
import { useEffect, useState } from "react";
import { getJobs } from "../services/operations/jobAPI";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const fetchJobs = async () => {
    const response = await getJobs(user?._id, token);

    if (response?.success) {
      setJobs(response?.data);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Header title={`Hi, ${user?.name}`} desc={"Welcome to your dashboard"} />
      <StatsContainer totalOpenings={jobs?.length} />
      <RecentJobs jobs={jobs} />
    </div>
  );
};

export default Home;
