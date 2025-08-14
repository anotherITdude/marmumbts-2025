"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import backtoschool_title from "../public/2025/backtoschool_title.png";
import backtoschool_title_ar from "../public/2025/backtoschool_title_ar.png";

import backtoschool_book from "../public/2025/backtoschool_book.png";
import smiley_w_shadow from "../public/2025/smiley_wo_shadow.png";
import Image from "next/image";

const BackToSchool = () => {
  const scrollY = useMotionValue(0);
  const translateX = useMotionValue(0);
  const rotate = useSpring(scrollY, { stiffness: 50, damping: 20 });
  const x = useSpring(translateX, { stiffness: 50, damping: 20 });

  // Track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Convert scroll to rotation (every 500px = 360 degrees) - only for desktop
      const rotationValue = isMobile ? 0 : (currentScrollY / 500) * 360;
      // Convert scroll to horizontal movement (every 500px = 100px movement)
      const translateValue = (currentScrollY / 500) * 100;

      scrollY.set(rotationValue);
      translateX.set(translateValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, translateX, isMobile]);

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
    <div className="min-h-auto px-4 md:px-10 py-10 md:py-10 relative md:overflow-hidden">
      {/* Smiley Image - Absolute positioned with rolling animation (desktop) or just horizontal movement (mobile) */}
      <div className="absolute top-4 -left-[10%] md:left-[8.5%] transform -translate-x-1 md:top-12  md:transform-none z-10">
        <motion.div
          style={{
            rotate: isMobile ? 0 : rotate,
            x,
          }}
          className="w-12 h-12 md:w-20 md:h-20"
        >
          <Image src={smiley_w_shadow} alt="Smiley" className="w-full h-full" />
        </motion.div>
      </div>

      {/* Book Image - Absolute positioned with floating animation */}
      <div className="absolute -top-2 -left-4 md:top-32 md:-left-12 z-10">
        <motion.div
          animate={{
            x: [0, -2.2, 2.2, -1.1, 0],
            y: [0, -1.1, 1.1, -2.2, 0],
            rotate: [-0.55, 0.55, -1.1, 0.55, -0.55],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 5.5,
          }}
        >
          <Image
            src={backtoschool_book}
            alt="School Book"
            className="w-20 h-auto md:w-60 opacity-90"
          />
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="mx-auto md:pl-[30%] relative z-20 pt-8 md:pt-0">
        <div className="flex">
          <div className="flex-1 md:block hidden"></div>
          <div
            className={`flex flex-col items-center md:items-end md:text-right ml-3 md:ml-0 
          space-y-4 md:space-y-6 max-w-4xl w-full md:w-auto ${
            locale === "/" ? "text-left" : "text-right"
          }`}
          >
            {/* Title Image */}
            <motion.div
              {...motionSettingstop2bottom}
              className={`w-full max-w-xs md:max-w-lg flex ml-2 md:ml-0 md:justify-end ${
                locale === "/" ? "justify-center" : "justify-end"
              }`}
            >
              <Image
                src={
                  locale === "/" ? backtoschool_title : backtoschool_title_ar
                }
                alt="Back to School"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.div
              {...motionSettingstop2bottom}
              className="w-full px-2 md:px-0 pt-2 md:pt-0"
            >
              <h2
                className={`text-webPara ${
                  locale === "/"
                    ? "font-DINCondensed-Bold text-lg md:text-lg leading-relaxed"
                    : "font-DINArabic-CondBold text-lg md:text-lg leading-relaxed"
                } `}
                dir={locale === "/" ? "ltr" : "rtl"}
              >
                {t.back_to_school_subtitle}
              </h2>
            </motion.div>

            {/* Main Promotional Text */}
            <motion.div
              {...motionSettingsleft2right}
              className="w-full space-y-3 md:space-y-4 px-2 md:px-0"
            >
              <p
                className={`text-webPara ${
                  locale === "/"
                    ? "font-DINCondensed-Bold text-lg md:text-lg leading-relaxed"
                    : "font-DINArabic-CondBold text-lg md:text-lg leading-relaxed"
                } `}
                dir={locale === "/" ? "ltr" : "rtl"}
              >
                {t.back_to_school_main_text}
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              {...motionSettingsright2left}
              className="w-full px-2 md:px-0"
            >
              <p
                className={`text-webPara ${
                  locale === "/"
                    ? "font-DINCondensed-Bold text-lg md:text-lg leading-relaxed"
                    : "font-DINArabic-CondBold text-lg md:text-lg leading-relaxed"
                }`}
                dir={locale === "/" ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{ __html: t.back_to_school_contact }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackToSchool;
