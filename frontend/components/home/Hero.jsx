import HeroCards from "./HeroCards";
import HeroContent from "./HeroContent";
import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <div className=" flex flex-col md:flex-row  mx-auto w-9/12 min-h-screen calc(100vh - 10vh) items-start pt-28 justify-between">
      <HeroContent />
      <HeroCards />
      {/* <HeroImages /> */}
    </div>
  );
};

export default Hero;
