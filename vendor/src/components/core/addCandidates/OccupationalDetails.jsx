import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

const OccupationalDetails = ({
  addCandidateHandler,
  prevStepHandler,
  handleFormChange,
  candidate,
}) => {
  return (
    <form
      className="bg-white mt-4 rounded-lg py-6 px-8 flex flex-col gap-4"
      onSubmit={addCandidateHandler}
    >
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="currentCompany"
            className="block text-sm font-medium text-gray-700"
          >
            Current Company
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="currentCompany"
              id="currentCompany"
              value={candidate.currentCompany}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Microsoft"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="currentDesignation"
            className="block text-sm font-medium text-gray-700"
          >
            Current Designation
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="currentDesignation"
              id="currentDesignation"
              value={candidate.currentDesignation}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Software Engineer II"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="currentLocation"
            className="block text-sm font-medium text-gray-700"
          >
            Current Location
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="currentLocation"
              id="currentLocation"
              value={candidate.currentLocation}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Bangalore"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="preferredLocation"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Location
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="preferredLocation"
              id="preferredLocation"
              value={candidate.preferredLocation}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Gurugram"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="currentCTC"
            className="text-sm font-medium text-gray-700 flex justify-between"
          >
            Current CTC
            <span className="font-normal mr-3">In LPA</span>
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="currentCTC"
              id="currentCTC"
              value={candidate.currentCTC}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="10"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="expectedCTC"
            className="text-sm font-medium text-gray-700 flex justify-between"
          >
            Expected CTC
            <span className="font-normal mr-3">In LPA</span>
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="expectedCTC"
              id="expectedCTC"
              value={candidate.expectedCTC}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="14"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="interestedRole"
            className="block text-sm font-medium text-gray-700"
          >
            Interested Role
          </label>
          <div className="mt-1">
            <select
              id="interestedRole"
              name="interestedRole"
              value={candidate.interestedRole}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            >
              <option disabled value="">
                Please Select
              </option>
              <option>Permanent</option>
              <option>Contractual</option>
              <option>Both</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="noticePeriod"
            className="text-sm font-medium text-gray-700 flex justify-between"
          >
            Notice Period
            <span className="font-normal mr-3">In Days</span>
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="noticePeriod"
              id="noticePeriod"
              value={candidate.noticePeriod}
              onChange={handleFormChange}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="30"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="isOnNoticePeriod"
            className="block text-sm font-medium text-gray-700"
          >
            Are you on notice period?
          </label>
          <div className="mt-1 flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isOnNoticePeriod"
                value={true}
                checked={candidate.isOnNoticePeriod === true}
                onChange={handleFormChange}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isOnNoticePeriod"
                value={false}
                checked={candidate.isOnNoticePeriod === false}
                onChange={handleFormChange}
              />
              No
            </label>
          </div>
        </div>

        {candidate.isOnNoticePeriod && (
          <div className="sm:col-span-3">
            <label
              htmlFor="lastWorkingDay"
              className="block text-sm font-medium text-gray-700"
            >
              Last Working Day
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="lastWorkingDay"
                id="lastWorkingDay"
                value={candidate.lastWorkingDay}
                onChange={handleFormChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="hasOfferLetter"
            className="block text-sm font-medium text-gray-700"
          >
            Are you holding any offer letter?
          </label>
          <div className="mt-1 flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isHoldingOffer"
                value={true}
                checked={candidate.isHoldingOffer === true}
                onChange={handleFormChange}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isHoldingOffer"
                value={false}
                checked={candidate.isHoldingOffer === false}
                onChange={handleFormChange}
              />
              No
            </label>
          </div>
        </div>

        {candidate.isHoldingOffer && (
          <div className="sm:col-span-3">
            <label
              htmlFor="offeredCTC"
              className="text-sm font-medium text-gray-700 flex justify-between"
            >
              Offered CTC
              <span className="font-normal mr-3">In LPA</span>
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="offeredCTC"
                id="offeredCTC"
                value={candidate.offeredCTC}
                onChange={handleFormChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="15"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStepHandler}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <ChevronLeftIcon className="h-5 w-5" />
          Previous
        </button>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          Submit
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default OccupationalDetails;
