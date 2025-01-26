import { Toaster } from "react-hot-toast";
import logo from "../assets/Logo.png";
import emailIcon from "../assets/email.jpg";

const VerifyEmail = () => {
  return (
    <div className="flex flex-col mt-8 gap-20  mx-auto w-[95%] sm:w-[81%] md:w-[75%] items-center bg-white">
      <div className="pt-2 w-[100%]  flex items-center justify-center">
        <img
          src={logo}
          className=" m-auto w-[10rem] md:w-[13rem] lg:w-[15rem]"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className=" text-[1.6rem] text-center lg:text-[2rem] xl:text-[3rem] font-bold pt-5 px-2 leading-10">
          Verify Your Email
        </h2>
        <div className=" text-center  p-2 ">
          <div className="  m-auto  w-[10rem] md:w-[13rem] lg:w-[15rem]">
            <img src={emailIcon} alt="EmailIcon" />
          </div>
          <div className="flex flex-col  items-center justify-center gap-6 mx-auto opacity-60 font-medium leading-6  text-center">
            <p className=" ">
              We have sent an email confirmation mail on your email address.
              Click on the provided link in the email to verify your email
              address.
            </p>
            {/* <p className="">
            If you have not received it,{" "}
            <a href="#">
              <span className="text-[#1C0B8D]">resend email.</span>
            </a>
          </p> */}
          </div>
          {/* <button className="rounded-lg border p-3 w-[100%] sm:w-[81%] md:w-[75%] font-medium bg-[#1C0B8D] text-[#ffffff] mt-10">
          Resend Email
        </button> */}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default VerifyEmail;
