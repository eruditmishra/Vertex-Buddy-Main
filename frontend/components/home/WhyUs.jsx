"use client";
import { useEffect, useState } from "react";

const WhyUs = () => {
  const [sectionToDisplay, setSectionToDisplay] = useState("Efficiency");

  return (
    <div className=" mt-32 py-32  bg-dark-violet text-white border-t-4 border-solid border-t-primary-yellow">
      <div className="flex flex-col md:gap-0 gap-16 md:flex-row items-start justify-between w-[92%] md:w-9/12 mx-auto">
        <div className="flex flex-col gap-7 w-full md:w-[48%]">
          <div className="flex flex-col gap-1">
            <h2 className="text-primary-yellow">Why use Vertex Buddy?</h2>
            <h3 className=" text-[2rem] md:text-[3rem] leading-tight font-medium">
              Empower your hiring strategy
            </h3>
          </div>
          <a
            href="https://recruiter.vertexbuddy.com"
            rel="noreferrer"
            className="w-fit"
          >
            <button className=" bg-primary-yellow text-white px-5 py-2 text-[1.1rem] rounded-md font-md min-w-[7rem] border-primary-yellow border-solid border-2">
              Sign Up
            </button>
          </a>
        </div>
        <div className=" flex flex-col gap-4 w-full md:w-[48%]">
          <div
            className="flex flex-col gap-2 cursor-pointer"
            onClick={() => setSectionToDisplay("Efficiency")}
          >
            <h4
              className={` text-[1.25rem] md:text-[1.75rem] font-medium pl-2 ${
                sectionToDisplay === "Efficiency"
                  ? " border-l-4 border-solid border-primary-yellow"
                  : " opacity-60"
              } `}
            >
              Efficiency
            </h4>
            <p
              className={`pl-3 ${
                sectionToDisplay === "Efficiency" ? "" : "hidden"
              }`}
            >
              Vertex Buddy streamlines the process of managing job seeker data,
              saving time and effort for recruiters
            </p>
          </div>
          <div
            className="flex flex-col gap-2 cursor-pointer"
            onClick={() => setSectionToDisplay("Organization")}
          >
            <h3
              className={` text-[1.25rem] md:text-[1.75rem] font-medium pl-2 ${
                sectionToDisplay === "Organization"
                  ? " border-l-4 border-solid border-primary-yellow"
                  : " opacity-60"
              } `}
            >
              Organization
            </h3>
            <p
              className={`pl-3 ${
                sectionToDisplay === "Organization" ? "" : "hidden"
              }`}
            >
              It provides a centralized repository for storing and accessing
              candidate information, reducing the risk of data fragmentation.
            </p>
          </div>
          <div
            className="flex flex-col gap-2 cursor-pointer"
            onClick={() => setSectionToDisplay("Decision")}
          >
            <h3
              className={` text-[1.25rem] md:text-[1.75rem] font-medium pl-2 ${
                sectionToDisplay === "Decision"
                  ? " border-l-4 border-solid border-primary-yellow"
                  : " opacity-60"
              } `}
            >
              Enhanced Decision Making
            </h3>
            <p
              className={`pl-3 ${
                sectionToDisplay === "Decision" ? "" : "hidden"
              }`}
            >
              By offering insights and analytics tools, Vertex Buddy empowers
              recruiters to make informed hiring decisions.
            </p>
          </div>
          <div
            className="flex flex-col gap-2 cursor-pointer"
            onClick={() => setSectionToDisplay("Collaboration")}
          >
            <h3
              className={` text-[1.25rem] md:text-[1.75rem] font-medium pl-2 ${
                sectionToDisplay === "Collaboration"
                  ? " border-l-4 border-solid border-primary-yellow"
                  : " opacity-60"
              } `}
            >
              Collaboration
            </h3>
            <p
              className={`pl-3 ${
                sectionToDisplay === "Collaboration" ? "" : "hidden"
              }`}
            >
              Vertex Buddy facilitates collaboration among team members,
              enabling seamless communication and coordination throughout the
              hiring process.
            </p>
          </div>
          <div
            className="flex flex-col gap-2 cursor-pointer"
            onClick={() => setSectionToDisplay("Scalability")}
          >
            <h3
              className={` text-[1.25rem] md:text-[1.75rem] font-medium pl-2 ${
                sectionToDisplay === "Scalability"
                  ? " border-l-4 border-solid border-primary-yellow"
                  : " opacity-60"
              } `}
            >
              Scalability
            </h3>
            <p
              className={`pl-3 ${
                sectionToDisplay === "Scalability" ? "" : "hidden"
              }`}
            >
              With its scalable architecture, Vertex Buddy can accommodate the
              needs of both small businesses and large enterprises, adapting to
              growth and evolving requirements.
            </p>
          </div>
          <div
            className="flex flex-col gap-2 cursor-pointer"
            onClick={() => setSectionToDisplay("Compliance")}
          >
            <h3
              className={` text-[1.25rem] md:text-[1.75rem] font-medium pl-2 ${
                sectionToDisplay === "Compliance"
                  ? " border-l-4 border-solid border-primary-yellow"
                  : " opacity-60"
              } `}
            >
              Compliance
            </h3>
            <p
              className={`pl-3 ${
                sectionToDisplay === "Compliance" ? "" : "hidden"
              }`}
            >
              Vertex Buddy ensures compliance with data protection regulations,
              safeguarding sensitive candidate information and mitigating legal
              risks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
