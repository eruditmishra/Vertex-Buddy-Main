import { Toaster } from "react-hot-toast";
import RecruitersList from "../../components/admin/core/home/RecruitersList";

const AllRecruiters = () => {
  return (
    <div className=" mt-8 w-[95%] mx-auto">
      <RecruitersList />
      <Toaster />
    </div>
  );
};

export default AllRecruiters;
