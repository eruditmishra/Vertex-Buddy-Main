import illustration from "../../assets/illustration.png";

const RightSection = () => {
  return (
    <div className="relative hidden md:block w-[50%] self-stretch bg-primary-violet">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] rounded-full h-[30rem] w-[30rem] bg-[#6955d675]"></div>
      <img
        src={illustration}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] w-[35rem]"
        alt=""
      />
      <div className="absolute bottom-[9%] text-white left-[50%] translate-x-[-50%] text-center">
        <h3 className="  text-[1.3rem] font-semibold">
          The new way of managing Candidates!
        </h3>
        <p className="opacity-70">Everything you need to manage candiates.</p>
      </div>
    </div>
  );
};

export default RightSection;
