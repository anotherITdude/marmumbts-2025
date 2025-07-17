"use client";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import en from "../locales/en";
import ar from "../locales/ar";
import Navbar from "./Navbar";

const ComingSoon = () => {
  const motionSettings = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const motionSettingsTitle = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, ease: "easeOut" },
  };

  const motionSettingsStagger = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.3 },
  };

  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  const isArabic = locale === "/ar";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-purple-400 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      ></motion.div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main title */}
          <motion.div {...motionSettingsTitle} className="mb-8">
            <h1
              className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 ${
                isArabic ? "font-arabic" : ""
              }`}
              style={{
                fontFamily: isArabic
                  ? "NotoKufiArabic-ExtraBold, Arial"
                  : "BebasNeue-Regular, Arial",
              }}
            >
              {t.coming_soon}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div {...motionSettingsStagger} className="mb-12">
            <p
              className={`text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto ${
                isArabic ? "font-arabic" : ""
              }`}
              style={{
                fontFamily: isArabic
                  ? "NotoKufiArabic-Regular, Arial"
                  : "CircularStd-Book, Arial",
              }}
            >
              {t.coming_soon_description}
            </p>
          </motion.div>

          {/* Animated loading dots */}
          <motion.div
            {...motionSettings}
            className="flex justify-center space-x-2 mb-12"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              ></motion.div>
            ))}
          </motion.div>

          {/* Decorative card */}
          <motion.div
            {...motionSettings}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-md mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"
                ></motion.div>
              </div>
            </div>
            <p
              className={`text-gray-600 ${isArabic ? "font-arabic" : ""}`}
              style={{
                fontFamily: isArabic
                  ? "NotoKufiArabic-Regular, Arial"
                  : "CircularStd-Book, Arial",
              }}
            >
              {isArabic
                ? "نبني شيئاً خاصاً للطلاب..."
                : "Building something special for students..."}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="url(#wave-gradient)"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient
              id="wave-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ComingSoon;
