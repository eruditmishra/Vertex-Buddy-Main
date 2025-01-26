import { useEffect, useState } from "react";
import JobDescriptionForm from "./JobDescriptionForm";
import JobDetailsForm from "./JobDetailsForm";
import JobPreview from "./JobPreview";
import SelectFromShortlistedCandidates from "./SelectFromShortlistedCandidates";
import SelectVendors from "./SelectVendors";
import SuccessModal from "./SuccessModal";
import { createJob } from "../../../services/operations/jobAPI";
import { useSelector } from "react-redux";

const CreateJobForm = ({
  nextStepHandler,
  currentStep,
  prevStepHandler,
  showSuccessModal,
  setShowSuccessModal,
}) => {
  const [showSelectVendors, setShowSelectVendors] = useState(false);

  const [jobDetails, setJobDetails] = useState({
    jobTitle: "",
    country: "",
    state: "",
    city: "",
    minSalary: "",
    maxSalary: "",
    type: "",
    profile: "",
    description: "",
    skills: [],
    experience: "",
    languages: [],
  });

  const [selectedVendors, setSelectedVendors] = useState([]);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const handleJobDetails = (event, data) => {
    if (event === "skills" || event === "languages") {
      setJobDetails((prevDetails) => ({
        ...prevDetails,
        [event]: data,
      }));
    } else {
      setJobDetails({
        ...jobDetails,
        [event.target.name]: event.target.value,
      });
    }
  };

  const createJobOpening = async () => {
    const response = await createJob(
      jobDetails,
      user._id,
      selectedVendors,
      token
    );

    if (response?.success) {
      setShowSuccessModal(true);
    }
  };

  useEffect(() => {
    console.log(jobDetails);
  }, [jobDetails]);

  return (
    <>
      {currentStep === 1 ? (
        <JobDetailsForm
          nextStepHandler={nextStepHandler}
          handleJobDetails={handleJobDetails}
          jobDetails={jobDetails}
        />
      ) : currentStep === 2 ? (
        <JobDescriptionForm
          nextStepHandler={nextStepHandler}
          handleJobDetails={handleJobDetails}
          jobDetails={jobDetails}
          prevStepHandler={prevStepHandler}
        />
      ) : currentStep === 3 ? (
        <JobPreview
          nextStepHandler={nextStepHandler}
          prevStepHandler={prevStepHandler}
          jobDetails={jobDetails}
        />
      ) : currentStep === 4 ? (
        <>
          {showSelectVendors ? (
            <SelectVendors
              prevStepHandler={prevStepHandler}
              setShowSuccessModal={setShowSuccessModal}
              selectedVendors={selectedVendors}
              setSelectedVendors={setSelectedVendors}
              createJobOpening={createJobOpening}
            />
          ) : (
            <SelectFromShortlistedCandidates
              setShowSelectVendors={setShowSelectVendors}
            />
          )}
        </>
      ) : null}
      <SuccessModal isOpen={showSuccessModal} />
    </>
  );
};

export default CreateJobForm;
