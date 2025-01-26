const stats = [
  { name: "Current Openings", stat: "12" },
  { name: "Total Openings", stat: "35" },
  { name: "Avg. Click Rate", stat: "24.57%" },
];

const StatsContainer = () => {
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
