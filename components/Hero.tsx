"use client";
import React from "react";
import hero_right from "./../public/hero_right.png";
import hero_en_left_top from "./../public/hero_en_left_top.png";
import hero_en_left_bot from "./../public/hero_en_left_bot.png";
import hero_ar_left_bot from "./../public/hero_ar_left_bot.png";
import hero_ar_left_top from "./../public/hero_ar_left_top.png";

// import hero_en from "./../public/hero_en.png";
// import hero_ar from "./../public/hero_ar.png";
// import mobile_en from "./../public/mobile_en.png";
// import mobile_ar from "./../public/mobile_ar.png";

import hero_left_ar from "./../public/hero_left_ar.png";
import Image from "next/image";
import { motion } from "framer-motion";

import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const Hero = () => {
  const motionSettingsh2 = {
    initial: { opacity: 0, y: -15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsImage = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2 },
  };

  const motionSettingsleft2right = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsright2left = {
    initial: { opacity: 0, x: 15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  const how_to_title =
    locale === "/"
      ? "howtocard_title font-DIN-Bold"
      : "howtocard_title font-HelveticaNeueLTArabic-Roman pt-0";

  const how_to_card =
    locale === "/"
      ? "howtocard font-DIN-Bold"
      : "howtocard font-HelveticaNeueLTArabic-Roman";

  return (
    <div
      className="hero bg-webHeroBg
    bg
    
    md:bg-cover md:h-full
    flex flex-col overflow-hidden"
    >
      <Navbar />

      <div
        className="flex z-40 justify-center   md:flex-row md:justify-between items-center
        pl-4 pr-4 -mb-20 md:mb-4 mt-4 h-auto md:h-[450px] overflow-visible
        "
      >
        <div
          className={`
          flex flex-col md:flex-row h-full justify-center md:justify-evenly items-center w-full -gap-x-10
          
          ${
            locale === "/"
              ? "pr-0 md:pl-10 mt-0 md:-mt-[9%]"
              : "pr-0 md:pr-10 -mt-[5%] "
          }
          `}
        >
          <motion.div
            {...motionSettingsleft2right}
            className="m-auto z-10
          "
          >
            <Image
              placeholder="blur"
              src={locale === "/" ? hero_en_left_top : hero_ar_left_top}
              alt="Marvel"
              className={`max-w-[90%] md:max-w-[450px] m-auto 
                ${locale === "/" ? "mt-2 md:mt-[20%]" : "mt-4 md:mt-[20%]"}
                `}
            />
            <Image
              placeholder="blur"
              src={hero_right}
              alt="Marvel"
              className={`max-w-[100%] block md:hidden md:max-w-[600px] m-auto
                ${locale === "/" ? "-mt-3 md:mt-0" : "-mt-1 md:mt-0 "}
                `}
            />
            <Image
              placeholder="blur"
              src={locale === "/" ? hero_en_left_bot : hero_ar_left_bot}
              alt="Marvel"
              className={`
                ${locale === "/"
                ? "max-w-[80%] md:max-w-[430px] mt-3 mb-12 m-auto"
                : "max-w-[80%] md:max-w-[430px] mt-0 mb-10 m-auto"}
                `}
            />
          </motion.div>
          <motion.div
            {...motionSettingsright2left}
            className={`right z-0 flex flex-col md:block 
          relative justify-center items-center -mt-8 md:mt-0 
          ${
            locale === "/"
              ? "font-BebasNeue tracking-wider -ml-0 md:-ml-12"
              : "font-NotoKufiArabic-ExtraBold text-xs -ml-0 md:ml-20 md:-mr-8"
          }`}
          >
            <Image
              placeholder="blur"
              src={hero_right}
              alt="Marvel"
              className={`max-w-[100%] hidden md:block md:max-w-[600px] m-auto
                ${locale === "/" ? "mt-10 md:mt-0" : "mt-10 md:mt-0 "}
                `}
            />
            <div
              className={`flex flex-col -gap-y-1
               md:absolute md:mt-20
             md:bottom-0 md:right-[25%]
             mb-[67%] md:mb-0
             bg-webBlue text-webWhite 
            
            ${
              locale === "/"
                ? "max-w-[250px] pt-1 pb-0 pr-4 pl-4 md:pr-10 md:pl-10 text-lg md:bottom-0 md:right-[25%]"
                : "max-w-[250px] pt-2 pb-2 pr-4 pl-4 md:pr-4  md:pl-4 text-xs md:bottom-0 md:right-[50%]"
            }
            `}
            >
              <p className="">{t.winners_line1}</p>
              <p className={`${locale === "/" ? "-mt-1" : "mt-1"}`}>
                {t.winners_line2}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        className={`text-center  text-webWhite animate-pulse md:mt-0
        ${
          locale === "/"
            ? "font-BebasNeue text-lg md:text-lg tracking-widest mt-9 mb-1"
            : "font-NotoKufiArabic-Regular text-sm md:text-lg -mt-5 md:mt-6 mb-3"
        }`}
      >
        {t.scrollText}
      </div>
    </div>
  );
};

export default Hero;
