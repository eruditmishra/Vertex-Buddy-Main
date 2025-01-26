import Link from "next/link";
import FlipCard from "./FlipCard";

const AllySection = () => {
  return (
    <div className="w-full  bg-dark-violet border-t-4 border-primary-yellow flex  items-center justify-center  py-20">
      <div className="w-9/12 mx-auto flex flex-col md:flex-row items-center justify-between ">
        {/* Left Container */}
        <div className="w-full md:w-[55%] text-white flex flex-col gap-4">
          <h3 className=" text-[2.5rem] md:text-[3rem] font-medium leading-tight">
            We{"'"}re your ally for{" "}
            <span className=" text-primary-yellow"> candidate management </span>
          </h3>
          <p className=" text-[1rem] md:text-[1.25rem] font-medium">
            In a world full of options, we{"'"}re the one to trust
          </p>
          <Link href="https://recruiter.vertexbuddy.com" className="w-fit">
            <button className="px-9 py-5 bg-primary-yellow text-white text-[1rem] md:text-[1.25rem] font-medium w-fit rounded-lg mt-8">
              Sign Up for free
            </button>
          </Link>
        </div>
        {/* Right Container */}
        <div className="w-full md:w-[45%] md:mt-0 mt-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-6 ">
            {/* <div className="rounded-xl w-[15rem] h-[15rem] text-[1.2rem] px-6 font-medium text-center flex items-center justify-center bg-white">
              <p>Find the right talent</p>
            </div> */}
            <FlipCard
              frontText={"Find the right talent"}
              backText={
                "With our AI-powered matching system, we'll help you find the best"
              }
            />
            <FlipCard
              frontText={"Optimize data management"}
              backText={"Manage and track your candidates with ease"}
            />
            <FlipCard
              frontText={"Seamless talent acquisition"}
              backText={
                "We provide a seamless experience for your talent acquisition journey"
              }
            />
            <FlipCard
              frontText={"Get faster results"}
              backText={
                "Fasten up the process with right tools and right people"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllySection;
