const CTASection = () => {
  return (
    <div className=" bg-dark-violet py-16 text-white border-t-4 border-solid border-t-primary-yellow mt-32">
      <div className="w-9/12 mx-auto">
        <div className=" flex flex-col gap-5 items-center justify-center w-[85%] mx-auto">
          <h2 className=" text-[2rem] md:text-[3.5rem] text-center font-medium">
            Simplify your recruitment journey!{" "}
          </h2>
          <a href="https://recruiter.vertexbuddy.com" rel="noreferrer">
            <button className=" bg-primary-yellow text-white  mt-6 px-8 md:px-20 py-5 text-[1.1rem] rounded-md font-medium border-primary-yellow border-solid border-2">
              Sign Up Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
