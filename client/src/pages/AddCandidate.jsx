import { Toaster } from "react-hot-toast";
import AddCandidateForm from "../components/core/addCandidate/AddCandidateForm";

const AddCandidate = () => {
  return (
    <div className="flex flex-col w-full items-center py-6  min-h-[90vh]">
      <h1 className="text-center text-[1.5rem] font-bold text-offset-black">
        Add Candidate
      </h1>
      <AddCandidateForm />
      <Toaster />
    </div>
  );
};

export default AddCandidate;
