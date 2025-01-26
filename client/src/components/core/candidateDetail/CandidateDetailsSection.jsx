import { MdOutlineFileDownload } from "react-icons/md";

const CandidateDetailsSection = ({ candidate }) => {
  return (
    <div className=" w-[73%] bg-white flex flex-col gap-8 py-6 px-8 self-stretch">
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
            {candidate?.totalExperience} Years
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Relevant Experience:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.relevantExperience} Years
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
            {candidate?.currentCTC}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Expected CTC
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.expectedCTC}
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
            {candidate?.holdingAnyOffer ? candidate?.holdingAnyOffer : "--"}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Notice Period
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.noticePeriod ? candidate?.noticePeriod : "--"}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(3,32%)] gap-[2%]">
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Last Working Day:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.lastWorkingDay ? candidate?.lastWorkingDay : "--"}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Languages Known:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.languagesKnown}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] text-primary-violet font-medium">
            Vendor Name:
          </h4>
          <p className=" text-offset-black font-medium text-[1.1rem]">
            {candidate?.vendorName ? candidate?.vendorName : "--"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetailsSection;
