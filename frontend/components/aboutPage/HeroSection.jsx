import StatCard from "./StatCard";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] about-hero pt-28 pb-20 ">
      <div className="flex flex-col items-center gap-3">
        <h1 className=" text-[1.5rem] tracking-[0.4rem] font-medium text-offset-black">
          ABOUT
        </h1>
        <h2 className=" text-[2.5rem] md:text-[4.25rem] text-center font-semibold leading-[100%] text-primary-violet">
          On a mission to make <br />{" "}
          <span className=" text-primary-yellow"> hiring effortless </span>
        </h2>
      </div>
      <div className=" flex md:flex-row flex-col justify-between gap-5 mt-20">
        <StatCard title="Companies" stat="1000+" />
        <StatCard title="Jobs" stat="5000+" />
        <StatCard title="Candidates" stat="10000+" />
      </div>
    </section>
  );
};

export default HeroSection;
