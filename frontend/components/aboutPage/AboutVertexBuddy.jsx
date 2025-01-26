const AboutVertexBuddy = () => {
  return (
    <div className="w-full bg-[#FEFEFF] p-[1.5rem] md:p-[6rem] text-center z-[40]">
      <div className="lg:max-w-[78rem] 2xl:max-w-[90rem] w-full  mx-auto flex flex-col justify-center items-center gap-6">
        <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]  text-center font-[300]">
          We are <span className="font-[700]"> Vertex Buddy</span>
        </h1>
        <h3 className="text-[1.25rem] lg:text-[1.5rem]  xl:text-[2rem] font-[300]">
          “Vertex Buddy:
          <span className="font-[500] text-darkestGrey">
            Streamlining Talent Management with Precision.
          </span>
          ”
        </h3>
        <p className="text-[1rem] md:text[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] text-[#000000] font-[300]">
          Vertex Buddy is an advanced database management system tailored
          specifically for organizing the data of job seekers. It serves as a
          centralized platform for storing, managing, and accessing crucial
          information related to potential hires. By consolidating all relevant
          information in one accessible location, Vertex Buddy simplifies the
          hiring process for recruiters and hiring managers.
        </p>
      </div>
    </div>
  );
};

export default AboutVertexBuddy;
