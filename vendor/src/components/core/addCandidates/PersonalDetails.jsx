import uploadIndicator from "../../../assets/uploadIcon.svg";
import { ChevronRightIcon } from "@heroicons/react/solid";

const PersonalDetails = ({
  nextStepHandler,
  handleFormChange,
  candidate,
  resumeUploadHandler,
}) => {
  return (
    <form className="bg-white mt-4 rounded-lg py-6 px-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-gray-700"
        >
          Upload CV
        </label>
        <div className="flex border-dashed border-2 border-SecondaryColor p-2 rounded-lg">
          <img src={uploadIndicator} className="p-2 " />
          <input
            id="resume"
            name="resume"
            type="file"
            className="text-[0.9rem] py-2 "
            onChange={resumeUploadHandler}
            accept=".pdf,.docx"
            placeholder="Upload your files here. jpeg, png, pdf formats only "
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              value={candidate.name}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="email"
              id="email"
              value={candidate.email}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="johndoe@gmail.com"
            />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="phone"
              id="phone"
              value={candidate.phone}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="9566473210"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="alternatePhone"
            className="block text-sm font-medium text-gray-700"
          >
            Alternate Phone No.
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="alternatePhone"
              id="alternatePhone"
              value={candidate.alternatePhone}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="9566473210"
            />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-700"
          >
            Date Of Birth
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={candidate.dateOfBirth}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md "
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <div className="mt-1">
            <select
              id="gender"
              name="gender"
              autoComplete="gender"
              value={candidate.gender}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            >
              <option>Female</option>
              <option>Male</option>
              <option>Others</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <button
          type="button"
          className="inline-flex w-fit place-self-end mt-8 items-center px-6 py-3   shadow-sm text-base font-medium rounded-md text-indigo-600 border-indigo-600 border-solid border-2  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="button"
          className="inline-flex w-fit place-self-end mt-8 items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={nextStepHandler}
        >
          Next
          <ChevronRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default PersonalDetails;
