"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import Image from "next/image";
import terms_title from "@/public/2025/terms_title.png";
import terms_pen from "@/public/2025/terms_pen.png";
import terms_cup from "@/public/2025/terms_cup.png";

const Terms = () => {
  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  return (
    <div id="terms" className="relative ">
      <Section>
        <div className="relative w-full max-w-6xl mx-auto px-1 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8">
          {/* Title Image */}
          <div
            className={`mb-6 sm:mb-8 ${
              locale !== "/" ? "flex justify-start" : "flex justify-start"
            }`}
          >
            <div className="w-auto ml-2 md:ml-0 max-w-[110%] md:max-w-lg">
              <Image
                src={terms_title}
                alt="Terms & Conditions"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="relative ">
            {/* Pen and Cup Images - Top Right */}
            <div className="flex gap-4 ">
              <motion.div
                className={`absolute -top-[22%]   md:right-[20%] z-10 ${
                  locale !== "/" ? "md:-top-32" : "md:-top-32"
                }`}
                animate={{
                  x: [0, -5, 5, -3, 0],
                  y: [0, -3, 2, -4, 0],
                  rotate: [-2, 1, -3, 2, -2],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0,
                }}
              >
                <Image
                  src={terms_pen}
                  alt="Pen"
                  className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px]"
                />
              </motion.div>
              <motion.div
                className={`absolute -top-[29%]  -right-[5%]  md:-right-[10%] z-10 ${
                  locale !== "/" ? "md:-top-56" : "md:-top-56"
                }`}
                animate={{
                  x: [0, 3, -4, 6, 0],
                  y: [0, 4, -2, 3, 0],
                  rotate: [12, 15, 9, 14, 12],
                }}
                transition={{
                  duration: 5.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.5,
                }}
              >
                <Image
                  src={terms_cup}
                  alt="Trophy Cup"
                  className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[160px]"
                />
              </motion.div>
            </div>

            {/* Terms Content */}
            <div
              className="max-w-4xl mx-auto px-1.5 sm:px-4 md:px-0"
              dir={locale === "/" ? "ltr" : "rtl"}
            >
              <div className="bg-transparent">
                <ol
                  className={`list-decimal space-y-4 sm:space-y-6 text-webPara leading-relaxed ${
                    locale === "/"
                      ? "font-DINCondensed-Bold text-lg  md:text-lg pl-4 sm:pl-6"
                      : "font-DINCondensed-Bold text-md  md:text-lg pr-4 sm:pr-6 md:pr-8"
                  }`}
                  style={{
                    marginLeft: locale === "/" ? "clamp(10px, 2vw, 20px)" : "0",
                    marginRight:
                      locale !== "/" ? "clamp(10px, 2vw, 20px)" : "0",
                  }}
                >
                  <li className="mb-3 sm:mb-4">{t.terms1}</li>
                  <li className="mb-3 sm:mb-4">{t.terms2}</li>
                  <li className="mb-3 sm:mb-4">{t.terms3}</li>
                  <li className="mb-3 sm:mb-4">{t.terms4}</li>
                  <li className="mb-3 sm:mb-4">{t.terms5}</li>
                  <li className="mb-3 sm:mb-4">{t.terms6}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Terms;
