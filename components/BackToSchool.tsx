"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import backtoschool_title from "../public/2025/backtoschool_title.png";
import backtoschool_book from "../public/2025/backtoschool_book.png";
import smiley_w_shadow from "../public/2025/smiley_wo_shadow.png";
import Image from "next/image";

const BackToSchool = () => {
  const scrollY = useMotionValue(0);
  const translateX = useMotionValue(0);
  const rotate = useSpring(scrollY, { stiffness: 50, damping: 20 });
  const x = useSpring(translateX, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Convert scroll to rotation (every 500px = 360 degrees)
      const rotationValue = (currentScrollY / 500) * 360;
      // Convert scroll to horizontal movement (every 500px = 100px movement)
      const translateValue = (currentScrollY / 500) * 100;

      scrollY.set(rotationValue);
      translateX.set(translateValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, translateX]);

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
    <div className=" min-h-auto px-4 md:px-10 py-10 md:py-10 relative overflow-hidden">
      {/* Smiley Image - Absolute positioned with rolling animation */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 md:top-12 md:left-[8.5%] md:transform-none z-10">
        <motion.div style={{ rotate, x }} className="w-16 h-16 md:w-20 md:h-20">
          <Image
            src={smiley_w_shadow}
            alt="Smiley"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Book Image - Absolute positioned */}
      <div className="absolute top-20 -left-8 md:top-32 md:-left-12 z-10">
        <Image
          src={backtoschool_book}
          alt="School Book"
          className="w-32 h-auto md:w-60 opacity-90"
        />
      </div>

      <div className="mx-auto md:pl-[30%] relative z-20">
        {/* Main Content Container */}
        <div className="flex">
          <div className="flex-1"></div>
          <div className="flex flex-col items-end text-right space-y-6 max-w-4xl">
            {/* Title Image */}
            <motion.div
              {...motionSettingstop2bottom}
              className="w-full max-w-lg flex justify-end"
            >
              <Image
                src={backtoschool_title}
                alt="Back to School"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.div {...motionSettingstop2bottom} className="w-full">
              <h2 className="text-gray-700 font-DINCondensed-Bold text-lg md:text-md leading-relaxed">
                Kick off the school year with Marmum for a chance to win
                exciting prizes!
              </h2>
            </motion.div>

            {/* Main Promotional Text */}
            <motion.div
              {...motionSettingsleft2right}
              className="w-full space-y-4"
            >
              <p className="text-gray-800 font-DINCondensed-Bold text-lg md:text-md leading-relaxed">
                We&apos;re giving away 5 school fee vouchers worth AED 15,000
                each, 10 iPad Pros, 20 AirPods, and 100 Figure Packs. To enter,
                simply purchase any Marmum milk, yoghurt, or laban products
                during the promotion period, upload your receipt and you&apos;re
                in the draw to win!
              </p>

              <p className="text-gray-800 font-DINCondensed-Bold text-lg md:text-md leading-relaxed">
                The offer is valid from 15 August to 30 September 2025, and all
                prizes must be claimed by 25 November 2025.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div {...motionSettingsright2left} className="w-full">
              <p className="text-gray-700 font-DINCondensed-Bold text-lg md:text-md leading-relaxed">
                For any enquiries related to the promotion, please reach out to
                us at{" "}
                <a
                  href="mailto:marketing.comms@marmum.com"
                  className="text-[#2B5CE6] hover:underline font-bold"
                >
                  marketing.comms@marmum.com
                </a>{" "}
                and we will get back to you.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackToSchool;
