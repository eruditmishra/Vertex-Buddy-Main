import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const HeroSection = () => {
  return (
    <section className="flex md:flex-row flex-col  justify-center pt-24 min-h-[85vh] w-[80%] mx-auto gap-11 md:gap-0">
      <LeftSection />
      <RightSection />
    </section>
  );
};

export default HeroSection;
