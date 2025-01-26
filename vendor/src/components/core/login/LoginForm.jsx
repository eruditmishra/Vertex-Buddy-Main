import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdRemoveRedEye } from "react-icons/md";
import { login } from "../../../services/operations/authAPI";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(login(data, navigate));
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <form
        className="flex flex-col items-center w-full gap-5"
        onSubmit={loginHandler}
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
        <p className=" place-self-end text-primary-violet font-medium text-[0.95rem]">
          <Link to={"/user/forgot-password"}>Forgot Password?</Link>
        </p>

        <button className="bg-primary-violet text-white px-6 py-2 text-[1.2rem] w-full rounded-lg hover:bg-transparent hover:text-primary-violet border-solid border-[1px] border-primary-violet transition-colors">
          Login
        </button>
      </form>
      <p>
        <span className="opacity-60">Don&apos;t have an account? </span>
        <Link to={"/register"}>
          {" "}
          <span className="text-primary-violet opacity-100 font-medium">
            Create an account
          </span>{" "}
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
