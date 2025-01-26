"use client";
import React from "react";
import Image from "next/image";
import quoteLeft from "@/public/assets/quote-left.png";
import quoteRight from "@/public/assets/quote-right.png";

const TestimonialSlider = ({ name, img, head, message, alt, id }) => {
  return (
    <div className="flex flex-col md:flex-row  text-black   justify-around lg:w-full md:w-[]  gap-8  py-2  ">
      <div className=" rounded-full w-[12rem] items-center mx-auto md:mx-0  ">
        <Image src={img} alt={alt} className="rounded-full" />
      </div>

      <div className="w-[80%]  flex relative px-2 mx-auto md:mx-0">
        <div className="absolute md:top-0 md:left-12 top-[1%]  left-[60%] translate-x-[-100%] z-[1000] mt-15">
          <Image src={quoteLeft} alt="quoteLeft " />
        </div>
        <div className="flex flex-col gap-7 w-full">
          <h2 className="font-bold font-inter lg:text-[2.5rem] text-[1.8rem] text-black  md:pl-20 md:pt-0 pt-20 ">
            {head}
          </h2>
          <p className=" opacity-60">{message}</p>
          <h4 className=" text-black font-medium uppercase text-[1.2rem] mt-15">
            - {name}
          </h4>
          <div className="  absolute md:bottom-0 md:right-0  right-[40%] bottom-[-18%]  z-[1000]  ">
            <Image src={quoteRight} alt="QuoteRight" className="mt-right  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
