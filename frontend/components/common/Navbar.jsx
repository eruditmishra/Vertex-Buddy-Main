"use client";
import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isMobile ? <MobileNav /> : <Nav />}</div>;
};

export default Navbar;
