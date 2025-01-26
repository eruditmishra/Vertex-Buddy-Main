const SelectFromShortlistedCandidates = ({ setShowSelectVendors }) => {
  return (
    <div className=" bg-white rounded-lg px-8 py-6 flex items-center flex-col justify-center gap-5">
      <h3 className=" text-[1.875rem] font-semibold">
        Select from our extenisve candidate pool
      </h3>
      <button className=" bg-indigo-600 px-5 py-2 rounded-md text-white font-medium text-[1.15rem]">
        View Now
      </button>
      <p>or</p>
      <button
        className=" font-medium"
        onClick={() => setShowSelectVendors(true)}
      >
        {" "}
        Proceed to select vendors {">"}
      </button>
    </div>
  );
};

export default SelectFromShortlistedCandidates;
