const CompanyDetailsCard = ({ company }) => {
  return (
    <div
      className="bg-white flex flex-col gap-4 h-fit rounded-xl py-10 px-4 relative"
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className=" flex flex-col gap-1 ">
        <h2 className=" text-[1.8rem] font-medium flex items-center gap-6 ">
          {company?.companyName}
        </h2>
        <p className=" text-[0.875rem] text-primary-violet font-medium">
          #{company?.companyID}
        </p>
        <p className=" text-[1.1rem] font-medium text-offset-black">
          {company?.name}
        </p>
      </div>
    </div>
  );
};

export default CompanyDetailsCard;
