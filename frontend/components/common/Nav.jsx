"use client";
import Image from "next/image";
import logo from "@/public/assets/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className=" w-full bg-white sticky top-0 left-0 right-0">
      <div className="bg-white w-9/12 mx-auto  flex justify-between items-center  py-2 ">
        <div className=" w-[15rem] h-[4rem]">
          <Link href={"/"}>
            <Image
              src={logo}
              className="h-full w-full object-fill"
              alt="vertex buddy"
            />
          </Link>
        </div>
        <ul className=" flex gap-5 text-[1.1rem] items-center justify-center font-medium">
          <li
            className={`${
              pathname === "/"
                ? "text-primary-violet font-bold  "
                : "text-black"
            } `}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${
              pathname === "/about-us"
                ? "text-primary-violet font-bold  "
                : "text-black"
            }`}
          >
            <Link href="/about-us">About Us</Link>
          </li>
          <li
            className={`${
              pathname === "/contact-us"
                ? "text-primary-violet font-bold  "
                : "text-black"
            }`}
          >
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <div className=" flex items-center gap-6 ">
          <a href="https://recruiter.vertexbuddy.com/register" rel="noreferrer">
            <button className=" bg-primary-violet text-white px-5 py-2 text-[1.1rem] rounded-md font-md min-w-[7rem] border-primary-violet border-solid border-2">
              Sign Up
            </button>
          </a>
          <a href="https://recruiter.vertexbuddy.com" rel="noreferrer">
            <button className=" border-primary-violet border-solid text-black border-2 text-primary-purple min-w-[7rem] px-5 py-2 text-[1.1rem] rounded-md font-md">
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
