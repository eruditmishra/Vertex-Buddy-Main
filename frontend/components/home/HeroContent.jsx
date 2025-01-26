import microsoft from "@/public/assets/microsoft.svg";
import airbnb from "@/public/assets/airbnb.svg";
import bissell from "@/public/assets/bissell.svg";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="w-full md:w-[50%] flex flex-col  gap-14 items-start">
      <div className="flex flex-col gap-6">
        <h1 className="text-[3rem] font-semibold text-primary-violet leading-tight">
          {" "}
          Manage candidates:
          <span className=" text-primary-yellow"> Effortlessly </span>
        </h1>
        {/* <h1 className="text-[3rem] font-semibold text-primary-violet leading-tight">
        {" "}
        How candidates should be managed
      </h1> */}
        {/* <p>
        We Increase your Team’s Productivity by reducing the time spent in
        Sourcing, Shortlisting & Interviewing
      </p> */}
        <p className=" text-[1.3rem]  ">
          {" "}
          Forget the old school methods. We are here to transform the way
          candidates should be managed.{" "}
        </p>
        {/* <p className=" text-[1.3rem]  ">
        Say Hi to hassle free{" "}
        <span className=" text-primary-violet font-medium capitalize">
          {" "}
          candidate management platform{" "}
        </span>
      </p> */}
        <Link href="https://recruiter.vertexbuddy.com" className="w-fit">
          <button className=" bg-primary-violet text-white w-fit px-9 py-4 font-medium rounded-md mt-6">
            Sign Up for Free
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-2 md:mb-0 mb-12">
        <h2 className=" text-[1.2rem] font-medium">Trusted by</h2>
        <div className="flex items-center gap-6">
          <div>
            <Image src={microsoft} alt="microsoft" />
          </div>
          <div>
            <Image src={airbnb} alt="airbnb" />
          </div>
          <div>
            <Image src={bissell} alt="bissell" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
