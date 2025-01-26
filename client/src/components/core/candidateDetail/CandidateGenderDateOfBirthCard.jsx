const CandidateGenderDateOfBirthCard = ({ candidate }) => {
  return (
    <div className="bg-white h-fit flex flex-col px-4 py-3 gap-2 rounded-xl">
      <div className="flex flex-col">
        <h4 className="text-[0.875rem] text-primary-violet font-medium">
          Gender
        </h4>
        <p className=" text-offset-black font-medium">{candidate?.gender}</p>
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
  );
};

export default CandidateGenderDateOfBirthCard;
