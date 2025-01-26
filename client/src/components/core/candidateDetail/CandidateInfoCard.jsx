import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

const CandidateInfoCard = ({ candidate }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="bg-white flex flex-col gap-4 h-fit rounded-xl py-10 px-4 relative"
      onMouseLeave={() => setShowDropdown(false)}
    >
      <CiMenuKebab
        className="absolute right-3 cursor-pointer text-[1.2rem] top-4"
        onClick={() => setShowDropdown(!showDropdown)}
      />
      <div className=" flex flex-col gap-1 ">
        <h2 className=" text-[1.8rem] font-medium flex items-center gap-6 ">
          {`${candidate?.firstName} ${
            candidate?.middleName !== null ? candidate?.middleName : ""
          } ${candidate?.lastName !== null ? candidate?.lastName : ""}`}
        </h2>
        <p className=" text-[0.875rem] text-primary-violet font-medium">
          #{candidate?.id}
        </p>
        <p className=" text-[1.1rem] font-medium text-offset-black">
          {candidate?.currentDesignation}
        </p>
      </div>
      {showDropdown && (
        <ul className=" bg-white absolute top-9 right-0 w-fit flex flex-col gap-2 border-solid border-[0.75px]  rounded-xl items-center py-2 px-3">
          <Link
            to={`${
              window.location.pathname.includes("admin")
                ? `/admin/candidates/edit-candidate/${candidate.id}`
                : `/user/candidates/edit-candidate/${candidate.id}`
            } `}
            className="w-full"
          >
            <li className=" cursor-pointer text-[1.1rem] text-center border-b-2 pb-2 w-full ">
              Edit
            </li>
          </Link>
          <a
            href={`${
              process.env.NODE_ENV === "development"
                ? `http://localhost:4000/${candidate?.resume}`
                : `https://api.vertexbuddy.com/${candidate?.resume}`
            }`}
            target="_blank"
            rel="noreferrer"
          >
            <li className=" cursor-pointer text-[1.1rem]">Download CV</li>
          </a>
        </ul>
      )}
    </div>
  );
};

export default CandidateInfoCard;
