import { Toaster } from "react-hot-toast";
import logo from "../assets/Logo.png";
import LoginForm from "../components/core/login/LoginForm";
import RightSection from "../components/common/Auth/RightSection";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const { token } = useSelector((state) => state.auth);

  const { user } = useSelector((state) => state.profile);

  const navigate = useNavigate();

  useEffect(() => {
    if (token && user) {
      navigate("/");
    }
  }, [token, user]);

  return (
    <div className="w-full flex self-stretch">
      {/* Left Container */}
      <div className="md:w-[50%] flex flex-col gap-5 items-center justify-center  min-h-screen self-stretch">
        <div className="min-w-[65%] flex flex-col gap-5 items-start justify-center ">
          {/* logo Container */}
          <div className="w-[12rem] ">
            <img src={logo} alt="" className="h-full w-full" />
          </div>
          {/* login container */}
          <div className="flex gap-8 flex-col w-full">
            <div>
              <h1 className="lg:text-[2rem] md:text-[1.6rem] text-[1.3rem] font-bold text-offset-black">
                Log in to your Account
              </h1>
              <p className="opacity-60">Welcome Back!</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Right COntainer */}
      <RightSection />
      <Toaster />
    </div>
  );
};

export default Login;
