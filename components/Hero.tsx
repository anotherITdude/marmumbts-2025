"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

// Import new images from 2025 folder
import backtoschool from "../public/2025/backtoschool.png";
import winlist from "../public/2025/winlist.png";
import hero from "../public/2025/hero.png";

const Hero = () => {
  const motionSettings = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const motionSettingsStagger = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-auto overflow-hidden relative">
      <Navbar />

      <div className="relative z-10 px-4 sm:px-6 md:px-10 py-4 md:py-0 md:pb-5">
        {/* Main Flex Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Left Section - Back to School + Win List */}
          <motion.div
            {...motionSettings}
            className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto"
          >
            {/* Back to School Image */}
            <div className="flex justify-center">
              <Image
                src={backtoschool}
                alt="Back to School"
                className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Win List Image */}
            <div className="flex justify-center">
              <Image
                src={winlist}
                alt="Win List - 50 Winners of 4 Tickets Each"
                className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Right Section - Hero Image */}
          <motion.div
            {...motionSettingsStagger}
            className="flex justify-center lg:justify-end w-full lg:w-auto mt-4 lg:mt-0"
          >
            <Image
              src={hero}
              alt="Hero Image"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Additional decorative elements can be added here */}
        <div className="mt-4 sm:mt-6 lg:mt-8 text-center">
          {/* You can add any additional hero content here */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
