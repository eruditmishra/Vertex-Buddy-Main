import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/Logo.png";

const RecruiterMenuOptions = () => {
  const location = useLocation();
  return (
    <>
      <div className="w-[13rem]">
        <Link to={"/user"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="flex gap-4 font-medium text-offset-black">
        <Link to={"/user"}>
          <li
            className={`${
              location.pathname === "/user"
                ? "border-b-primary-violet font-bold"
                : ""
            } hover:border-b-primary-violet border-transparent border-solid border-b-2   transition-colors`}
          >
            Home
          </li>
        </Link>
        <Link to={"/user/candidates/add-candidate"}>
          <li
            className={`${
              location.pathname === "/user/candidates/add-candidate"
                ? "border-b-primary-violet font-bold"
                : ""
            } hover:border-b-primary-violet border-transparent border-solid border-b-2   transition-colors`}
          >
            Add Candidate
          </li>
        </Link>
        <Link to={"/user/candidates/all-candidates"}>
          <li
            className={`${
              location.pathname === "/user/candidates/all-candidates"
                ? "border-b-primary-violet font-bold"
                : ""
            } hover:border-b-primary-violet border-transparent border-solid border-b-2   transition-colors`}
          >
            All Candidates
          </li>
        </Link>
      </ul>
    </>
  );
};

export default RecruiterMenuOptions;
