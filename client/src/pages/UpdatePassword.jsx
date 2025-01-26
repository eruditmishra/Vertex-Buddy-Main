import toast, { Toaster } from "react-hot-toast";
import logo from "../assets/Logo.png";
import RightSection from "../components/commom/RightSection";
import { useState } from "react";
import CTAButton from "../components/commom/CTAButton";
import { Link, useParams } from "react-router-dom";
import { updatePassword } from "../services/operations/authAPI";
import { MdRemoveRedEye } from "react-icons/md";

const UpdatePassword = () => {
  const params = useParams();

  const { userId, token } = params;

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await updatePassword(userId, token, password);

    if (response?.success) {
      toast.success("Password Updated Successfully");
      setPassword("");
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
                Update Password
              </h1>
              <p className="opacity-60">Fill out the following details:</p>
            </div>
            <form
              className="flex flex-col gap-6 items-center"
              onSubmit={handleSubmit}
            >
              <div className="relative w-full">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full bg-input-field-bg px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400"
                />
                <MdRemoveRedEye
                  className="absolute right-5 text-lg  cursor-pointer top-[50%] translate-y-[-50%]"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <CTAButton title={"Update Password"} />
            </form>
          </div>
          <p className="text-center w-full">
            <span className="opacity-60">Login instead?</span>
            <span className=" opacity-full font-medium text-primary-violet">
              <Link to={"/login"} className="opacity-100">
                {" "}
                Login
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

export default UpdatePassword;
