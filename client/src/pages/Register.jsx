import { Toaster } from "react-hot-toast";
import logo from "../assets/Logo.png";
import RightSection from "../components/commom/RightSection";
import RegisterForm from "../components/core/register/RegisterForm";

const Register = () => {
  return (
    <div className="w-full flex self-stretch">
      <div className="md:w-[50%] flex flex-col gap-5 items-center justify-center  min-h-screen self-stretch">
        <div className="min-w-[65%] flex flex-col gap-5 items-start justify-center ">
          {/* logo Container */}
          <div className="w-[12rem] ">
            <img src={logo} alt="" className="h-full w-full" />
          </div>
          <div className="flex gap-8 flex-col w-full">
            <div>
              <h1 className="lg:text-[2rem] md:text-[1.6rem] text-[1.3rem] font-bold text-offset-black">
                Register Now!
              </h1>
              <p className="opacity-60">Select a method to register:</p>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
      <RightSection />
      <Toaster />
    </div>
  );
};

export default Register;
