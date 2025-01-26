import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCandidates } from "../../services/operations/candidateAPI";
import { formattedDate } from "../../utils/dateFormatter";
import { IoIosSearch } from "react-icons/io";
import CandidateDetailsPopup from "../../components/commom/CandidateDetailsPopup";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AllCandidates = () => {
  const { token } = useSelector((state) => state.auth);
  const [searchQuery, setSearchQuery] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showCandidateDetailsPopup, setShowCandidateDetailsPopup] =
    useState(false);

  const [experienceFilter, setExperienceFilter] = useState("");
  const [noticePeriodFilter, setNoticePeriodFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [entryPerPage] = useState(25); // Adjust the number of entries per page as needed
  const [candidatesToDisplay, setCandidatesToDisplay] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCandidates();
  }, [token]);

  useEffect(() => {
    handleFiltering();
  }, [searchQuery, experienceFilter, noticePeriodFilter, candidates]);

  useEffect(() => {
    paginationHandler(currentPage);
  }, [filteredCandidates, currentPage, entryPerPage]);

  const fetchCandidates = async () => {
    try {
      const response = await getAllCandidates(token);
      if (response?.success) {
        setCandidates(response.data);
        setFilteredCandidates(response.data); // Initial load sets filteredCandidates
      }
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  const handleFiltering = () => {
    let filtered = candidates;

    // Apply search filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((candidate) =>
        Object.values(candidate).some(
          (value) =>
            typeof value === "string" && value.toLowerCase().includes(query)
        )
      );
    }

    // Apply experience filter
    if (experienceFilter) {
      const [minExp, maxExp] = experienceFilter.split("-");
      filtered = filtered.filter((candidate) => {
        const exp = parseInt(candidate.totalExperience);
        if (maxExp === "") {
          return exp >= parseInt(minExp);
        } else {
          return exp >= parseInt(minExp) && exp <= parseInt(maxExp);
        }
      });
    }

    // Apply notice period filter
    if (noticePeriodFilter) {
      const [minNotice, maxNotice] = noticePeriodFilter.split("-");
      filtered = filtered.filter((candidate) => {
        const notice = parseInt(candidate.noticePeriod);
        if (minNotice.toLowerCase() === "immediate") {
          return (
            candidate.noticePeriod === null ||
            candidate.noticePeriod.toLowerCase() === "immediate" ||
            candidate.noticePeriod.toLowerCase() === "0"
          );
        } else if (maxNotice === "") {
          return notice > parseInt(minNotice);
        } else {
          return notice >= parseInt(minNotice) && notice <= parseInt(maxNotice);
        }
      });
    }

    setFilteredCandidates(filtered);
    setTotalPages(Math.ceil(filtered.length / entryPerPage));
  };

  const paginationHandler = (page) => {
    const startIndex = (page - 1) * entryPerPage;
    const endIndex = page * entryPerPage;
    const paginatedCandidates = filteredCandidates.slice(startIndex, endIndex);
    setCurrentPage(page);
    setCandidatesToDisplay(paginatedCandidates);
  };

  const handlePageChange = (page) => {
    paginationHandler(page);
  };

  const candidateDetailsPopupHandler = () => {
    setShowCandidateDetailsPopup(!showCandidateDetailsPopup);
  };

  const handleExperienceFilterChange = (e) => {
    setExperienceFilter(e.target.value);
  };

  const handleNoticePeriodFilterChange = (e) => {
    setNoticePeriodFilter(e.target.value);
  };

  const exportToCSV = () => {
    const candidatesToExport = filteredCandidates;

    if (!candidatesToExport || candidatesToExport.length === 0) {
      console.log("No data to export");
      return;
    }

    const csvContent = "data:text/csv;charset=utf-8,";
    const header = Object.keys(candidatesToExport[0]).join(",") + "\n";

    const rows = candidatesToExport.map((candidate) => {
      const rowValues = Object.values(candidate).map((value) =>
        typeof value === "string" ? `"${value}"` : value
      );
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

  return (
    <div className="my-6 w-[90%] mx-auto flex flex-col gap-4">
      <div className="font-bold text-[2rem]">All Candidates</div>
      <div className="relative w-full flex items-center justify-between ">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="bg-white py-3 pl-11"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className=" flex items-center justify-center gap-3">
          <div className="bg-white flex items-center justify-around  px-3 py-2 gap-2 rounded-md ">
            <select
              value={experienceFilter}
              onChange={handleExperienceFilterChange}
              className="bg-white py-3 pl-3 pr-10 rounded-md"
            >
              <option value="">Filter by Experience</option>
              <option value="0-2">0-2 Years</option>
              <option value="2-4">2-4 Years</option>
              <option value="5-7">5-7 Years</option>
              <option value="7-9">7-9 Years</option>
              <option value="9-">More than 9 Years</option>
            </select>
          </div>
          <div className="bg-white flex items-center justify-around  px-3 py-2 gap-2 rounded-md ">
            <select
              className="bg-white py-3 pl-3 pr-10 rounded-md"
              value={noticePeriodFilter}
              onChange={handleNoticePeriodFilterChange}
            >
              <option value="">Filter by Notice Period</option>
              <option value="Immediate">Immediate</option>
              <option value="1-15">1-15 days</option>
              <option value="16-30">16-30 days</option>
              <option value="31-45">31-45 days</option>
              <option value="46-60">46-60 days</option>
              <option value="60-">More than 60 days</option>
            </select>
          </div>
          <IoIosSearch className="absolute left-3 top-[50%] translate-y-[-50%] rounded-md opacity-60 font-bold text-[1.2rem]" />
        </div>
      </div>
      <div className="flex flex-col gap-6 bg-white w-full mx-auto rounded-2xl py-4 px-6 mb-8">
        <button
          className="self-end border-solid border-2 border-primary-violet rounded-lg px-4 py-2 text-primary-violet cursor-pointer"
          onClick={exportToCSV}
        >
          Export to CSV
        </button>
        <div className="grid grid-cols-[1fr_0.8fr_1.4fr_1fr_1fr_0.3fr]  font-semibold  text-primary-violet border-b-2 border-b-primary-yellow border-solid pb-2 ">
          <div>Name</div>
          <div>Phone</div>
          <div>Email</div>
          <div>Experience</div>
          <div>Profile</div>
        </div>

        {candidatesToDisplay.map((candidate) => (
          <div
            key={candidate._id}
            className="grid grid-cols-[1fr_0.8fr_1.4fr_1fr_1fr_0.3fr]  font-medium hover:bg-[#f0ac4d1c] transition-colors cursor-pointer "
            onClick={() => {
              setSelectedCandidate(candidate);
              navigate(`/admin/candidates/candidate/${candidate.id}`);
            }}
          >
            <div>
              <p className="font-semibold ">
                {candidate.firstName} {candidate.middleName}{" "}
                {candidate.lastName}
              </p>
              <p className=" text-[0.8rem] font-medium opacity-60 ">
                {formattedDate(candidate.createdAt)}
              </p>
            </div>
            <div className="font-semibold ">{candidate.phoneNumber}</div>
            <div className="font-semibold ">{candidate.email}</div>
            <div className="font-semibold ">
              {candidate.totalExperience} Yrs
            </div>
            <div className="font-semibold ">{candidate.profile}</div>
          </div>
        ))}

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-4 gap-5">
            {Array.from({ length: totalPages }, (_, index) => {
              if (
                index === 0 ||
                index === totalPages - 1 ||
                (index >= currentPage - 2 && index <= currentPage + 2)
              ) {
                return (
                  <button
                    key={index}
                    className={`text-lg py-1 px-3 rounded-md ${
                      currentPage === index + 1
                        ? "bg-primary-violet text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                );
              } else if (
                (index === currentPage - 3 && currentPage > 4) ||
                (index === currentPage + 3 && currentPage < totalPages - 3)
              ) {
                return <span key={index}>...</span>;
              } else {
                return null;
              }
            })}
          </div>
        )}
      </div>
      <CandidateDetailsPopup
        isOpen={showCandidateDetailsPopup}
        onClose={() => setShowCandidateDetailsPopup(false)}
        candidate={selectedCandidate}
      />
      <Toaster />
    </div>
  );
};

export default AllCandidates;
