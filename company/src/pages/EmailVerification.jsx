import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import emailIcon from "../assets/email.jpg";
import { Link, useParams } from "react-router-dom";
import { LineWave } from "react-loader-spinner";
import { Toaster } from "react-hot-toast";
import { verifyEmail } from "../services/operations/authAPI";

const EmailVerification = () => {
  const params = useParams();
  const [tokenValid, setTokenValid] = useState(false);

  const verify = async () => {
    const result = await verifyEmail(params.id, params.token);

    // console.log(result);
    if (result?.success) {
      setTokenValid(true);
    }
  };

  useEffect(() => {
    params && verify();
  }, []);

  return (
    <>
      {tokenValid ? (
        <div className="flex flex-col mt-8 gap-20  mx-auto w-[95%] sm:w-[81%] md:w-[75%] items-center">
          <div className="pt-2 w-[100%]  flex items-center justify-center">
            <img
              src={logo}
              className=" m-auto w-[10rem] md:w-[13rem] lg:w-[15rem]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className=" text-[1.6rem] text-center lg:text-[2rem] xl:text-[3rem] font-bold pt-5 px-2 leading-10">
              Email Verified Successfully
            </h2>
            <div className=" text-center  p-2 ">
              <div className="  m-auto  w-[10rem] md:w-[13rem] lg:w-[15rem]">
                <img src={emailIcon} alt="EmailIcon" />
              </div>
              <div className="flex flex-col  items-center justify-center gap-6 mx-auto  font-medium leading-6  text-center">
                <p className="opacity-60 ">
                  Your email has been successfully.{" "}
                </p>
                <Link to={"/login"}>
                  <button className="  bg-[#1C0B8D] text-lg py-3 px-8 text-[0.80644rem] text-white rounded-md font-bold flex items-center justify-center hover:text-[#1C0B8D] hover:bg-white border-[1.5px] border-[#1C0B8D] border-solid transition-colors  duration-75">
                    Log In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <LineWave
            visible={true}
            height="100"
            width="100"
            color="#522ec1"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        </div>
      )}
      <Toaster />
    </>
  );
};

export default EmailVerification;
