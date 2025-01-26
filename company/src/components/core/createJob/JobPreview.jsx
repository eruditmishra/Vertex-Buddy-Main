import JobDetailCard from "./JobDetailCard";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import JobSkills from "./JobSkills";

const JobPreview = ({ nextStepHandler, prevStepHandler, jobDetails }) => {
  return (
    <div>
      <JobDetailCard jobDetails={jobDetails} />
      <div className="bg-white mt-4 rounded-lg py-6 px-8">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Job Description
          </h3>
          <p
            className="mt-1 text-sm text-gray-500"
            dangerouslySetInnerHTML={{ __html: jobDetails.description }}
          ></p>
        </div>
      </div>
      <JobSkills jobDetails={jobDetails} />
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
    </div>
  );
};

export default JobPreview;
