import Link from "next/link";

const OurPromise = () => {
  return (
    <div className=" flex flex-col lg:justify-center items-center lg:gap-7 gap-8 bg-dark-violet text-white w-full lg:py-24 py-8  px-6 lg:mt-24 mt-16 border-t-8  border-t-primary-yellow">
      <h3 className=" uppercase text-[1.5rem]">Our Vision </h3>
      <h2 className=" lg:text-[2rem] text-[1.5rem] lg:font-bold font-semibold lg:max-w-[50rem] text-center ">
        To empower organizations by providing cutting edge hiring solutions
      </h2>
      <Link href="https://recruiter.vertexbuddy.com">
        <button className=" px-16 py-4 bg-primary-yellow text-white font-semibold rounded-md">
          Get Started!
        </button>
      </Link>
    </div>
  );
};

export default OurPromise;
