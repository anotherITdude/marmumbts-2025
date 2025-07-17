"use client";
import React from 'react'
import { motion } from "framer-motion";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from 'next/navigation';
import howtoenter from '../public/howtoenter_bg.png'
import howtoenter_ar from '../public/howtoenter_ar.png'
import Image from 'next/image';
const HowToEnter = () => {
  const motionSettingstop2bottom = {
    initial: { opacity: 0.5, y: -15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };
  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  return (
    <div className='bg-[#1FBED4] h-auto md:h-[500px] pr-4 pl-4 md:pr-20 md:pl-20 pt-10 pb-10 md:pt-20 relative'>
      <div className=" w-full z-40 flex flex-col justify-center">
          <motion.h2
            
            className={`text-webWhite text-4xl md:text-5xl ${
              locale === "/"
                ? "font-BebasNeue text-5xl md:text-6xl"
                : "font-NotoKufiArabic-ExtraBold md:text-4xl"
            }`}
          >
            {t.How_to_enter}
          </motion.h2>
          <div>
            <div
              className={`flex flex-col  ${locale === "/" ? "mt-6" : "mt-8"} `}
            >
              <div
                className={`flex flex-col w-[100%]    ${
                  locale === "/"
                    ? "font-BarlowCondensed-Regular gap-y-4 md:w-[52%]"
                    : "font-NotoKufiArabic-Regular gap-y-6 md:w-[50%]"
                }`}
              >
                <motion.div className={`flex  ${locale === '/' ?  'gap-x-4' : 'gap-x-2'}`}>
                  <div className="">
                    <div
                      className="w-7 h-7 flex justify-center items-center rounded-full
                 bg-webHowToEnter text-webWhite mt-1  md:text-sm"
                    >
                      {t.step_1}
                    </div>
                  </div>
                  <div className={`text-sm  text-webWhite ${locale === '/' ? 'pr-2 md:pr-8 text-xl md:text-lg' : 'pr-2 md:pl-8 md:text-sm'}`}>
                    {t.step_1_content}
                  </div>
                </motion.div>

                <motion.div className={`flex  ${locale === '/' ?  'gap-x-4' : 'gap-x-2'}`}>
                  <div className="">
                    <div
                      className="w-7 h-7 flex justify-center items-center rounded-full
                 bg-webHowToEnter text-webWhite mt-0  text-sm"
                    >
                      {t.step_2}
                    </div>
                  </div>
                  <div className={`text-sm  text-webWhite ${locale === '/' ? 'pr-2 text-xl  md:pr-8 md:text-lg' : 'pr-2 md:pl-8 md:text-sm'}`}>
                    {t.step_2_content}
                  </div>
                </motion.div>

                <motion.div className={`flex  ${locale === '/' ?  'gap-x-4' : 'gap-x-2'}`}>
                  <div className="">
                    <div
                      className="w-7 h-7 flex justify-center items-center rounded-full
                 bg-webHowToEnter text-webWhite mt-1 "
                    >
                      {t.step_3}
                    </div>
                  </div>
                  <div className={`text-sm text-webWhite ${locale === '/' ? 'pr-2 md:pr-8 text-xl  md:text-lg' : 'pr-2 md:pl-8 md:text-sm'}`}>
                    {t.step_3_content}
                  </div>
                </motion.div>

                <motion.div className={`flex  ${locale === '/' ?  'gap-x-4 w-[350px]' : 'gap-x-2'}`}>
                  <div className="">
                    <div
                      className="w-7 h-7 flex justify-center items-center rounded-full
                 bg-webHowToEnter text-webWhite mt-1  text-sm"
                    >
                      {t.step_4}
                    </div>
                  </div>
                  <div className={`text-sm  text-webWhite ${locale === '/' ? 'pr-2 md:pr-8 text-xl  md:text-lg' : 'pr-2 md:pl-8 md:text-sm'}`}>
                    {t.step_4_content}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
      </div>
      
      <motion.div {...motionSettingstop2bottom} className={`
        ${locale === "/"
        ? "z-10 md:absolute right-3 md:right-10 md:max-w-[70%] -bottom-10 mt-14  mr-3"
        : "z-10 md:absolute left-3 md:left-10  w-full md:max-w-[70%] -bottom-14 mt-14  md:-bottom-20 -mr-3"}
        `}>
        <Image
          src={locale === "/" ? howtoenter : howtoenter_ar}
          alt="howtoenter"
          placeholder="blur"
          className=" z-40 "
        />
      </motion.div>
      
    </div>
  )
}

export default HowToEnter
