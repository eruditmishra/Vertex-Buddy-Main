import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import CreateJobForm from "../components/core/createJob/CreateJobForm";
import Steps from "../components/core/createJob/Steps";

const CreateJob = () => {
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
    <div>
      <Header
        title={"Add a new Job Opening"}
        desc={"Fill in the details of the job opening."}
      />
      <Steps currentStep={currentStep} completedSteps={completedSteps} />
      <CreateJobForm
        nextStepHandler={nextStepHandler}
        currentStep={currentStep}
        prevStepHandler={prevStepHandler}
        showSuccessModal={showSuccessModal}
        setShowSuccessModal={setShowSuccessModal}
      />
    </div>
  );
};

export default CreateJob;
