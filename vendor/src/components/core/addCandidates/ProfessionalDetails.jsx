import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

const ProfessionalDetails = ({
  nextStepHandler,
  prevStepHandler,
  handleFormChange,
  candidate,
}) => {
  return (
    <form className="bg-white mt-4 rounded-lg py-6 px-8 flex flex-col gap-4">
      <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="qualification"
            className="block text-sm font-medium text-gray-700"
          >
            Highest Qualification
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="qualification"
              id="qualification"
              value={candidate.qualification}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="MBA"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700"
          >
            Skills
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="skills"
              id="skills"
              value={candidate.skills}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Leadership, Communication"
            />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="profile"
            className="block text-sm font-medium text-gray-700"
          >
            Profile
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="profile"
              id="profile"
              value={candidate.profile}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Java Developer"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="languagesKnown"
            className=" text-sm font-medium text-gray-700 flex justify-between"
          >
            Languages Known
            <span className=" font-normal mr-3">
              Enter multiple comma seperated languages
            </span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="languagesKnown"
              id="languagesKnown"
              value={candidate.languagesKnown}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="English, Hindi, French"
            />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="experience"
            className=" text-sm font-medium text-gray-700 flex justify-between"
          >
            Total Experience
            <span className=" font-normal mr-3">In years</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="experience"
              id="experience"
              value={candidate.experience}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="4"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="relevantExperience"
            className=" text-sm font-medium text-gray-700 flex justify-between"
          >
            Relevant Experience
            <span className=" font-normal mr-3">In years</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="relevantExperience"
              id="relevantExperience"
              value={candidate.relevantExperience}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="2"
            />
          </div>
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <button
          type="button"
          className="inline-flex w-fit place-self-end mt-8 items-center px-6 py-3 border  shadow-sm text-base font-medium rounded-md text-indigo-600 border-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={prevStepHandler}
        >
          <ChevronLeftIcon className="mr-3 -ml-1 h-5 w-5" aria-hidden="true" />
          Previous
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

export default ProfessionalDetails;
