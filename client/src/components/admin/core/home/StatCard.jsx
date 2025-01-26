const StatCard = ({ label, stat }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col self-stretch px-8 py-5 items-center cardShadow gap-2 w-full">
      <h2 className=" capitalize font-medium lg:text-[1.1rem] text-[0.875rem] text-center text-offset-black">
        {label}
      </h2>
      <p className="font-bold lg:text-[1.4rem] text-[1rem] ">{stat}</p>
    </div>
  );
};

export default StatCard;
