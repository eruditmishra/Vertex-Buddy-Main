import { useState } from "react";
import OccupationalDetails from "./OccupationalDetails";
import PersonalDetails from "./PersonalDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import SuccessModal from "./successModal";
import { addCandidate } from "../../../services/operations/candidateAPI";
import { useSelector } from "react-redux";

const AddCandidateForm = ({
  nextStepHandler,
  currentStep,
  prevStepHandler,
  showSuccessModal,
  setShowSuccessModal,
}) => {
  const [candidate, setCandidate] = useState({
    name: "",
    email: "",
    phone: "",
    alternateNumber: "",
    dateOfBirth: "",
    gender: "",
    qualification: "",
    skills: "",
    profile: "",
    languages: "",
    experience: "",
    relevantExperience: "",
    currentCompany: "",
    currentDesignation: "",
    currentLocation: "",
    preferredLocation: "",
    currentCTC: "",
    expectedCTC: "",
    interestedRole: "",
    noticePeriod: "",
    isOnNoticePeriod: false,
    lastWorkingDay: "",
    isHoldingOffer: false,
    offeredCTC: "",
  });

  const [resume, setResume] = useState(null);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const handleFormChange = (event) => {
    const { name, value, type } = event.target;

    setCandidate((prevState) => ({
      ...prevState,
      [name]: type === "radio" ? value === "true" : value,
    }));
  };

  const resumeUploadHandler = (event) => {
    const file = event.target.files[0];
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]; // Mime types for pdf and docx files

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only .docx and .pdf file format is allowed");
      event.target.value = ""; // Clear the input field
    } else {
      // Proceed with file upload
      setResume(event.target.files);
    }
  };

  const addCandidateHandler = async (event) => {
    try {
      event.preventDefault();
      console.log("called");
      const formData = new FormData();
      formData.append("name", candidate.name);
      formData.append("email", candidate.email);
      formData.append("phone", candidate.phone);
      formData.append("alternateNumber", candidate.alternateNumber);
      formData.append("dateOfBirth", candidate.dateOfBirth);
      formData.append("gender", candidate.gender);
      formData.append("qualification", candidate.qualification);
      formData.append("skills", candidate.skills);
      formData.append("profile", candidate.profile);
      formData.append("languages", candidate.languages);
      formData.append("experience", candidate.experience);
      formData.append("relevantExperience", candidate.relevantExperience);
      formData.append("currentCompany", candidate.currentCompany);
      formData.append("currentDesignation", candidate.currentDesignation);
      formData.append("currentLocation", candidate.currentLocation);
      formData.append("preferredLocation", candidate.preferredLocation);
      formData.append("currentCTC", candidate.currentCTC);
      formData.append("expectedCTC", candidate.expectedCTC);
      formData.append("interestedRole", candidate.interestedRole);
      formData.append("noticePeriod", candidate.noticePeriod);
      formData.append("isOnNoticePeriod", candidate.isOnNoticePeriod);
      formData.append("lastWorkingDay", candidate.lastWorkingDay);
      formData.append("isHoldingOffer", candidate.isHoldingOffer);
      formData.append("offeredCTC", candidate.offeredCTC);
      formData.append("resume", resume[0]);

      const response = await addCandidate(formData, user.name, user._id, token);

      if (response?.success) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {currentStep === 1 ? (
        <PersonalDetails
          nextStepHandler={nextStepHandler}
          handleFormChange={handleFormChange}
          candidate={candidate}
          resumeUploadHandler={resumeUploadHandler}
        />
      ) : currentStep === 2 ? (
        <ProfessionalDetails
          nextStepHandler={nextStepHandler}
          prevStepHandler={prevStepHandler}
          handleFormChange={handleFormChange}
          candidate={candidate}
        />
      ) : currentStep === 3 ? (
        <OccupationalDetails
          nextStepHandler={nextStepHandler}
          prevStepHandler={prevStepHandler}
          handleFormChange={handleFormChange}
          candidate={candidate}
          addCandidateHandler={addCandidateHandler}
        />
      ) : null}
      <SuccessModal isOpen={showSuccessModal} />
    </div>
  );
};

export default AddCandidateForm;
