import { MdDownloading } from "react-icons/md";
import { useSelector } from "react-redux";
import { getMyCandidatesData } from "../../services/operations/candidateAPI";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import CandidateDetailsPopup from "./CandidateDetailsPopup";

const CandidateDetailsTable = () => {
  const { token } = useSelector((state) => state.auth);

  const [searchQuery, setSearchQuery] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showCandidateDetailsPopup, setShowCandidateDetailsPopup] =
    useState(false);

  const [experienceFilter, setExperienceFilter] = useState("");
  const [noticePeriodFilter, setNoticePeriodFilter] = useState("");

  const fetchMyCandidates = async () => {
    const response = await getMyCandidatesData(token);
    if (response?.success) {
      setCandidates(response.data);
    }
    // console.log("response \n", response);
  };

  useEffect(() => fetchMyCandidates, [token]);

  const exportToCSV = () => {
    if (!candidates || candidates.length === 0) {
      // console.log("No data to export");
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

  // Filter candidates based on search query
  const filteredCandidates = candidates.filter((candidate) => {
    const fullName =
      `${candidate.firstName} ${candidate.lastName}`.toLowerCase();
    const profile = candidate.profile.toLowerCase();
    const companyName = candidate.currentCompany?.toLowerCase() || ""; // Using optional chaining and defaulting to an empty string if companyName is null
    const vendorName = candidate.vendorName?.toLowerCase() || ""; // Using optional chaining and defaulting to an empty string if vendorName is null

    return (
      fullName.includes(searchQuery.toLowerCase()) ||
      profile.includes(searchQuery.toLowerCase()) ||
      companyName.includes(searchQuery.toLowerCase()) ||
      vendorName.includes(searchQuery.toLowerCase())
    );
  });

  // Filter candidates based on experience range
  const filterCandidatesByExperience = (candidates) => {
    if (!experienceFilter) {
      return candidates;
    }

    const [minExp, maxExp] = experienceFilter.split("-");

    if (maxExp === "") {
      return candidates.filter(
        (candidate) => candidate.totalExperience >= parseInt(minExp)
      );
    } else {
      return candidates.filter(
        (candidate) =>
          candidate.totalExperience >= parseInt(minExp) &&
          candidate.totalExperience <= parseInt(maxExp)
      );
    }
  };

  // Filter candidates based on notice period
  const filterCandidatesByNoticePeriod = (candidates) => {
    if (!noticePeriodFilter) {
      return candidates;
    }

    const [minNotice, maxNotice] = noticePeriodFilter.split("-");

    return candidates.filter(
      (candidate) =>
        candidate.noticePeriod >= parseInt(minNotice) &&
        (maxNotice === "" || candidate.noticePeriod <= parseInt(maxNotice))
    );
  };

  const handleExperienceFilterChange = (e) => {
    setExperienceFilter(e.target.value);
  };

  const handleNoticePeriodFilterChange = (e) => {
    setNoticePeriodFilter(e.target.value);
  };

  return (
    <div className="flex flex-col gap-6 bg-white w-full mx-auto rounded-2xl py-4 px-6 ">
      <button
        className="self-end border-solid border-2 border-primary-violet rounded-lg px-4 py-2 text-primary-violet cursor-pointer"
        onClick={exportToCSV}
      >
        Export to CSV
      </button>
      <div className="grid grid-cols-[repeat(5,1fr)_0.3fr] place-content-center place-items-center font-semibold  text-primary-violet border-b-2 border-b-primary-yellow border-solid pb-2">
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
              className="grid grid-cols-[repeat(5,1fr)_0.3fr] place-content-center place-items-center font-medium hover:bg-[#f0ac4d1c] transition-colors cursor-pointer "
              onClick={() => {
                // console.log(candidate);
                setSelectedCandidate(candidate);
                candidateDetailsPopupHandler();
              }}
            >
              <div>
                <p className="font-semibold ">
                  {candidate.firstName} {candidate.lastName}
                </p>
                <p className="opacity-60 text-[0.8rem] font-medium">
                  15-01-2024
                </p>
              </div>
              <div className="font-semibold ">{candidate.phoneNumber}</div>
              <div className="font-semibold ">{candidate.email}</div>
              <div className="font-semibold ">
                {candidate.totalExperience} Yrs
              </div>
              <div className="font-semibold ">
                {candidate.currentDesignation
                  ? candidate.currentDesignation
                  : "--"}
              </div>

              <Link to={`http://localhost:4000/${candidate?.resume}`}>
                <MdDownloading className="text-[1.2rem]" />
              </Link>
            </div>
          </>
        ))
      ) : (
        <></>
      )}

      <div className="w-full h-full relative z-0">
        <div
          style={{
            backgroundColor: " rgba(255, 255, 255, 0.5)",
            filter: "blur(5px)",
          }}
        >
          <div className="grid grid-cols-[repeat(5,1fr)_0.3fr] place-content-center place-items-center font-medium hover:bg-[#f2f2f2] transition-colors cursor-pointer ">
            <div>
              <p className="font-semibold opacity-60">Sahil Yadav</p>
              <p className="opacity-60 text-[0.8rem] font-medium">15-01-2024</p>
            </div>
            <div className="font-semibold opacity-60">+91 9654758321</div>
            <div className="font-semibold opacity-60">sahil@gmail.com</div>
            <div className="font-semibold opacity-60">4 Yrs</div>
            <div className="font-semibold opacity-60">Web Developer</div>
            <MdDownloading className="text-[1.2rem]" />
          </div>
          <div className="grid grid-cols-[repeat(5,1fr)_0.3fr] place-content-center place-items-center font-medium hover:bg-[#f2f2f2] transition-colors cursor-pointer ">
            <div>
              <p className="font-semibold opacity-60">Sahil Yadav</p>
              <p className="opacity-60 text-[0.8rem] font-medium">15-01-2024</p>
            </div>
            <div className="font-semibold opacity-60">+91 9654758321</div>
            <div className="font-semibold opacity-60">sahil@gmail.com</div>
            <div className="font-semibold opacity-60">4 Yrs</div>
            <div className="font-semibold opacity-60">Web Developer</div>
            <MdDownloading className="text-[1.2rem]" />
          </div>
          <div className="grid grid-cols-[repeat(5,1fr)_0.3fr] place-content-center place-items-center font-medium hover:bg-[#f2f2f2] transition-colors cursor-pointer ">
            <div>
              <p className="font-semibold opacity-60">Sahil Yadav</p>
              <p className="opacity-60 text-[0.8rem] font-medium">15-01-2024</p>
            </div>
            <div className="font-semibold opacity-60">+91 9654758321</div>
            <div className="font-semibold opacity-60">sahil@gmail.com</div>
            <div className="font-semibold opacity-60">4 Yrs</div>
            <div className="font-semibold opacity-60">Web Developer</div>
            <MdDownloading className="text-[1.2rem]" />
          </div>
        </div>
        <div className=" w-full h-full flex flex-col gap-3 items-center justify-center absolute top-0 left-0 z-100">
          <p className="font-medium"> Get Access to 2000+ candidates</p>
          <div className="w-fit">
            <CTAButton title={"Contact Us Now"} />
          </div>
        </div>
      </div>
      <CandidateDetailsPopup
        isOpen={showCandidateDetailsPopup}
        onClose={candidateDetailsPopupHandler}
        candidate={selectedCandidate}
      />
    </div>
  );
};

export default CandidateDetailsTable;
