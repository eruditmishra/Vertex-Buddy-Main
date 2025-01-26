import { Toaster } from "react-hot-toast";
import EditCandidateForm from "../../components/core/editCandidate/EditCandidateForm";
const EditCandidate = () => {
  return (
    <div className="flex flex-col w-full items-center py-6  min-h-[90vh]">
      <h1 className="text-center text-[1.5rem] font-bold text-offset-black">
        Edit Candidate
      </h1>
      <EditCandidateForm />
      <Toaster />
    </div>
  );
};

export default EditCandidate;
