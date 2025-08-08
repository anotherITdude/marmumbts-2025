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
    <div
      dir="ltr"
      className="min-h-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10 relative overflow-x-hidden w-full max-w-full"
    >
      <div className="mx-auto max-w-full">
        {/* Flex Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-16 items-start max-w-full">
          {/* Left Side - Title and Content */}
          <motion.div
            {...motionSettingsleft2right}
            className="w-full lg:w-[50%] space-y-4 sm:space-y-6 lg:space-y-8 max-w-full lg:order-1"
          >
            {/* Title Image */}
            <div
              className={`${
                locale !== "/" ? "flex justify-end" : "flex justify-end"
              }`}
            >
              <div className="w-auto max-w-[240px] sm:max-w-[270px] md:max-w-[360px] ml-2 md:ml-0">
                <Image
                  src={howtoenter_title}
                  alt="How to Enter"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Steps Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 ml-5 md:ml-10 text-webPara pt-2 md:pt-0">
              {/* Step 1 */}
              <div
                className={`flex items-start gap-3 sm:gap-4 ${
                  locale !== "/" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 md:w-8 md:h-8 flex justify-center pt-1 md:pt-0 items-center rounded-full border border-1 border-webBlue text-webBlue font-DINCondensed-Bold text-sm md:text-lg">
                    {t.step_1}
                  </div>
                </div>
                <div className="font-DINCondensed-Bold  text-lg md:text-md leading-relaxed">
                  {t.step_1_content}
                </div>
              </div>

              {/* Step 2 */}
              <div
                className={`flex items-start gap-3 sm:gap-4 ${
                  locale !== "/" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 md:w-8 md:h-8 flex justify-center pt-1 md:pt-0 items-center rounded-full border border-1 border-webBlue text-webBlue font-DINCondensed-Bold text-sm md:text-lg">
                    {t.step_2}
                  </div>
                </div>
                <div className="mt-1 font-DINCondensed-Bold text-lg md:text-md leading-relaxed">
                  {t.step_2_content}
                </div>
              </div>

              {/* Step 3 */}
              <div
                className={`flex items-start gap-3 sm:gap-4 ${
                  locale !== "/" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 md:w-8 md:h-8 flex justify-center pt-1 md:pt-0 items-center rounded-full border border-1 border-webBlue text-webBlue font-DINCondensed-Bold text-sm md:text-lg">
                    {t.step_3}
                  </div>
                </div>
                <div className="font-DINCondensed-Bold text-lg md:text-md leading-relaxed">
                  {t.step_3_content}
                </div>
              </div>

              {/* Step 4 */}
              <div
                className={`flex items-start gap-3 sm:gap-4 ${
                  locale !== "/" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 md:w-8 md:h-8 flex justify-center pt-1 md:pt-0 items-center rounded-full border border-1 border-webBlue text-webBlue font-DINCondensed-Bold text-sm md:text-lg">
                    {t.step_4}
                  </div>
                </div>
                <div className="mt-1 font-DINCondensed-Bold text-lg md:text-md leading-relaxed">
                  {t.step_4_content}
                </div>
              </div>

              {/* Additional Text */}
              <div
                className={`mt-6 sm:mt-8 ${locale !== "/" ? "text-right" : ""}`}
              >
                <p className="text-[#2B5CE6] font-DINCondensed-Bold font-bold text-lg md:text-md">
                  {t.multiple_entries_text}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Sticker Image */}
          <motion.div
            {...motionSettingsright2left}
            className="w-full lg:w-[60%] flex justify-center ml-4 md:ml=0 lg:justify-end max-w-full lg:order-2"
          >
            <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
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
