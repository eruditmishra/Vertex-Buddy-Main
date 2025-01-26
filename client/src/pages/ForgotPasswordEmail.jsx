import { Toaster } from "react-hot-toast";
import logo from "../assets/Logo.png";
import emailIcon from "../assets/email.jpg";

const ForgotPasswordEmail = () => {
  return (
    <div className="flex flex-col mt-8 gap-20  mx-auto w-[95%] sm:w-[81%] md:w-[75%] items-center">
      <div className="pt-2 w-[100%]  flex items-center justify-center">
        <img
          src={logo}
          className=" m-auto w-[10rem] md:w-[13rem] lg:w-[15rem]"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className=" text-[1.6rem] text-center lg:text-[2rem] xl:text-[3rem] font-bold pt-5 px-2 leading-10">
          Verify it's you
        </h2>
        <div className=" text-center  p-2 ">
          <div className="  m-auto  w-[10rem] md:w-[13rem] lg:w-[15rem]">
            <img src={emailIcon} alt="EmailIcon" />
          </div>
          <div className="flex flex-col  items-center justify-center gap-6 mx-auto opacity-60 font-medium leading-6  text-center">
            <p className="">
              We have sent an email with a link on your email address. Click on
              the provided link to update your password.
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ForgotPasswordEmail;
