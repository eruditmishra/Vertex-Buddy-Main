const Summary = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between w-9/12 mx-auto mt-32">
      <div className="w-full md:w-[48%]">
        <h2 className=" text-[2rem] md:text-[3rem]  font-light leading-tight">
          Key to{" "}
          <span className=" font-medium"> Streamlined Hiring Process </span>{" "}
        </h2>
      </div>
      <div className="w-full md:w-[49%]">
        <p className="  text-offset-black md:text-[1.15rem] text-[1rem]">
          Vertex Buddy is a comprehensive solution designed to enhance
          efficiency, and effectiveness in the hiring process. Its user-friendly
          interface and advanced features make it an indispensable tool for
          recruiters seeking to optimize their talent acquisition efforts.
        </p>
      </div>
    </div>
  );
};

export default Summary;
