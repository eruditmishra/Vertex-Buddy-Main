import { Toaster } from "react-hot-toast";
import CandidateApplyForm from "../components/core/addCandidate/CandidateApplyForm";

const ApplyForm = () => {
  return (
    <div className="flex flex-col w-full items-center py-6  min-h-[90vh]">
      <h1 className="text-center text-[1.5rem] font-bold text-offset-black">
        Apply
      </h1>
      <CandidateApplyForm />
      <Toaster />
    </div>
  );
};

export default ApplyForm;
