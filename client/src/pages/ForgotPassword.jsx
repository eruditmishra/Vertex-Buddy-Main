import { Toaster } from "react-hot-toast";
import logo from "../assets/Logo.png";
import RightSection from "../components/commom/RightSection";
import { useState } from "react";
import CTAButton from "../components/commom/CTAButton";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetMail } from "../services/operations/authAPI";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await sendPasswordResetMail(email);

    if (response?.success) {
      navigate("/user/forgot-password/email-sent");
    }
  };

  return (
    <div className="w-full flex self-stretch">
      {/* Left Container */}
      <div className="md:w-[50%] flex flex-col gap-5 items-center justify-center  min-h-screen self-stretch">
        <div className="min-w-[65%] flex flex-col gap-5 items-start justify-center ">
          {/* logo Container */}
          <div className="w-[12rem] ">
            <img src={logo} alt="" className="h-full w-full" />
          </div>
          <div className="flex gap-8 flex-col w-full">
            <div>
              <h1 className="lg:text-[2rem] md:text-[1.6rem] text-[1.3rem] font-bold text-offset-black">
                Forgot Password?
              </h1>
              <p className="opacity-60">Fill out the following details:</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 items-center"
            >
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400"
              />

              <CTAButton title={"Get Verification Link"} />
            </form>
          </div>
          <p className="text-center w-full">
            <span className="opacity-60">Don't have an account?</span>
            <span className=" opacity-full font-medium text-primary-violet">
              <Link to={"/register"} className="opacity-100">
                {" "}
                Register
              </Link>
            </span>
          </p>
        </div>
        <Toaster />
      </div>
      <RightSection />
    </div>
  );
};

export default ForgotPassword;
