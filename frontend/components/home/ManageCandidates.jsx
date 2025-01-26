import { LiaPencilRulerSolid } from "react-icons/lia";
import { IoBriefcase } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import sectionImage from "@/public/assets/girl-at-cafe.webp";
import Image from "next/image";
import Link from "next/link";
const ManageCandidates = () => {
  return (
    <div className="  mx-auto  bg-dark-violet w-full md:w-9/12 border-t-4 border-primary-yellow border-solid mt-32 rounded-2xl ">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between  mx-auto text-white ">
        <div className=" w-full md:w-[50%] flex px-4 md:px-0 md:pl-10 py-16 flex-col gap-6 ">
          <h2 className=" text-[1.75rem] md:text-[2.5rem] font-semibold leading-tight">
            This is how{" "}
            <span className=" text-primary-yellow ">
              {" "}
              candidates should be managed{" "}
            </span>
          </h2>
          <p className="text-[1.12rem]">
            Access the top 1% talent on Vertex Buddy. Get candidates ranked on
            the basis of their skillset and the job requirements. This is how
            innovation works.
          </p>
          <div className="text-[1.12rem] flex flex-col gap-5">
            <div className="flex gap-2 items-center  ">
              <LiaPencilRulerSolid className=" text-primary-yellow text-[1.5rem]" />
              <span>
                Access to perfect talent which fills void in your company
              </span>
            </div>
            <div className="flex gap-2 items-center  ">
              <IoBriefcase className=" text-primary-yellow text-[1.5rem]" />
              <span>
                Streamline your process: add, filter and manage your candidates
              </span>
            </div>
            <div className="flex gap-2 items-center  ">
              <BiSupport className=" text-primary-yellow text-[1.5rem]" />
              <span>Partner with us for end-to-end support</span>
            </div>
          </div>
          <Link href="https://recruiter.vertexbuddy.com" className="w-fit">
            <button className=" text-white bg-primary-yellow px-8 py-3 rounded-lg w-fit font-medium mt-6">
              Start Managing
            </button>
          </Link>
        </div>
        <div className=" w-full md:w-[45%] ">
          <div className="w-full h-[40rem] ">
            <Image
              src={sectionImage}
              className="w-full h-full rounded-r-xl object-cover"
              alt="candidates management"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCandidates;
