import { useState } from "react";
import CTAButton from "../../components/commom/CTAButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../services/operations/adminAPI";
import { Toaster } from "react-hot-toast";
import { MdRemoveRedEye } from "react-icons/md";

const AdminLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const { user } = useSelector((state) => state.profile);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (user?.accountType === "admin") {
    navigate("/admin");
  }

  const loginHandler = (event) => {
    event.preventDefault();
    const data = {
      userName: userName,
      password: password,
    };

    dispatch(loginAdmin(data, navigate));
  };

  return (
    <div className="w-fit mx-auto my-16 flex flex-col gap-6 items-center justify-center bg-white py-12 px-12 rounded-2xl cardShadow">
      <form className="flex flex-col bg-white gap-6 " onSubmit={loginHandler}>
        <div>
          <label htmlFor="userName" className="text-offset-black font-semibold">
            Username:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-offset-black font-semibold">
            Password:
          </label>
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
        </div>
        <CTAButton title={"Login"} />
      </form>
      <Toaster />
    </div>
  );
};

export default AdminLogin;
