"use client";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import en from "../locales/en";
import ar from "../locales/ar";
import { CAMPAIGN_CONFIG } from "@/lib/config";

const CampaignEnded = () => {
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

  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  const isArabic = locale === "/ar";

  return (
    <div className="relative py-20 px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-2xl mx-auto">
          {/* Main title */}
          <motion.div {...motionSettingsTitle} className="mb-8">
            <h2
              className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 ${
                isArabic ? "font-DINArabic-CondBold" : ""
              }`}
            >
              {isArabic ? "انتهت الحملة" : "Campaign Ended"}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div {...motionSettings} className="mb-8">
            <p
              className={`text-lg md:text-xl text-gray-600 leading-relaxed ${
                isArabic ? "font-DINArabic-CondBold" : ""
              }`}
            >
              {isArabic
                ? CAMPAIGN_CONFIG.CLOSURE_MESSAGE.ar
                : CAMPAIGN_CONFIG.CLOSURE_MESSAGE.en}
            </p>
          </motion.div>

          {/* Decorative card */}
          <motion.div
            {...motionSettings}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 max-w-md mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <p
              className={`text-gray-600 text-sm ${
                isArabic ? "font-arabic" : ""
              }`}
              style={{
                fontFamily: isArabic
                  ? "NotoKufiArabic-Regular, Arial"
                  : "CircularStd-Book, Arial",
              }}
            >
              {isArabic
                ? "شكراً لجميع المشاركين"
                : "Thank you to all participants"}
            </p>
          </motion.div>

          {/* Social media or contact info could go here */}
          <motion.div {...motionSettings} className="mt-8">
            <p
              className={`text-sm text-gray-500 ${
                isArabic ? "font-arabic" : ""
              }`}
              style={{
                fontFamily: isArabic
                  ? "NotoKufiArabic-Regular, Arial"
                  : "CircularStd-Book, Arial",
              }}
            >
              {isArabic
                ? "تابعونا للحصول على آخر الأخبار والحملات القادمة"
                : "Follow us for updates on future campaigns"}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CampaignEnded;
