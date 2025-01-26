import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdRemoveRedEye } from "react-icons/md";
import { register } from "../../../services/operations/authAPI";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const registerHandler = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
      name: name,
      companyName: companyName,
      phone: phone,
    };

    const registerCompany = await register(data, navigate);
  };

  return (
    <div className="flex flex-col gap-6 items-center ">
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
        <input
          type="number"
          placeholder="Phone Number"
          name="phone"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
          className="w-full bg-input-field-bg px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400"
        />
        <input
          type="text"
          placeholder="Company Name"
          name="companyName"
          id="companyName"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
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

        <button className="bg-primary-violet text-white px-6 py-2 text-[1.2rem] w-full rounded-lg hover:bg-transparent hover:text-primary-violet border-solid border-[1px] border-primary-violet transition-colors">
          Sign Up
        </button>
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
