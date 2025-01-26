import { useSelector } from "react-redux";
import CompanyContactDetails from "../../components/admin/core/companyDetails.jsx/CompanyContactDetails";
import CompanyDetailsCard from "../../components/admin/core/companyDetails.jsx/companyDetailsCard";
import JobOpeningsTable from "../../components/admin/core/companyDetails.jsx/JobOpeningsTable";
import VendorsTable from "../../components/admin/core/companyDetails.jsx/VendorsTable";
import { useParams } from "react-router-dom";
import { getCompanyDetails } from "../../services/operations/companyAPI";
import { useEffect, useState } from "react";

const CompanyDetails = () => {
  const [company, setCompany] = useState(null);

  const { token } = useSelector((state) => state.auth);

  const params = useParams();
  const { companyId } = params;

  const fetchCompanyDetails = async () => {
    const response = await getCompanyDetails(companyId, token);

    if (response?.success) {
      setCompany(response?.company);
    }
  };

  useEffect(() => {
    fetchCompanyDetails();
  }, []);

  return (
    <div className="w-full pt-9 flex">
      <div className="flex flex-col gap-4 w-[20%] mx-auto">
        <CompanyDetailsCard company={company} />
        <CompanyContactDetails company={company} />
      </div>
      <div className="flex flex-col w-[75%] mx-auto gap-10 ">
        <JobOpeningsTable company={company} />
        <VendorsTable company={company} />
      </div>
    </div>
  );
};

export default CompanyDetails;
