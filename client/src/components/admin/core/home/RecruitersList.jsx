import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import CTAButton from "../../../commom/CTAButton";
import { useSelector } from "react-redux";
import {
  deleteRecruiter,
  getAllRecruiters,
} from "../../../../services/operations/recruiterAPI";
import { useEffect } from "react";

const RecruitersList = ({
  setSelectedRecruiter,
  selectedRecruiter,
  confirmDeletion,
  setDisplayRecruiterModal,
}) => {
  const [recruiters, setRecruiters] = useState([]);
  const [showKebabMenus, setShowKebabMenus] = useState(Array(5).fill(false)); // Assuming you have 5 kebab menus

  const toggleKebabMenu = (index) => {
    setShowKebabMenus((prevState) =>
      prevState.map((value, i) => (i === index ? !value : false))
    );
  };

  const { token } = useSelector((state) => state.auth);

  const fetchRecruiters = async () => {
    const response = await getAllRecruiters(token);

    // console.log(response);

    if (response?.success) {
      setRecruiters(response?.data);
    }
  };

  const deleteRecruiterHandler = async () => {
    const response = await deleteRecruiter(token, selectedRecruiter._id);

    if (response?.success) {
      setRecruiters(response?.data);
      setDisplayRecruiterModal(false);
    }
  };

  useEffect(() => {
    fetchRecruiters();
  }, [token]);

  useEffect(() => {
    selectedRecruiter && confirmDeletion && deleteRecruiterHandler();
  }, [confirmDeletion, selectedRecruiter]);

  // const convertDataToCSV = (obj) => {
  //   const csvRows = [];
  //   // Header
  //   const headers = Object.keys(obj);
  //   csvRows.push(headers.join(","));

  // };

  return (
    <div
      className="flex flex-col bg-white w-[100%] rounded-2xl "
      onMouseLeave={toggleKebabMenu}
    >
      <div className="flex justify-between px-8 py-4 items-center">
        <h2 className=" text-[1.5rem] font-bold">All Recruiters</h2>
        <Link to={"/admin/recruiters/add-recruiter"}>
          <CTAButton title={"+ Add New"} />
        </Link>
      </div>
      <div className=" grid grid-cols-[0.5fr_repeat(3,1fr)_0.5fr]  place-items-center justify-items-center text-[0.83431rem] text-superLightFont font-[500] py-[6.2px]">
        <h3>S.No</h3>
        <h3>Recruiter Name</h3>
        <h3>Email</h3>
        <h3>Total Candidates</h3>
      </div>
      {recruiters &&
        recruiters.length !== 0 &&
        recruiters.map((recruiter, index) => (
          <div key={index}>
            <div className=" grid grid-cols-[0.5fr_repeat(3,1fr)_0.5fr] border-t-[0.05963rem] border-[#EEE] justify-items-center place-items-center py-[6.2px] text-greyFont text-[0.83431rem] font-[600] hover:bg-[#f2f2f2]">
              <p>{index + 1}</p>
              <p>
                {recruiter.firstName} {recruiter?.middleName}{" "}
                {recruiter?.lastName}
              </p>
              <p>{recruiter?.email}</p>
              <p>{recruiter.candidates.length}</p>
              <div className="relative font-normal ">
                <CiMenuKebab
                  className="cursor-pointer"
                  onClick={() => toggleKebabMenu(index)}
                />

                <div
                  className={`absolute bg-white cursor-pointer px-3 py-2 ${
                    showKebabMenus[index] ? "block" : "hidden"
                  }`}
                >
                  <p
                    className="text-red-600 font-semibold"
                    onClick={() => setSelectedRecruiter(recruiter)}
                  >
                    Delete
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecruitersList;
