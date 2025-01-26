const RoundsBanner = () => {
  return (
    <div className="w-full bg-white border border-indigo-600 rounded-lg py-6 px-8 flex justify-between items-center">
      <p>You haven't added interview rounds yet</p>
      <button className=" px-6 bg-indigo-600 rounded-lg py-2 text-white font-medium">
        Add Now
      </button>
    </div>
  );
};

export default RoundsBanner;
