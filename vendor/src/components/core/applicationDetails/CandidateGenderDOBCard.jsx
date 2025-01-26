import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const CandidateGenderDOBCard = ({ candidate }) => {
  const [showAdditionalDetails, setShowAdditionalDetails] = useState(true);

  return (
    <div className="bg-white h-fit flex flex-col  gap- rounded-xl">
      <div
        className="px-4 py-3 flex items-center justify-between w-full cursor-pointer"
        onClick={() => setShowAdditionalDetails(!showAdditionalDetails)}
      >
        <h3 className=" font-medium">Additional Details</h3>
        <GoChevronDown className=" cursor-pointer text-[1.25rem]" />
      </div>
      {showAdditionalDetails && (
        <div className="">
          <div className="w-full h-[1px] bg-gray-200 "></div>

          <div className=" flex flex-col px-4 pb-3 py-2 gap-2 ">
            <div className="flex flex-col">
              <h4 className="text-[0.875rem] text-primary-violet font-medium">
                Gender
              </h4>
              <p className=" text-offset-black font-medium">
                {candidate?.gender}
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[0.875rem] text-primary-violet font-medium">
                Date Of Birth:
              </h4>
              <p className=" text-offset-black font-medium">
                {candidate?.dateOfBirth}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateGenderDOBCard;
