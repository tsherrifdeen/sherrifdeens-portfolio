import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-8 font-sans">
      <div className="font-sans">
        <h1 className="text-6xl font-semibold leading-[97.5%] mb-">
          Hello I'm Sherrifdeen Tijani, a software developer.
        </h1>
        <p className="">
          I am a software developer with two years of professional experience,
          primarily focused on frontend engineering. I am currently a freelancer
          based in Nigeria, actively seeking both freelance and full-time roles.
        </p>
      </div>
      <div>{/* <Image src="" /> */}</div>
    </div>
  );
};

export default Hero;
