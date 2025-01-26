import { MdDownloading } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCandidates } from "../../../../services/operations/candidateAPI";
import { formattedDate } from "../../../../utils/dateFormatter";
import CandidateDetailsPopup from "../../../commom/CandidateDetailsPopup";

const AllCandidatesTable = () => {
  const { token } = useSelector((state) => state.auth);

  const [candidates, setCandidates] = useState([]);
  const [showCandidateDetailsPopup, setShowCandidateDetailsPopup] =
    useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const fetchCandidates = async () => {
    const response = await getAllCandidates(token);

    // console.log(response);

    if (response?.success) {
      setCandidates(response.data);
    }
  };

  const exportToCSV = () => {
    if (!candidates || candidates.length === 0) {
      console.log("No data to export");
      return;
    }

    const csvContent = "data:text/csv;charset=utf-8,";
    const header = Object.keys(candidates[0]).join(",") + "\n";

    const rows = candidates.map((candidate) => {
      const rowValues = Object.values(candidate).map((value) => {
        if (Array.isArray(value)) {
          return `"${value.join(", ")}"`;
        }
        return value;
      });
      return rowValues.join(",");
    });

    const csvData = csvContent + header + rows.join("\n");

    const encodedUri = encodeURI(csvData);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "candidates.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const candidateDetailsPopupHandler = () => {
    setShowCandidateDetailsPopup(!showCandidateDetailsPopup);
  };

  // useEffect(
  //   () => console.log("Show details", showCandidateDetailsPopup),
  //   [showCandidateDetailsPopup]
  // );

  return (
    <div className="flex flex-col gap-6 bg-white w-full mx-auto rounded-2xl py-4 px-6 ">
      <button
        className="self-end border-solid border-2 border-primary-violet rounded-lg px-4 py-2 text-primary-violet cursor-pointer"
        onClick={exportToCSV}
      >
        Export to CSV
      </button>
      <div className="grid grid-cols-[repeat(5,1fr)_0.3fr] place-content-center place-items-center font-semibold opacity-60">
        <div>Name</div>
        <div>Phone</div>
        <div>Email</div>
        <div>Experience</div>
        <div>Designation</div>
      </div>

      {candidates && candidates.length > 0 ? (
        candidates.map((candidate) => (
          <>
            <div
              className="grid grid-cols-[repeat(5,1fr)_0.3fr] place-content-center place-items-center font-medium hover:bg-[#f2f2f2] transition-colors cursor-pointer "
              onClick={() => {
                setSelectedCandidate(candidate);
                candidateDetailsPopupHandler();
              }}
            >
              <div>
                <p className="font-semibold opacity-60">
                  {candidate.firstName} {candidate.lastName}
                </p>
                <p className="opacity-60 text-[0.8rem] font-medium">
                  {formattedDate(candidate?.createdAt)}
                </p>
              </div>
              <div className="font-semibold opacity-60">
                {candidate.phoneNumber}
              </div>
              <div className="font-semibold opacity-60">{candidate.email}</div>
              <div className="font-semibold opacity-60">
                {candidate.totalExperience} Yrs
              </div>
              <div className="font-semibold opacity-60">
                {candidate.currentDesignation
                  ? candidate.currentDesignation
                  : "--"}
              </div>

              <Link
                to={`http://localhost:4000/${candidate?.resume}`}
                target="_blank"
              >
                <MdDownloading className="text-[1.2rem]" />
              </Link>
            </div>
            {/*  Appear On Click */}
            {selectedCandidate && selectedCandidate.id === candidate.id && (
              <div className="flex flex-col w-[96%] mx-auto gap-3 items-center">
                <div className="grid grid-cols-[repeat(5,1fr)] place-content-center place-items-center  w-full">
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">Id</h5>
                    <p className="text-[0.875rem] ">{candidate?.id}</p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">Gender</h5>
                    <p className="text-[0.875rem]">{candidate?.gender}</p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">Date Of Birth</h5>
                    <p className="text-[0.875rem]">{candidate?.dateOfBirth}</p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">
                      ALternate Mobile
                    </h5>
                    <p className="text-[0.875rem]">
                      {candidate?.alternatePhoneNumber}
                    </p>
                  </div>

                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">
                      Current Company
                    </h5>
                    <p className="text-[0.875rem]">
                      {candidate?.currentCompany
                        ? candidate?.currentCompany
                        : "--"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[repeat(5,1fr)] place-content-center place-items-center  w-full">
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">Current CTC</h5>
                    <p className="text-[0.875rem]">{candidate?.currentCTC}</p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">
                      Total Experience
                    </h5>
                    <p className="text-[0.875rem]">
                      {candidate?.totalExperience} yrs
                    </p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">
                      Relevant Experience
                    </h5>
                    <p className="text-[0.875rem]">
                      {candidate?.relevantExperience} yrs
                    </p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">Skills:</h5>
                    <p className="text-[0.875rem]">{candidate?.skills}</p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">
                      Current Location:
                    </h5>
                    <p className="text-[0.875rem]">
                      {candidate?.currentLocation}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[repeat(5,1fr)] place-content-center place-items-center  w-full">
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">
                      Preferred Location:
                    </h5>
                    <p className="text-[0.875rem]">
                      {candidate?.preferredLocation}
                    </p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">
                      Highest Quaification:
                    </h5>
                    <p className="text-[0.875rem]">
                      {candidate?.highestQualification}
                    </p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">
                      Interested Role
                    </h5>
                    <p className="text-[0.875rem]">
                      {candidate?.interestedRole}
                    </p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">Expected CTC</h5>
                    <p className="text-[0.875rem]">{candidate?.expectedCTC}</p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">Holding Offer</h5>
                    <p className="text-[0.875rem]">
                      {candidate?.holdingAnyOffer
                        ? candidate?.holdingAnyOffer
                        : "--"}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[repeat(5,1fr)] place-content-center place-items-center w-full ">
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">Notice Period:</h5>
                    <p className="text-[0.875rem]">
                      {candidate?.noticePeriod ? candidate?.noticePeriod : "--"}
                    </p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">
                      Last Working Day:
                    </h5>
                    <p className="text-[0.875rem]">
                      {candidate?.lastWorkingDay
                        ? candidate?.lastWorkingDay
                        : "--"}
                    </p>
                  </div>
                  <div className="w-full">
                    <h5 className="font-semibold opacity-60">
                      Languages Known
                    </h5>
                    <p className="text-[0.875rem]">
                      {candidate?.languagesKnown}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default AllCandidatesTable;
