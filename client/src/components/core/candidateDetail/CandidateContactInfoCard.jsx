const CandidateContactInfoCard = ({ candidate }) => {
  return (
    <div className="bg-white h-fit flex flex-col px-4 py-4 gap-2 rounded-xl">
      <div className="flex flex-col">
        <h4 className="text-[0.875rem] text-primary-violet font-medium">
          Email:
        </h4>
        <p className=" text-offset-black font-medium">{candidate?.email}</p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-[0.875rem] text-primary-violet font-medium">
          Phone Number:
        </h4>
        <p className=" text-offset-black font-medium">
          {candidate?.phoneNumber}
        </p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-[0.875rem] text-primary-violet font-medium">
          Alternate Mobile:
        </h4>
        <p className=" text-offset-black font-medium">
          {candidate?.alternatePhoneNumber
            ? candidate?.alternatePhoneNumber
            : "--"}
        </p>
      </div>
    </div>
  );
};

export default CandidateContactInfoCard;
