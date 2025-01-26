"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/assets/Logo.png";
import { CgMenuMotion } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const pathname = usePathname();

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  const bgHandler = () => {
    if (window.location.pathname === "/what-to-expect") {
      setShowBackground(true);
    } else if (window.location.pathname === "/why-skytrust-network") {
      setShowBackground(true);
    } else if (window.location.pathname === "/how-skytrust-network-works") {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };
  useEffect(() => {
    bgHandler();
  }, [pathname]);

  return (
    <div className={`bg-white z-[5000] text-black fixed top-0 w-full `}>
      <header className=" flex items-center justify-between px-6 py-[0.62rem]">
        <Link href="/">
          <Image
            src={logo}
            alt="Sky Trust"
            className={`w-[8.33rem] h-[2.75rem] `}
            onClick={() => {
              isOpen && menuHandler();
            }}
          />
        </Link>
        <div className=" z-[5000]">
          {isOpen ? (
            <div
              className=" flex items-center justify-center h-[44px] w-[44px]"
              onClick={menuHandler}
            >
              <IoClose
                className={` text-black text-[1.5rem]
                 z-[5000]`}
              />
            </div>
          ) : showBackground ? (
            <div
              className=" flex items-center justify-center h-[44px] w-[44px]"
              onClick={menuHandler}
            >
              {/* <Image src={hamburger} alt="menuIcon" /> */}
              <CgMenuMotion />
            </div>
          ) : (
            <div
              className=" flex items-center justify-center h-[44px] w-[44px]"
              onClick={menuHandler}
            >
              {/* <Image src={hamburger} alt="menuIcon" /> */}
              <CgMenuMotion />
            </div>
          )}
        </div>
      </header>
      {/* Navigation Drawer */}
      <nav
        className={`${
          isOpen ? "visible" : "invisible"
        } fixed  top-16 left-0 max-w-full flex flex-col w-full bg-white text-uiBlack  shadow-lg `}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <ul className=" flex list-none  text-[1rem] text-center  flex-col justify-center items-center ">
          <Link
            href="/"
            onClick={menuHandler}
            className="bg-lightGrey w-full py-[1.16rem] px-[1.5rem] border-b-4 border-solid border-white "
          >
            <li>Home</li>
          </Link>
          <Link
            href="/about-us"
            onClick={menuHandler}
            className="bg-lightGrey w-full py-[1.16rem] px-[1.5rem] border-b-4 border-solid border-white "
          >
            <li>About Us</li>
          </Link>
          <Link
            href="/contact-us"
            onClick={menuHandler}
            className="bg-lightGrey w-full py-[1.16rem] px-[1.5rem] border-b-4 border-solid border-white "
          >
            <li>Contact Us</li>
          </Link>

          <a
            href="https://dash.skytrustnetwork.com/user/register"
            target="_blank"
            rel="noreferrer"
            onClick={menuHandler}
            className="bg-primary-violet text-white w-full py-[1.16rem] px-[1.5rem]  "
          >
            <li>Login</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
