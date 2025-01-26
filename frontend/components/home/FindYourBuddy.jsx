import { FiEdit } from "react-icons/fi";
import { TiPin } from "react-icons/ti";
import { RiMedalFill } from "react-icons/ri";
import Image from "next/image";
import buddyIcon from "@/public/assets/hiringBuddy.svg";
import Link from "next/link";
const FindYourBuddy = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-9/12 mx-auto mt-32">
      <div className="w-full hidden md:block md:w-[40%]  scale-x-[-1]">
        <div>
          <Image src={buddyIcon} alt="vertex buddy" />
        </div>
      </div>
      <div className="w-full md:w-[55%] flex flex-col gap-9">
        <h2 className=" text-[1.75rem] md:text-[2.5rem] font-semibold ">
          Say hi to your{" "}
          <span className=" text-primary-yellow">Hiring Buddy</span>
        </h2>
        <div className="flex flex-col gap-5">
          <div className=" flex items-start gap-4">
            <div className=" text-[1.25rem] pt-1 text-primary-violet">
              <FiEdit />
            </div>
            <div className=" gap-2">
              <h3 className=" text-[1.25rem] font-medium leading-tight">
                No cost to join
              </h3>
              <p className=" text-offset-black">
                Register and start managing candidates.
              </p>
            </div>
          </div>
          <div className=" flex items-start gap-4">
            <div className=" text-[1.25rem] pt-1 text-primary-violet">
              <TiPin />
            </div>
            <div>
              <h3 className=" text-[1.25rem] font-medium leading-tight">
                Post a job and hire top talent
              </h3>
              <p className=" text-offset-black">
                Post a job and find the right candidate for your company.
              </p>
            </div>
          </div>
          <div className=" flex items-start gap-4">
            <div className=" text-[1.25rem] pt-1 text-primary-violet">
              <RiMedalFill />
            </div>
            <div>
              <h3 className=" text-[1.25rem] font-medium leading-tight">
                Let us rank the candidates for you
              </h3>
              <p className=" text-offset-black">
                Get candidates ranking based upon the requirements and their
                skill set.
              </p>
            </div>
          </div>
        </div>
        <Link href="https://recruiter.vertexbuddy.com" className="w-fit">
          <button className=" bg-primary-violet text-white text-medium text-[1.25rem] px-10 py-4 w-fit rounded-xl mt-8">
            Sign Up for Free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FindYourBuddy;
