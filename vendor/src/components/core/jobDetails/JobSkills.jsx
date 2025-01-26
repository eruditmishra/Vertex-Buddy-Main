import React from "react";

const JobSkills = ({ jobDetails }) => {
  return (
    <div className="bg-white mt-4 rounded-lg py-6 px-8">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Skills Required
        </h3>
        <div className="mt-4 flex gap-3 text-sm text-gray-500">
          {jobDetails &&
            jobDetails.skills &&
            jobDetails.skills.length > 0 &&
            jobDetails.skills.map((skill) => (
              <span
                key={skill}
                className=" border border-gray-500 px-2 py-1 rounded-sm"
              >
                {skill}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default JobSkills;
