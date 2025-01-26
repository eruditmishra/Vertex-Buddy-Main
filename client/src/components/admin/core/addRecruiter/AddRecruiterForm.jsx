import { useState } from "react";
import CTAButton from "../../../commom/CTAButton";
import { useSelector } from "react-redux";
import { addRecruiter } from "../../../../services/operations/recruiterAPI";
import toast from "react-hot-toast";
import { MdRemoveRedEye } from "react-icons/md";

const AddRecruiterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const { token } = useSelector((state) => state.auth);

  const resetInput = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const addRecruiterHandler = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email,
      password,
    };

    const response = await addRecruiter(data, token);

    // console.log(response);

    if (response?.success) {
      toast.success("Recruiter Added Successfully");
      resetInput();
    }
  };

  return (
    <form
      className="flex flex-col bg-white gap-6 "
      onSubmit={addRecruiterHandler}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-offset-black font-semibold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full bg-[#f8f8f88c] px-3 py-3 rounded-lg border-[1px] border-solid border-gray-200 placeholder:text-gray-400 placeholder:text-[0.8rem] text-gray-400 text-[0.8rem]"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-offset-black font-semibold">
          Email address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
      <CTAButton title={"Add Recruiter"} />
    </form>
  );
};

export default AddRecruiterForm;
