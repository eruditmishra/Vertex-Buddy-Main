import Image from "next/image";
import React from "react";

const DifferencesCard = ({ title, description, icon }) => {
  return (
    <div className=" bg-[#1b1c1c] text-white flex flex-col gap-4 items-center py-7 px-4 lg:max-w-[20rem] rounded-lg testimonial-shadow opacity-95">
      <div className=" w-[5rem] h-[5rem]">
        <Image src={icon} alt="" className="w-full h-full object-cover" />
      </div>
      <h3 className=" text-[1.4rem] font-[500] text-center capitalize">
        {title}
      </h3>
      <p className=" text-[1rem] text-center">{description}</p>
    </div>
  );
};

export default DifferencesCard;
