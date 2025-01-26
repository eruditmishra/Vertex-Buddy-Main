import image from "@/public/assets/purpose-img.webp";
import Image from "next/image";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";

const WhatItDoes = () => {
  return (
    <div className=" w-full  flex justify-between ">
      <div className=" max-w-[48%] bg-dark-violet h-fit ">
        <div className="flex flex-col gap-6 text-white w-9/12 mx-auto py-32">
          <div className="flex flex-col ">
            <h2 className=" font-medium text-primary-yellow">What it does?</h2>
            <h3 className=" text-[2.5rem] font-medium leading-[110%]">
              Streamline your hiring process
            </h3>
          </div>
          <p className=" leading-relaxed">
            {" "}
            The primary purpose of Vertex Buddy is to streamline the process of
            managing job seeker data for hiring purposes. It offers a
            comprehensive suite of tools and features designed to enhance
            efficiency and effectiveness in talent acquisition. By consolidating
            all relevant information in one accessible location, Vertex Buddy
            simplifies the hiring process for recruiters and hiring managers.
          </p>
          <div className="flex items-center justify-between mt-6">
            <div className="flex flex-col gap-2 w-[48%]">
              <div className="flex items-center justify-center bg-primary-violet text-primary-yellow w-[3.5rem] h-[3.5rem]">
                <AiOutlineFileSearch className=" text-[2rem]" />
              </div>
              <h4 className=" text-[1.3rem] font-medium text-white">
                Optimize data management
              </h4>
              <p className="opacity-80">
                With us, you can easily organize and access candidate{"'"}s data
                as needed.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-[48%]">
              <div className="flex items-center justify-center bg-primary-violet text-primary-yellow w-[3.5rem] h-[3.5rem]">
                <FaUserGraduate className=" text-[2rem]" />
              </div>
              <h4 className=" text-[1.3rem] font-medium text-white">
                Seamless talent acquisition
              </h4>
              <p className="opacity-80">
                Our platform is designed to help you find the right talent for
                your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50rem]">
        <Image src={image} alt="hero image" className="h-full object-cover" />
      </div>
    </div>
  );
};

export default WhatItDoes;
