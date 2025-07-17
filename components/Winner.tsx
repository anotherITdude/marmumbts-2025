"use client";
import React from "react";
import winner_left from "../public/winner_left.png";
import Image from "next/image";
import { motion } from "framer-motion";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
const Winner = () => {
  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  
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


  return (
    <div dir={`ltr`} className={`bg-[#1FBED4] flex flex-col overflow-hidden`}>
      <div
        className={`flex text-webWhite  pr-4 md:mb-4 mt-1 h-full md:h-[540px] overflow-visible
          pt-10 md:pt-0`}
      >
        <motion.div {...motionSettingsleft2right} className="relative hidden md:flex flex-1 ">
          <Image
            placeholder="blur"
            src={winner_left}
            alt="Marvel"
            className={`w-[200px] md:min-w-[750px] md:absolute -bottom-4 left-0 max-w-full`}
          />
        </motion.div>
        <div className={`flex-1 right flex flex-col  justify-center
        ${locale === "/" ? "md:pl-[45%]" : "md:pr-[10%]"}
        `}>
          <div
            className={`mb-2
            ${
              locale === "/"
              ? "font-BebasNeue text-8xl md:text-8xl text-center md:text-left "
              : "font-BebasNeue text-8xl md:text-8xl text-center md:text-right"
            }`}
          >
            {t.winner_title}
          </div>
          <div
            className={`mb-5
            ${locale === "/"
              ? "font-BebasNeue text-4xl md:text-4xl text-center md:text-left"
              : "font-NotoKufiArabic-ExtraBold text-2xl  md:text-2xl text-center md:text-right "}
              `}
          >
            <p className={`${locale === "/" ? "" : " mb-1"}`}>{t.winner_title_p1}</p>
            <p className={`${locale === "/" ? "" : "mb-1"}`}>{t.winner_title_p2}</p>
            <p>{t.winner_title_p3}</p>

          </div>
          <div
            className={`
            ${locale === "/" ? "font-BebasNeue" : "font-NotoKufiArabic-Regular"}
              `}
          >
            <motion.div 
              {...motionSettingsright2left}
              className={`flex flex-col bg-webBlue text-webWhite 
            
            ${
              locale === "/"
                ? "font-BebasNeue m-auto mb-6 max-w-[130px] pt-[6px] pb-0 pr-4 pl-4 md:pr-4 md:ml-0 md:pl-4 text-xl "
                : "font-NotoKufiArabic-ExtraBold mb-6 md:mb-0 m-auto max-w-[230px] pt-1 pb-2 pr-2 pl-4 md:pr-0 md:mr-0  md:pl-0 text-xs md:text-sm "
            }
            `}
            >
              <p className={`${locale === "/" ? "-mt-1 " : "mt-1 text-right pr-4"}`}>{t.winners_line1}</p>
              <p className={`${locale === "/" ? "-mt-1 " : "mt-1 text-right pr-4"}`}>
                {t.winners_line2}
              </p>
            </motion.div>
          </div>
          <motion.div {...motionSettingsleft2right}>
          <Image
            placeholder="blur"
            src={winner_left}
            alt="Marvel"
            className={`block md:hidden w-full `}
          />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Winner;
