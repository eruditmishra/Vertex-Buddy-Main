import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCompanyVendors } from "../../../services/operations/vendorAPI";

const StatsContainer = ({ totalOpenings }) => {
  const [totalVendors, setTotalVendors] = useState("");

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const fetchVendors = async () => {
    console.log(user);
    const response = await getCompanyVendors(user?._id, token);

    if (response?.success) {
      setTotalVendors(response?.data?.length);
    }
  };

  const stats = [
    { name: "Total Vendors", stat: totalVendors },
    { name: "Total Openings", stat: totalOpenings },
  ];

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <dl className=" grid grid-cols-1 gap-5 sm:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.name}
          className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
        >
          <dt className="text-sm font-medium text-gray-500 truncate">
            {item.name}
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            {item.stat}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default StatsContainer;
