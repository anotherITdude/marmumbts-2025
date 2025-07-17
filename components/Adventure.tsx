"use client";
import React from "react";
import adventure_right from "./../public/adventure_right.png";
import hero_en_left_top from "./../public/hero_en_left_top.png";
import hero_en_left_bot from "./../public/hero_en_left_bot.png";

import imgWorldLogo from "./../public/imgworld_logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import star from "../public/star.png";

import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const Adventure = () => {
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
      className="hero bg-webAdventureBg
    bg
    
    md:bg-cover md:h-full
    flex flex-col overflow-hidden"
    >
      <div
        className="flex justify-center   md:flex-row md:justify-between items-center
        pl-4 pr-4 mb-4 mt-0 h-full md:h-[540px] overflow-visible pt-10
        "
      >
        <div
          className={` 
          flex flex-col md:flex-row h-full justify-center md:justify-evenly items-center w-full -gap-x-10
          ${
            locale === "/"
              ? "pr-0 md:pl-16 "
              : "pr-0 md:pr-16  "
          }
          `}
        >
          <div
            {...motionSettingsleft2right}
            className={`left z-20 
              ${locale === "/"
              ? "m-auto md:min-w-[500px]"
              : ""}
              `}
          >
            <div className="">
              <div
                className={`   text-webWhite
              
             ${
               locale === "/"
                 ? "font-BebasNeue text-[45px]  md:text-6xl text-center md:text-left tracking-[1px] w-full"
                 : "font-NotoKufiArabic-ExtraBold md:max-w-[80%] text-4xl mb-3  md:mb-2 md:text-[42px]"}
             `}
              >
                {t.adventure_line_1}
              </div>
              <div className="flex  items-center gap-x-4 pt-3 pb-3">
                <div
                  className={` bg-webDarkBlue text-webWhite 
                rounded-full text-center
                pr-4 pl-4 pt-1 pb-2
                ${
                  locale === "/"
                    ? "font-BarlowCondensed-Regular text-3xl"
                    : "font-NotoKufiArabic-Regular text-2xl pt-2"
                }`}
                >
                  {t.adventure_line_2}
                </div>
                <div className="flex  justify-center items-start">
                  <Image
                    src={imgWorldLogo}
                    alt="hero_en_left_top"
                    className={`w-[110px] `}
                  />
                </div>
              </div>
            </div>
            <div className={`pb-4 md:w-[80%] 
             text-webWhite 
            ${
              locale === "/"
                ? "font-BarlowCondensed-Regular uppercase tracking-tight font-thin  text-lg"
                : "font-NotoKufiArabic-ExtraLight text-lg md:max-w-[70%]"
            }
            `}>
              {t.adventure_p}
            </div>
            <div className="flex flex-col">
              <div className="">
                <motion.div {...motionSettingsleft2right} className={`flex left bg-webDarkBlue justify-center text-webWhite 
                p-2 gap-x-3 md:max-w-[200px]
                ${locale === "/" ? "pr-6 z-20" : "pl-6 z-10"} `}>
                  <motion.div>
                    <Image
                      src={star}
                      alt="star"
                      className="w-[16px] md:w-[16px] mt-1 animate-pulse"
                    />
                  </motion.div>
                  <div
                    className={`flex-col text-xs 
                    ${
                      locale === "/"
                        ? "font-BebasNeue text-3xl md:text-sm gap-y-0 tracking-wider"
                        : "font-NotoKufiArabic-Regular text-3xl md:text-sm mb-1 gap-y-0"
                    }
                    `}
                  >
                    <p className={`${locale === "/" ? "uppercase text-lg " : " text-sm font-NotoKufiArabic-ExtraBold  "}`}>{t.period_title}</p>
                    <p className=
                      {`${locale === "/" ? "uppercase text-sm -mt-1" : "mt-1 text-xs "}`}>{t.period_from}</p>
                    <p className={`${locale === "/" ? "uppercase text-sm -mt-1" : "mt-1 text-xs "}`}>{t.period_to}</p>
                  </div>
                </motion.div>

                <motion.div {...motionSettingsright2left} className={`
                  flex left bg-webBlue justify-center text-webWhite p-2 mt-4 md:-mt-5 mb-4 gap-x-3 
                   ${locale === "/"
                    ? "pr-2 md:max-w-[300px] z-10   md:ml-[170px]"
                    : "pr-0 md:max-w-[300px] z-20   md:mr-[170px]"} `}>
                  <motion.div>
                    <Image
                      src={star}
                      alt="star"
                      className="w-[16px] md:w-[16px] mt-1 animate-pulse  "
                    />
                  </motion.div>
                  <div
                    className={`flex-col text-xs 
                    ${
                      locale === "/"
                        ? "font-BebasNeue text-3xl md:text-sm gap-y-0 tracking-wider"
                        : "font-NotoKufiArabic-Regular text-3xl md:text-sm mb-1 gap-y-2"
                    }
                    `}
                  >
                    <p className={`${locale === "/" ? "uppercase text-lg " : " text-sm font-NotoKufiArabic-ExtraBold  "}`}>{t.winners_announcement}</p>
                    <p className={`${locale === "/" ? "uppercase text-sm -mt-1 " : " mt-1 text-xs  "}`}>{t.winners_announcement_from}</p>
                    <p className={`${locale === "/" ? "uppercase text-sm -mt-1 " : " text-xs  "}`}>{t.winners_announcement_to}</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
          <motion.div
            {...motionSettingsright2left}
            className={`${locale === "/"
              ? "right md:block -ml-16 md:-ml-[25%] z-1"
              : "right md:block -ml-12 md:-mr-[20%] z-1 "}`}
              
            >
          
            <Image
              placeholder="blur"
              src={adventure_right}
              alt="Marvel"
              className={`max-w-[100%] md:max-w-[100%] m-auto`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
