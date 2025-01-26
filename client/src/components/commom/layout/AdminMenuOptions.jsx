import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/Logo.png";
import { useEffect } from "react";

const AdminMenuOptions = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null); // Track which menu is open

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

  return (
    <>
      <div className="w-[13rem]">
        <Link to={"/admin"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="flex gap-4 font-medium text-offset-black relative">
        <Link to={"/admin"}>
          <li
            className={`${
              location.pathname === "/admin"
                ? "border-b-primary-violet font-bold"
                : ""
            } hover:border-b-primary-violet border-transparent border-solid border-b-2 transition-colors`}
            onMouseEnter={() => toggleMenu("")}
          >
            Home
          </li>
        </Link>

        {/* Recruiter Menu */}
        <li className="relative">
          <div
            onMouseEnter={() => toggleMenu("recruiters")}
            className={`hover:border-b-primary-violet border-transparent border-solid border-b-2 transition-colors cursor-pointer`}
          >
            Recruiters
          </div>
          {openMenu === "recruiters" && (
            <ul
              className="absolute left-0 top-full mt-2 bg-white shadow-lg py-2"
              onMouseLeave={() => toggleMenu("")}
            >
              <Link to={"/admin/recruiters/add-recruiter"}>
                <li
                  className={`px-4 py-2 whitespace-nowrap hover:bg-gray-100 ${
                    location.pathname === "/admin/recruiters/add-recruiter"
                      ? "font-bold"
                      : ""
                  }`}
                >
                  Add Recruiter
                </li>
              </Link>
              <Link to={"/admin/recruiters/all-recruiters"}>
                <li
                  className={`px-4 py-2 whitespace-nowrap hover:bg-gray-100 ${
                    location.pathname === "/admin/recruiters/all-recruiters"
                      ? "font-bold"
                      : ""
                  }`}
                >
                  All Recruiters
                </li>
              </Link>
            </ul>
          )}
        </li>

        {/* Candidate Menu */}
        <li className="relative">
          <div
            onMouseEnter={() => toggleMenu("candidates")}
            className={`hover:border-b-primary-violet border-transparent border-solid border-b-2 transition-colors cursor-pointer`}
          >
            Candidates
          </div>
          {openMenu === "candidates" && (
            <ul
              className="absolute left-0 top-full mt-2 bg-white shadow-lg py-2"
              onMouseLeave={() => toggleMenu("")}
            >
              <Link to={"/admin/candidates/add-candidate"}>
                <li
                  className={`px-4 py-2 whitespace-nowrap hover:bg-gray-100 ${
                    location.pathname === "/admin/candidates/add-candidate"
                      ? "font-bold"
                      : ""
                  }`}
                >
                  Add Candidate
                </li>
              </Link>
              <Link to={"/admin/candidates/all-candidates"}>
                <li
                  className={`px-4 py-2 whitespace-nowrap hover:bg-gray-100 ${
                    location.pathname === "/admin/candidates/all-candidates"
                      ? "font-bold"
                      : ""
                  }`}
                >
                  All Candidates
                </li>
              </Link>
            </ul>
          )}
        </li>

        {/* Other Links */}
        <Link to={"/admin/companies/all-companies"}>
          <li
            className={`${
              location.pathname === "/admin/companies/all-companies"
                ? "border-b-primary-violet font-bold"
                : ""
            } hover:border-b-primary-violet border-transparent border-solid border-b-2 transition-colors`}
            onMouseEnter={() => toggleMenu("")}
          >
            All Companies
          </li>
        </Link>
        <Link to={"/admin/vendors/all-vendors"}>
          <li
            className={`${
              location.pathname === "/admin/vendors/all-vendors"
                ? "border-b-primary-violet font-bold"
                : ""
            } hover:border-b-primary-violet border-transparent border-solid border-b-2 transition-colors`}
            onMouseEnter={() => toggleMenu("")}
          >
            All Vendors
          </li>
        </Link>
      </ul>
    </>
  );
};

export default AdminMenuOptions;
