import img1 from "@/public/assets/what-img-1.jpg";
import img2 from "@/public/assets/what-img-2.jpg";
import img3 from "@/public/assets/what-img-3.jpg";
import Image from "next/image";
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";

const WhatisVertexBuddy = () => {
  return (
    <div className="flex items-center w-9/12 mx-auto justify-between self-stretch pb-40">
      <div className="flex flex-col self-stretch max-w-[48%] relative">
        <div className=" h-[20rem]">
          <Image src={img1} alt="hero image" className=" h-full object-cover" />
        </div>
        <div className=" absolute h-[20rem] w-[17rem] bottom-0 right-0 translate-y-[35%] border-[1.2rem] border-solid border-white">
          <Image src={img2} alt="hero image" className="h-full object-cover" />
        </div>
        <div className=" absolute h-[20rem] w-[17rem] bottom-0 left-6 translate-y-[15%] border-[1.2rem] border-solid border-white ">
          <Image src={img3} alt="hero image" className=" h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col self-stretch max-w-[48%] gap-5">
        <div className="flex flex-col ">
          <h2 className=" font-medium text-primary-violet">
            What Problem it Solves?
          </h2>
          <h3 className=" text-[2.5rem] font-medium leading-[110%]">
            Goodbye to disorganization and inefficiency
          </h3>
        </div>
        <p className=" leading-relaxed">
          {" "}
          Vertex Buddy addresses the common challenge faced by recruiters and HR
          professionals in managing vast amounts of job seeker data effectively.
          Traditional methods of data management often result in
          disorganization, inefficiency, and missed opportunities. Vertex Buddy
          solves this problem by providing a structured and user-friendly
          platform that enables seamless storage, retrieval, and analysis of
          candidate information.
        </p>
        <div className="flex items-center justify-between mt-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center bg-primary-violet text-primary-yellow w-[3.5rem] h-[3.5rem]">
              <AiOutlineFileSearch className=" text-[2rem]" />
            </div>
            <h4 className=" text-[1.3rem] font-medium text-[#333333]">
              Analyze Data Efficiently
            </h4>
            <p>
              Our platform allows you to quickly and accurately analyze
              candidate data to make informed decisions.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center bg-primary-violet text-primary-yellow w-[3.5rem] h-[3.5rem]">
              <IoTimerOutline className=" text-[2rem]" />
            </div>
            <h4 className=" text-[1.3rem] font-medium text-[#333333]">
              Source Talent Quickly
            </h4>
            <h5>
              Minimise the time spent on sourcing candidates and focus on
              building relationships.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisVertexBuddy;
