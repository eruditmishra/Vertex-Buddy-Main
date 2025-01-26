import ROI from "@/public/assets/Greater-ROI.webp";
import conversion from "@/public/assets/Quality-conversions.webp";
import adaptation from "@/public/assets/Continuous-adaptation.webp";
import DifferencesCard from "./DifferencesCard";

const DigitalDifferences = () => {
  return (
    <div className=" flex flex-col gap-6 bg-[#3d3d3d]  py-24 mt-32 text-white items-center px-4">
      <h2 className=" text-[2.3rem] font-bold text-center">
        The Digital Differences We Create
      </h2>
      <div className=" flex flex-col gap-4 items-center lg:mt-8 bg-[#1b1c1c] py-6 lg:px-36 px-3 mx-auto rounded-lg testimonial-shadow">
        <h3 className=" lg:text-[1.8rem] text-[1.3rem] text-center font-[500] capitalize">
          A multi-platform presence leading to high-end returns
        </h3>
        <p className="text-[1.1rem] font-[500] opacity-90 text-center">
          Aligning with us can make you excel in these three key concerns!
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-8 mx-auto">
        <DifferencesCard
          title="Greater ROI"
          description="Save time and money with increased efficiency and productivity"
          icon={ROI}
          alt="roi"
        />
        <DifferencesCard
          title="Quality conversions"
          description="Quality recommendation leading to higher conversions"
          icon={conversion}
          alt="conversion"
        />
        <DifferencesCard
          title="Continuous adaptation"
          description="Constantly evolving with the changing trends and technology"
          icon={adaptation}
          alt="adaptation"
        />
      </div>
    </div>
  );
};

export default DigitalDifferences;
