import React from "react";

const StatCard = ({ title, stat }) => {
  return (
    <div
      className="bg-white flex flex-col justify-center items-center px-10 py-10 rounded-xl"
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
    >
      <p className=" text-[1.75rem] md:text-[2.5rem] font-semibold text-center">
        {stat}
      </p>
      <h3 className=" text-center text-offset-black text-[1.25rem]">{title}</h3>
    </div>
  );
};

export default StatCard;
