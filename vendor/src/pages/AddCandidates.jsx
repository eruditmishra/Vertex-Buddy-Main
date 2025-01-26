import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Steps from "../components/core/addCandidates/Steps";
import AddCandidateForm from "../components/core/addCandidates/AddCandidateForm";

const AddCandidates = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const completedStepsHandler = (step) => {
    if (step > completedSteps) {
      setCompletedSteps(step);
    }
  };

  const nextStepHandler = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStepHandler = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    completedStepsHandler(currentStep);
  }, [currentStep]);

  return (
    <div className="flex flex-col gap-4">
      <Header title={"Add Candidate"} desc={"Add a new candidate"} />
      <Steps currentStep={currentStep} completedSteps={completedSteps} />
      <AddCandidateForm
        nextStepHandler={nextStepHandler}
        currentStep={currentStep}
        prevStepHandler={prevStepHandler}
        showSuccessModal={showSuccessModal}
        setShowSuccessModal={setShowSuccessModal}
      />
    </div>
  );
};

export default AddCandidates;
