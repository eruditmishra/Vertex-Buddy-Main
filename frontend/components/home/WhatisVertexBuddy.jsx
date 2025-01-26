import img1 from "@/public/assets/what-img-1.jpg";
import img2 from "@/public/assets/what-img-2.jpg";
import img3 from "@/public/assets/what-img-3.jpg";
import Image from "next/image";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";

const WhatisVertexBuddy = () => {
  return (
    <div className="flex items-center w-9/12 mx-auto justify-between self-stretch pb-40">
      <div className="flex flex-col self-stretch max-w-[48%] relative">
        <div className=" h-[20rem]">
          <Image src={img1} alt="hero image" className=" h-full object-cover" />
        </div>
        <div className=" absolute h-[20rem] w-[17rem] bottom-0 right-0 translate-y-[60%] border-[1.2rem] border-solid border-white">
          <Image src={img2} alt="hero image" className="h-full object-cover" />
        </div>
        <div className=" absolute h-[20rem] w-[17rem] bottom-0 left-6 translate-y-[40%] border-[1.2rem] border-solid border-white ">
          <Image src={img3} alt="hero image" className=" h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col self-stretch max-w-[48%] gap-5">
        <div className="flex flex-col ">
          <h2 className=" font-medium text-primary-violet">
            What is Vertex Buddy?
          </h2>
          <h3 className=" text-[2.5rem] font-medium leading-[110%]">
            We{"'"}re your ally for candidate management
          </h3>
        </div>
        <p className=" leading-relaxed">
          {" "}
          Vertex Buddy is an advanced database management system tailored
          specifically for organizing the data of job seekers. It serves as a
          centralized platform for storing, managing, and accessing crucial
          information related to potential hires.
        </p>
        <div className="flex items-center justify-between mt-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center bg-primary-violet text-primary-yellow w-[3.5rem] h-[3.5rem]">
              <AiOutlineFileSearch className=" text-[2rem]" />
            </div>
            <h4 className=" text-[1.3rem] font-medium text-[#333333]">
              Get Results Fast
            </h4>
            <h5>
              With us, you can quickly source, evaluate, select, and form a
              team.
            </h5>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center bg-primary-violet text-primary-yellow w-[3.5rem] h-[3.5rem]">
              <FaUserGraduate className=" text-[2rem]" />
            </div>
            <h4 className=" text-[1.3rem] font-medium text-[#333333]">
              Find the right talent
            </h4>
            <h5>
              With the right set of tools, you can easily identify the best fit.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisVertexBuddy;
