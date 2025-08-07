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
    <div id="terms" className="relative overflow-x-hidden">
      <Section>
        <div className="relative w-full max-w-6xl mx-auto px-10 py-8">
          {/* Title Image */}
          <div
            className={`mb-8 ${
              locale !== "/" ? "flex justify-end" : "flex justify-start"
            }`}
          >
            <div className="w-auto max-w-lg">
              <Image
                src={terms_title}
                alt="Terms & Conditions"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="relative">
            {/* Pen and Cup Images - Top Right */}
            <div className=" flex gap-4">
              <motion.div
                className="absolute -top-40 right-[20%]"
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
                <Image src={terms_pen} alt="Pen" className="w-[120px]" />
              </motion.div>
              <motion.div
                className="absolute -top-40 -right-[10%]"
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
                <Image src={terms_cup} alt="Trophy Cup" className="w-[160px]" />
              </motion.div>
            </div>

            {/* Terms Content */}
            <div className="max-w-4xl mx-auto px-4 md:px-0">
              <div className="bg-transparent">
                <ol
                  className={`list-decimal space-y-6 text-webPara leading-relaxed ${
                    locale === "/"
                      ? "font-DINCondensed-Bold text-lg md:text-md pl-6"
                      : "font-DINCondensed-Bold text-lg md:text-md pr-8"
                  }`}
                  style={{
                    marginLeft: locale === "/" ? "20px" : "0",
                    marginRight: locale !== "/" ? "20px" : "0",
                  }}
                >
                  <li className="mb-4">{t.terms1}</li>
                  <li className="mb-4">{t.terms2}</li>
                  <li className="mb-4">{t.terms3}</li>
                  <li className="mb-4">{t.terms4}</li>
                  <li className="mb-4">{t.terms5}</li>
                  <li className="mb-4">{t.terms6}</li>
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
