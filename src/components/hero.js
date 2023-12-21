import React from "react";
import Image from "next/image";
import { dm_sans } from "@/app/fonts";
import styles from "@/components/hero.module.css";
const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className={dm_sans.className}>
        <h1 className={styles.heading}>
          Hello I'm Sherrifdeen, <br /> A software developer.
        </h1>
        <p className={styles.paragraph}>
          I am a software developer with two years of professional experience,
          primarily focused on frontend engineering. I am currently a freelancer
          based in Nigeria, actively seeking both freelance and full-time roles.
        </p>
      </div>
      <div>
        <Image src="" />
      </div>
    </div>
  );
};

export default Hero;
