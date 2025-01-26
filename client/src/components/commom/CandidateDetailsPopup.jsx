import { MdOutlineFileDownload } from "react-icons/md";

const CandidateDetailsPopup = ({ isOpen, onClose, candidate }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center overflow-auto bg-black bg-opacity-50 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white py-6 px-12 rounded-xl xl:max-w-[60%] lg:max-w-[65%] min-w-[65%] relative">
        <div className="flex flex-col items-center justify-center space-y-3 ">
          <div
            className="absolute right-4 top-3 cursor-pointer"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7093 5.37603C15.7806 5.30485 15.8371 5.22034 15.8757 5.12731C15.9143 5.03428 15.9342 4.93456 15.9343 4.83384C15.9344 4.73312 15.9146 4.63337 15.8761 4.54029C15.8376 4.44721 15.7812 4.36263 15.71 4.29136C15.6388 4.2201 15.5543 4.16355 15.4613 4.12495C15.3682 4.08635 15.2685 4.06645 15.1678 4.06639C15.0671 4.06633 14.9673 4.0861 14.8743 4.12459C14.7812 4.16308 14.6966 4.21952 14.6253 4.2907L10 8.91603L5.376 4.2907C5.23208 4.14677 5.03687 4.06592 4.83333 4.06592C4.62979 4.06592 4.43459 4.14677 4.29067 4.2907C4.14674 4.43462 4.06589 4.62983 4.06589 4.83336C4.06589 5.0369 4.14674 5.23211 4.29067 5.37603L8.916 10L4.29067 14.624C4.2194 14.6953 4.16287 14.7799 4.12431 14.873C4.08574 14.9661 4.06589 15.0659 4.06589 15.1667C4.06589 15.2675 4.08574 15.3673 4.12431 15.4604C4.16287 15.5535 4.2194 15.6381 4.29067 15.7094C4.43459 15.8533 4.62979 15.9341 4.83333 15.9341C4.93412 15.9341 5.03391 15.9143 5.12702 15.8757C5.22013 15.8372 5.30474 15.7806 5.376 15.7094L10 11.084L14.6253 15.7094C14.7693 15.8531 14.9644 15.9338 15.1678 15.9337C15.3712 15.9335 15.5663 15.8526 15.71 15.7087C15.8537 15.5648 15.9344 15.3696 15.9343 15.1662C15.9342 14.9628 15.8533 14.7678 15.7093 14.624L11.084 10L15.7093 5.37603Z"
                fill="#949494"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col  justify-between items-start gap-3 w-full mt-5 self-stretch h-full">
          <div className="grid grid-cols-[1fr_1fr_1.6fr_1fr]  font-semibold  w-full  ">
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Id:
              </h2>
              <p className="font-semibold w-full">#{`${candidate?.id} `}</p>
            </div>
            <div className="flex flex-col items-start w-full ">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Name:
              </h2>
              <p className="font-semibold">
                {`${candidate?.firstName} 
                ${candidate?.middleName ? candidate?.middleName : ""} 
                ${candidate?.lastName ? candidate?.lastName : ""}`}
              </p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Email:
              </h2>
              <p className="font-semibold">{`${candidate?.email}`}</p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Mobile:
              </h2>
              <p className="font-semibold w-full">{`${candidate?.phoneNumber} `}</p>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_1.6fr_1fr]  font-semibold  w-full  ">
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Gender:
              </h2>
              <p className="font-semibold w-full">{`${candidate?.gender} `}</p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full ">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Date Of Birth
              </h2>
              <p className="font-semibold">{`${
                candidate?.dateOfBirth ? candidate?.dateOfBirth : "--"
              }`}</p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Alternate Mobile:
              </h2>
              <p className="font-semibold">{`${
                candidate?.alternatePhoneNumber
                  ? candidate?.alternatePhoneNumber
                  : "--"
              }`}</p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Profile:
              </h2>
              <p className="font-semibold">{`${candidate?.profile}`}</p>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_1.6fr_1fr]  font-semibold  w-full  ">
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Current Company:
              </h2>
              <p className="font-semibold w-full">{`${
                candidate?.currentCompany ? candidate?.currentCompany : "--"
              } `}</p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full ">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Current CTC
              </h2>
              <p className="font-semibold">{`${candidate?.currentCTC}`}</p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full ">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Expected CTC
              </h2>
              <p className="font-semibold">{`${candidate?.expectedCTC}`}</p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Total Experience:
              </h2>
              <p className="font-semibold">
                {`${candidate?.totalExperience}`} Years
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_1.6fr_1fr]  font-semibold  w-full  ">
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Relevant Experience:
              </h2>
              <p className="font-semibold">
                {`${candidate?.relevantExperience}`} yrs
              </p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full  ">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Current Designation
              </h2>
              <p className="font-semibold">{`${candidate?.currentDesignation}`}</p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Highest Qualification:
              </h2>
              <p className="font-semibold">
                {`${candidate?.highestQualification}`}
              </p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full ">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Current Location
              </h2>
              <p className="font-semibold">{`${candidate?.currentLocation}`}</p>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_1.6fr_1fr]  font-semibold  w-full  ">
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Preferred Location:
              </h2>
              <p className="font-semibold">
                {`${candidate?.preferredLocation}`}
              </p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Interested Role:
              </h2>
              <p className="font-semibold w-full">{`${candidate?.interestedRole} `}</p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Holding Offer:
              </h2>
              <p className="font-semibold">{`${
                candidate?.holdingAnyOffer ? candidate?.holdingAnyOffer : "--"
              }`}</p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full ">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Notice Period
              </h2>
              <p className="font-semibold">{`${
                candidate?.noticePeriod ? candidate?.noticePeriod : "--"
              }`}</p>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_1.6fr_1fr]  font-semibold  w-full  ">
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Last Working Day:
              </h2>
              <p className="font-semibold">{`${
                candidate?.lastWorkingDay ? candidate?.lastWorkingDay : "--"
              }`}</p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Languages Known:
              </h2>
              <p className="font-semibold w-full">{`${candidate?.languagesKnown} `}</p>
            </div>
            <div className="flex flex-col w-full self-stretch h-full">
              <h2 className="font-medium text-primary-violet text-[0.875rem]">
                Vendor Name:
              </h2>
              <p className="font-semibold">{`${
                candidate?.vendorName ? candidate?.vendorName : "--"
              }`}</p>
            </div>
            <a
              href={`${
                process.env.NODE_ENV === "development"
                  ? `http://localhost:4000/${candidate?.resume}`
                  : `https://api.vertexbuddy.com/${candidate?.resume}`
              }`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-fit flex items-center gap-3 border-2 border-solid border-primary-violet px-3 py-1 rounded-md  font-medium">
                <MdOutlineFileDownload /> <span> Download CV </span>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-primary-violet mb-4 mt-5"></div>
        <div className="flex flex-col   ">
          <h2 className="font-medium text-primary-violet text-[0.875rem]">
            Skills:
          </h2>
          {candidate?.skills && (
            <div className="flex gap-1 flex-wrap">
              {candidate.skills.split(",").map((skill, index) => (
                <p key={index} className="font-semibold w-fit">
                  {skill.trim()}
                  {index !== candidate.skills.split(",").length - 1 ? "," : ""}
                </p>
              ))}
            </div>
          )}
          {/* <p className="font-semibold w-full">{`${candidate?.skills} `}</p> */}
        </div>
      </div>
    </div>
  );
};

export default CandidateDetailsPopup;
