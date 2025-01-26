import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CTAButton from "../../commom/CTAButton";
import SocialRegister from "./SocialRegister";
import { useSelector } from "react-redux";
import { signUp } from "../../../services/operations/authAPI";
import { MdRemoveRedEye } from "react-icons/md";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/user");
    }
  }, [token, navigate]);

  const registerHandler = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
      accountType: "externalUser",
      name: name,
    };

    await signUp(data, navigate);
    // navigate("/user");
  };

  return (
    <div className="flex flex-col gap-6 items-center ">
      <SocialRegister />
      <div className="flex justify-between items-center w-full ">
        <div className=" bg-gray-300 w-[25%] h-[1.5px]"></div>
        <span className=" opacity-40 w-[46%] font-medium text-center">
          or continue with email
        </span>
        <div className=" bg-gray-300  h-[1.5px] w-[25%]"></div>
      </div>
      <form
        className="flex flex-col items-center w-full gap-5"
        onSubmit={registerHandler}
      >
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full bg-input-field-bg px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="w-full bg-input-field-bg px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400"
        />
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

        <CTAButton title={"Sign Up"} />
      </form>
      <p>
        <span className="opacity-60">Already have an account? </span>
        <Link to={"/login"}>
          {" "}
          <span className="text-primary-violet opacity-100 font-medium">
            Log In
          </span>{" "}
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
