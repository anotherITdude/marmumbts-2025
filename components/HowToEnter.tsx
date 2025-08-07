"use client";
import React from "react";
import { motion } from "framer-motion";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import howtoenter_title from "../public/2025/howtoenter_title.png";
import howtoenter_sticker from "../public/2025/howtoenter_sticker.png";
import Image from "next/image";

const HowToEnter = () => {
  const motionSettingstop2bottom = {
    initial: { opacity: 0.5, y: -15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsleft2right = {
    initial: { opacity: 0.5, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsright2left = {
    initial: { opacity: 0.5, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const locale = usePathname();
  const t = locale === "/" ? en : ar;

  return (
    <div className=" min-h-auto px-4 md:px-12 py-10 md:py-10 relative overflow-hidden">
      <div className="mx-auto">
        {/* Flex Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Side - Title and Content */}
          <motion.div
            {...motionSettingsleft2right}
            className={`w-full lg:w-[50%]  space-y-8 ${
              locale !== "/" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {/* Title Image */}
            <div
              className={`${
                locale !== "/" ? "flex justify-end" : "flex justify-start"
              }`}
            >
              <div className="w-auto max-w-sm">
                <Image
                  src={howtoenter_title}
                  alt="How to Enter"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Steps Content */}
            <div className="space-y-6 md:space-y-8 md:ml-10 text-webPara ">
              {/* Step 1 */}
              <div
                className={`flex items-start gap-4 ${
                  locale !== "/" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 md:w-8 md:h-8 flex justify-center items-center rounded-full border border-1 border-webBlue  text-webBlue md:pt-1 font-DINCondensed-Bold text-lg">
                    {t.step_1}
                  </div>
                </div>
                <div className=" font-DINCondensed-Bold text-lg md:text-md leading-relaxed">
                  {t.step_1_content}
                </div>
              </div>

              {/* Step 2 */}
              <div
                className={`flex items-start gap-4 ${
                  locale !== "/" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 md:w-8 md:h-8 flex justify-center items-center rounded-full border border-1 border-webBlue  text-webBlue md:pt-1 font-DINCondensed-Bold text-lg">
                    {t.step_2}
                  </div>
                </div>
                <div className=" mt-1 font-DINCondensed-Bold text-lg md:text-md leading-relaxed">
                  {t.step_2_content}
                </div>
              </div>

              {/* Step 3 */}
              <div
                className={`flex items-start gap-4 ${
                  locale !== "/" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 md:w-8 md:h-8 flex justify-center items-center rounded-full border border-1 border-webBlue  text-webBlue md:pt-1 font-DINCondensed-Bold text-lg">
                    {t.step_3}
                  </div>
                </div>
                <div className=" font-DINCondensed-Bold text-lg md:text-md leading-relaxed">
                  {t.step_3_content}
                </div>
              </div>

              {/* Step 4 */}
              <div
                className={`flex items-start gap-4 ${
                  locale !== "/" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 md:w-8 md:h-8 flex justify-center items-center rounded-full border border-1 border-webBlue  text-webBlue md:pt-1 font-DINCondensed-Bold text-lg">
                    {t.step_4}
                  </div>
                </div>
                <div className=" mt-1 font-DINCondensed-Bold text-lg md:text-md leading-relaxed">
                  {t.step_4_content}
                </div>
              </div>

              {/* Additional Text */}
              <div className={`mt-8 ${locale !== "/" ? "text-right" : ""}`}>
                <p className="text-[#2B5CE6] font-DINCondensed-Bold font-bold text-lg md:text-md ">
                  The more valid entries you submit, the higher your chances of
                  winning!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Sticker Image */}
          <motion.div
            {...motionSettingsright2left}
            className={`w-full lg:w-[60%] flex justify-center lg:justify-end ${
              locale !== "/" ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="w-full max-w-xl">
              <Image
                src={howtoenter_sticker}
                alt="Marmum Products"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowToEnter;
