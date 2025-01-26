const JobDetailCard = ({ jobDetails }) => {
  return (
    <div className=" bg-white flex justify-between rounded-lg py-6 px-8 mt-4">
      <div className=" ">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Job Title
          </h3>
          <p className="mt-1 text-sm text-gray-500">{jobDetails?.title}</p>
        </div>
        <div className="mt-4">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Location
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {jobDetails?.location?.city}, {jobDetails?.location?.city}
            </p>
          </div>
          <div className="mt-4">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Type
              </h3>
              <p className="mt-1 text-sm text-gray-500">{jobDetails?.type}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Experience
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {jobDetails?.experience} Yrs.
          </p>
        </div>
        <div className="mt-4">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Salary
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              ₹ {jobDetails?.salary} LPA
            </p>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Language
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {jobDetails?.languages?.map((language) => language + ", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailCard;
