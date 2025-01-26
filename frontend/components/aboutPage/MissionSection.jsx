const MissionSection = () => {
  return (
    <div className="w-full  bg-lightGrey   z-[40]   ">
      <div className="lg:max-w-[78rem] 2xl:max-w-[90rem] w-full mx-auto flex flex-col  p-[1.5rem] md:pt-[6rem] md:px-[6rem] md:pb-[7.5rem] ">
        <div className="flex flex-col gap-4 justify-end items-start md:items-end  ">
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] text-[#000000] font-[400]">
            Our mission
          </h2>
          <p className="text-[1rem] lg:text-[1.5rem] xl:text-[1.75rem] md:text-right  text-[#000000] pb-[2.5rem] md:pb-0 font-[300]">
            Empowering organizations with an intelligent web application that
            revolutionizes candidate management by seamlessly matching resumes
            to job descriptions, ensuring optimal skill alignment and fostering
            efficient hiring decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
