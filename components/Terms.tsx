"use client";
import React from "react";
import Section from "./Section";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

const Terms = () => {
  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  return (
    <div
      id="terms"
      className="text-webWhite bg-webAdventureBg"
     
    >
      <Section>
        <div
          className="w-full md:w-[90%] pl-4 pr-4 pt-0 md:pt-4 md:pl-6 "
          style={{ margin: "auto", marginTop: "3%" }}
        >
          <h1
            className={`  mb-4 md:mb-0 ${
              locale === "/"
                ? "font-Circular-Bold text-2xl md:text-2xl"
                : "text-3xl font-NotoKufiArabic-ExtraBold   md:text-2xl"
            }`}
          >
            {t.terms_heading}
          </h1>
          <ul
            className={`list-decimal mt-2 flex flex-col gap-y-1
          ${
            locale === "/"
              ? "font-Circular-Book text-sm md:text-sm pl-4"
              : "font-NotoKufiArabic-Regular text-sm md:text-sm pr-4"
          }
          `}
          >
            <li>{t.terms1}</li>
            <li>{t.terms2}</li>
            <li>{t.terms3}</li>
            <li>{t.terms4}</li>
            <li>{t.terms5}</li>
            <li>{t.terms6}</li>
          </ul>
          <div className="border-b-2 border-white opacity-35 mt-4 mb-4 -ml-2"></div>
          <div className={` opacity-45 text-xs ${locale === "/" ? "font-Circular-Book -ml-2" : "font-HelveticaNeueLTArabic-Roman -mr-2"}`}>
            {t.copywrite}</div>
        </div>
        
       
      </Section>
    </div>
  );
};

export default Terms;
