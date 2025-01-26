import { MdOutlineFileDownload } from "react-icons/md";

const CandidateDetailsSection = ({ candidate }) => {
  return (
    <div className="  bg-white flex flex-col gap-3 py-6 px-8 h-fit rounded-xl">
      <div className="grid grid-cols-[repeat(3,32%)] gap-[2%]">
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Profile:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.profile}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Total Experience:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.totalExperience} Yrs
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Relevant Experience:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.relevantExperience} Yrs
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(3,32%)] gap-[2%]">
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Current Company:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.currentCompany}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Current CTC
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.currentCTC} LPA
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Expected CTC
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.expectedCTC} LPA
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(3,32%)] gap-[2%]">
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Highest Qualification:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.highestQualification}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Current Location
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.currentLocation}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Preferred Location:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.preferredLocation}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(3,32%)] gap-[2%]">
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Interested Role:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.interestedRole}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Holding Offer:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.isHoldingOffer ? `${candidate?.offeredCTC} LPA` : "No"}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Notice Period
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.noticePeriod} Days
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(3,32%)] gap-[2%]">
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Last Working Day:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.isOnNoticePeriod ? candidate?.lastWorkingDay : "--"}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Languages Known:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.languagesKnown &&
              candidate?.languagesKnown.length >= 1 &&
              candidate?.languagesKnown.map((language, index) => (
                <span key={index} className="mr-1">
                  {language}
                  {index !== candidate?.languagesKnown.length - 1 && ","}
                </span>
              ))}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Vendor Name:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">--</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetailsSection;
