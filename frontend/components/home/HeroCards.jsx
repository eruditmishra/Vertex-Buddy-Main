import heroImg from "@/public/assets/hero.svg";
import Image from "next/image";

const HeroCards = () => {
  return (
    <div className="hidden md:block md:w-[45%] items-start justify-center">
      <div>
        <Image src={heroImg} alt="hero" />
      </div>
    </div>
  );
};

export default HeroCards;
