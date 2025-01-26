import { ChevronRightIcon } from "@heroicons/react/solid";
import countries from "../../../data/countries.json";
import { useEffect } from "react";

const JobDetailsForm = ({ nextStepHandler, jobDetails, handleJobDetails }) => {
  return (
    <form className=" flex flex-col bg-white py-8 px-8 rounded-lg">
      <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="jobTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Job Title
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={jobDetails.jobTitle}
              onChange={handleJobDetails}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Business Analyst"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <div className="mt-1">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              onChange={handleJobDetails}
              value={jobDetails.country}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            >
              <option disabled value={""}>
                Please Select
              </option>

              {countries.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <div className="mt-1">
            <select
              id="state"
              name="state"
              value={jobDetails.state}
              onChange={handleJobDetails}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            >
              <option disabled value={""}>
                Please Select
              </option>

              {jobDetails.country &&
                countries
                  .find((country) => country.name === jobDetails.country)
                  ?.states?.map((country) => (
                    <option key={country.id} value={country.name}>
                      {country.name}
                    </option>
                  ))}
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <div className="mt-1">
            <select
              id="city"
              name="city"
              value={jobDetails.city}
              onChange={handleJobDetails}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            >
              <option disabled value={""}>
                Please Select
              </option>

              {jobDetails.state &&
                countries
                  .find((country) => country.name === jobDetails.country)
                  ?.states?.find((state) => state.name === jobDetails.state)
                  ?.cities?.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="profile"
            className="block text-sm font-medium text-gray-700"
          >
            Job Profile
          </label>
          <div className="mt-1">
            <div className="mt-1">
              <input
                type="text"
                name="profile"
                id="profile"
                value={jobDetails.profile}
                onChange={handleJobDetails}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Software Engineer"
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <div className="mt-1">
            <select
              id="type"
              name="type"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={jobDetails.type}
              onChange={handleJobDetails}
            >
              <option disabled value={""}>
                Please Select
              </option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Temporary</option>
              <option>Contract</option>
              <option>Internship</option>
              <option>Commission Only</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <div className="flex justify-between pr-3">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience
            </label>
            <span className="text-sm text-gray-500">In Years</span>
          </div>
          <div className="mt-1">
            <input
              type="number"
              name="experience"
              id="experience"
              className="shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="5"
              value={jobDetails.experience}
              onChange={handleJobDetails}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="minSalary"
            className="block text-sm font-medium text-gray-700"
          >
            Salary
          </label>
          <div className="flex items-center gap-2 ">
            <div className="w-full mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">₹</span>
              </div>
              <input
                type="number"
                name="minSalary"
                id="minSalary"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0"
                aria-describedby="price-currency"
                value={jobDetails.minSalary}
                onChange={handleJobDetails}
              />
            </div>
            <span className=" font-light">to</span>

            <div className="mt-1 relative rounded-md w-full shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">₹</span>
              </div>
              <input
                type="number"
                name="maxSalary"
                id="maxSalary"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0"
                aria-describedby="price-currency"
                value={jobDetails.maxSalary}
                onChange={handleJobDetails}
              />
            </div>
            <div className="mt-1 w-[80%]">LPA</div>
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

export default JobDetailsForm;
