import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { PlusIcon } from "@heroicons/react/outline";

const JobDescriptionForm = ({
  nextStepHandler,
  prevStepHandler,
  handleJobDetails,
  jobDetails,
}) => {
  const [description, setDescription] = useState(jobDetails.description);
  const [skill, setSkill] = useState("");
  const [skillsArray, setSkillsArray] = useState([...jobDetails.skills]);
  const [language, setLanguage] = useState("");
  const [languagesArray, setLanguagesArray] = useState([
    ...jobDetails.languages,
  ]);

  const handleSkillsAndLanguages = (e) => {
    e.preventDefault();
    if (skillsArray) {
      handleJobDetails("skills", skillsArray);
    }
    if (languagesArray) {
      handleJobDetails("languages", languagesArray);
    }
    nextStepHandler();
  };

  useEffect(() => {
    handleJobDetails({ target: { name: "description", value: description } });
  }, [description]);

  useEffect(() => {
    console.log(skillsArray);
  }, [skillsArray]);

  return (
    <div className="bg-white rounded-lg py-8 px-8">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Job Description
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Describe the job role, responsibilities, and requirements.
        </p>
      </div>
      <ReactQuill
        theme="snow"
        value={description}
        onChange={setDescription}
        className="mt-4"
      />

      <div className=" mt-7">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Skills Required
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Add the skills required for the job role.
          </p>
        </div>
        <div className="mt-3 flex rounded-md shadow-sm">
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <input
              type="skills"
              name="skills"
              id="skills"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-3 sm:text-sm border-gray-300"
              placeholder="MS Excel"
              value={skill}
              onChange={(event) => setSkill(event.target.value)}
            />
          </div>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            onClick={() => {
              setSkillsArray([...skillsArray, skill]);
              setSkill("");
            }}
          >
            <PlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Add Skill</span>
          </button>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        {skillsArray &&
          skillsArray.length >= 1 &&
          skillsArray.map((skill, index) => (
            <p
              className=" border-gray-300 border-solid border-2 px-2 py-1 rounded-md flex gap-2 items-center"
              key={index}
            >
              {" "}
              {skill}
              <span className=" flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </p>
          ))}
      </div>
      <div className=" mt-7">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Languages Required
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Add the languages required for the job role.
          </p>
        </div>
        <div className="mt-3 flex rounded-md shadow-sm">
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <input
              type="language"
              name="language"
              id="language"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-3 sm:text-sm border-gray-300"
              placeholder="English"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            />
          </div>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            onClick={() => {
              setLanguagesArray([...languagesArray, language]);
              setLanguage("");
            }}
          >
            <PlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Add Language</span>
          </button>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        {languagesArray &&
          languagesArray.length >= 1 &&
          languagesArray.map((skill, index) => (
            <p
              className=" border-gray-300 border-solid border-2 px-2 py-1 rounded-md flex gap-2 items-center"
              key={index}
            >
              {" "}
              {skill}
              <span className=" flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </p>
          ))}
      </div>
      <div className="flex items-baseline justify-between">
        <button
          type="button"
          className="inline-flex w-fit place-self-end mt-8 items-center px-6 py-3 border  shadow-sm text-base font-medium rounded-md text-indigo-600 border-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={prevStepHandler}
        >
          <ChevronLeftIcon className="mr-3 -ml-1 h-5 w-5" aria-hidden="true" />
          Previous
        </button>
        <button
          type="button"
          className="inline-flex w-fit place-self-end mt-8 items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleSkillsAndLanguages}
        >
          Next
          <ChevronRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default JobDescriptionForm;
