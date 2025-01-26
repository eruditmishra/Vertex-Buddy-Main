import { Toaster } from "react-hot-toast";
import AddRecruiterForm from "../../components/admin/core/addRecruiter/AddRecruiterForm";

const AddRecruiter = () => {
  return (
    <div className="w-fit mx-auto my-10 flex flex-col gap-6 items-center bg-white py-12 px-12 rounded-2xl cardShadow">
      <h1 className="text-3xl font-bold text-offset-black">Add Recruiter</h1>
      <AddRecruiterForm />
      <Toaster />
    </div>
  );
};

export default AddRecruiter;
