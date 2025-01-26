import img1 from "@/public/assets/hero-img-1.jpg";
import img2 from "@/public/assets/hero-img-2.jpg";
import img3 from "@/public/assets/hero-img-3.jpg";
import Image from "next/image";

const HeroImages = () => {
  return (
    <div className=" flex items-center justify-between h-[27rem] mt-16">
      <div className=" h-[85%] place-self-start  w-[48%]">
        <Image src={img1} alt="hero image" className=" h-full" />
      </div>
      <div className=" w-[22%] h-[85%] place-self-end">
        <Image src={img2} alt="hero image" />
      </div>
      <div className=" w-[22%] h-[85%] place-self-start">
        <Image src={img3} alt="hero image" />
      </div>
    </div>
  );
};

export default HeroImages;
