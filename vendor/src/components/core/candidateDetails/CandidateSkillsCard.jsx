const candidate = {
  skills: "Hardworking, analytical skills ,Program management",
};

const CandidateSkillsCard = () => {
  return (
    <div className="bg-white h-fit flex flex-col px-4 py-3 gap-2 rounded-xl">
      <h2 className="text-[0.875rem] text-primary-violet font-medium">
        Skills:
      </h2>
      <div className="flex gap-2 flex-wrap">
        {candidate &&
          candidate.skills &&
          candidate.skills.length >= 1 &&
          candidate.skills.split(",").map((skill, index) => (
            <p
              key={index}
              className=" border-solid border-[1px] border-gray-300 px-1 py-1 text-[0.875rem] font-medium"
            >
              {skill}
            </p>
          ))}
      </div>
    </div>
  );
};

export default CandidateSkillsCard;
