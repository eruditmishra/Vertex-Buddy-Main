import { useEffect, useState } from "react";
import CTAButton from "../../commom/CTAButton";
import { addCandidate } from "../../../services/operations/candidateAPI";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const AddCandidateForm = () => {
  const { token } = useSelector((state) => state.auth);
  const [resume, setResume] = useState("");

  const initialCandidateData = {
    name: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    gender: "",
    highestQualification: "",
    skills: "",
    currentCompany: "",
    currentDesignation: "",
    totalExperience: "",
    relevantExperience: "",
    currentLocation: "",
    preferredLocation: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    lastWorkingDay: "",
    holdingAnyOffer: "",
    interestedRole: "",
    languagesKnown: "",
    profile: "",
    vendorName: "",
  };

  const [candidateData, setCandidateData] = useState(initialCandidateData);

  const resetForm = () => {
    setCandidateData(initialCandidateData);
    setResume("");
    document.getElementById("resume").value = null;
  };

  const candidateDataHandler = (event) => {
    setCandidateData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    // console.log(candidateData);
  }, [candidateData]);

  const addCandidateHandler = async (event) => {
    event.preventDefault();
    const response = await addCandidate(candidateData, resume, token);
    // console.log(response);
    if (response?.success) {
      toast.success("Candidate added successfully");
      resetForm();
    }
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

  return (
    <form
      className="flex flex-col px-6 py-5 w-[95%] gap-6 bg-white rounded-xl my-4"
      onSubmit={addCandidateHandler}
    >
      <div className="flex justify-between gap-6 w-full ">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="resume" className="text-offset-black font-semibold">
            Resume / CV <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            placeholder="Enter the languages you know"
            name="resume"
            id="resume"
            required
            // onChange={(event) => setResume(event.target.files)}
            onChange={resumeUploadHandler}
            accept=".pdf,.docx"
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="vendorName"
            className="text-offset-black font-semibold"
          >
            Vendor Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter the vendor's name"
            name="vendorName"
            id="vendorName"
            value={candidateData.vendorName}
            onChange={candidateDataHandler}
            required
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
      </div>
      <div className="flex justify-between gap-6 w-full ">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name" className="text-offset-black font-semibold">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            id="name"
            required
            value={candidateData.name}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-offset-black font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="email@google.com"
            name="email"
            id="email"
            required
            value={candidateData.email}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="phoneNumber"
            className="text-offset-black font-semibold"
          >
            Phone No <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="+xx-xxxxxxxxx"
            name="phoneNumber"
            id="phoneNumber"
            required
            value={candidateData.phoneNumber}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="alternatePhoneNumber"
            className="text-offset-black font-semibold"
          >
            Alternate Phone Number
          </label>
          <input
            type="text"
            placeholder="+xx-xxxxxxxxx"
            name="alternatePhoneNumber"
            id="alternatePhoneNumber"
            value={candidateData.alternatePhoneNumber}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
      </div>
      <div className="flex justify-between gap-6 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="dateOfBirth"
            className="text-offset-black font-semibold"
          >
            Date of Birth
          </label>
          <input
            type="date"
            placeholder="Full Name"
            name="dateOfBirth"
            id="dateOfBirth"
            value={candidateData.dateOfBirth}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="gender" className="text-offset-black font-semibold">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            name="gender"
            id="gender"
            required
            value={candidateData.gender}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          >
            <option value="" disabled>
              Please Select
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="highestQualification"
            className="text-offset-black font-semibold"
          >
            Highest Qualification <span className="text-red-500">*</span>
          </label>
          <input
            type="string"
            placeholder="Masters of Business Administration"
            name="highestQualification"
            id="highestQualification"
            required
            value={candidateData.highestQualification}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="skills" className="text-offset-black font-semibold">
            Skills <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Skills"
            name="skills"
            id="skills"
            required
            value={candidateData.skills}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
      </div>
      <div className="flex justify-between gap-6 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="profile" className="text-offset-black font-semibold">
            Profile <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter the current profile"
            name="profile"
            id="profile"
            required
            value={candidateData.profile}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="currentCompany"
            className="text-offset-black font-semibold"
          >
            Current Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Current Company"
            name="currentCompany"
            id="currentCompany"
            value={candidateData.currentCompany}
            onChange={candidateDataHandler}
            required
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="currentDesignation"
            className="text-offset-black font-semibold"
          >
            Current Designation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Current Designation"
            name="currentDesignation"
            id="currentDesignation"
            value={candidateData.currentDesignation}
            required
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex justify-between gap-6 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="totalExperience"
              className="text-offset-black font-semibold"
            >
              Total Experience <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="Enter years of experience"
              name="totalExperience"
              id="totalExperience"
              required
              value={candidateData.totalExperience}
              onChange={candidateDataHandler}
              className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="relevantExperience"
              className="text-offset-black font-semibold text-[0.85rem]"
            >
              Relevant Experience <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="Enter years of relevant experience"
              name="relevantExperience"
              id="relevantExperience"
              required
              value={candidateData.relevantExperience}
              onChange={candidateDataHandler}
              className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-6 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="currentLocation"
            className="text-offset-black font-semibold"
          >
            Current Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your current location"
            name="currentLocation"
            id="currentLocation"
            required
            value={candidateData.currentLocation}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="preferredLocation"
            className="text-offset-black font-semibold"
          >
            Preferred Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your preferred location"
            name="preferredLocation"
            id="preferredLocation"
            required
            value={candidateData.preferredLocation}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex justify-between gap-6 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="currentCTC"
              className="text-offset-black font-semibold"
            >
              Current CTC <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your current CTC"
              name="currentCTC"
              id="currentCTC"
              required
              value={candidateData.currentCTC}
              onChange={candidateDataHandler}
              className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="expectedCTC"
              className="text-offset-black font-semibold"
            >
              Expected CTC <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your expected CTC"
              name="expectedCTC"
              id="expectedCTC"
              required
              value={candidateData.expectedCTC}
              onChange={candidateDataHandler}
              className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="noticePeriod"
            className="text-offset-black font-semibold"
          >
            Notice Period <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your notice period"
            name="noticePeriod"
            id="noticePeriod"
            value={candidateData.noticePeriod}
            onChange={candidateDataHandler}
            required
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
      </div>
      <div className="flex justify-between gap-6 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="lastWorkingDay"
            className="text-offset-black font-semibold"
          >
            Last Working Day
          </label>
          <input
            type="date"
            name="lastWorkingDay"
            id="lastWorkingDay"
            value={candidateData.lastWorkingDay}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="holdingAnyOffer"
            className="text-offset-black font-semibold"
          >
            Are you holding any offer?
          </label>
          <input
            type="text"
            placeholder="Enter your last working day"
            name="holdingAnyOffer"
            id="holdingAnyOffer"
            value={candidateData.holdingAnyOffer}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="interestedRole"
            className="text-offset-black font-semibold"
          >
            Interested Role <span className="text-red-500">*</span>
          </label>

          <select
            name="interestedRole"
            id="interestedRole"
            required
            value={candidateData.interestedRole}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          >
            <option disabled value="">
              Please Select
            </option>
            <option value="Permanent"> Permanent</option>
            <option value="Permanent"> Contractual</option>
            <option value="Both"> Both</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="languagesKnown"
            className="text-offset-black font-semibold"
          >
            Languages Known <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter the languages you know"
            name="languagesKnown"
            id="languagesKnown"
            required
            value={candidateData.languagesKnown}
            onChange={candidateDataHandler}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
      </div>

      <div className="w-fit mx-auto">
        <CTAButton title={"Add Candidate"} />
      </div>
    </form>
  );
};

export default AddCandidateForm;
