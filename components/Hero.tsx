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
    <div className="min-h-auto  overflow-hidden">
      {/* Background pattern - lined notebook paper effect */}
      <div className=" inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(90deg, transparent 0%, transparent 40px, #e5e7eb 40px, #e5e7eb 41px, transparent 41px),
            linear-gradient(0deg, transparent 0%, transparent 24px, #e5e7eb 24px, #e5e7eb 25px, transparent 25px)
          `,
            backgroundSize: "50px 25px",
          }}
        >
          {/* Red margin line */}
          <div className="absolute left-0 top-0 w-1 h-full bg-red-500"></div>
        </div>
      </div>

      <Navbar />

      <div className="relative z-10 px-4 py-8">
        {/* Main Flex Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          {/* Left Section - Back to School + Win List */}
          <motion.div {...motionSettings} className="flex flex-col gap-8">
            {/* Back to School */}
            <Image
              src={backtoschool}
              alt="Back to School Winning"
              className="w-full max-w-[450px] h-auto"
              priority
            />

            {/* Win List */}
            <Image
              src={winlist}
              alt="Win List - Prizes"
              className="w-full max-w-[300px] h-auto"
            />
          </motion.div>

          {/* Right Section - Hero */}
          <motion.div
            {...motionSettingsStagger}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src={hero}
              alt="Hero Character"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
