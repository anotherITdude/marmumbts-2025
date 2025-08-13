"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo_eng from "../public/logo.png";
import logo_ar from "../public/logo.png";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import en from "../locales/en";
import ar from "../locales/ar";

const Navbar = () => {
  const locale = usePathname();
  const locales = ["en", "ar"];
  const finalLogo = locale === "/ar" ? logo_ar : logo_eng;
  const t = locale === "/" ? en : ar;
  return (
    <motion.nav
      className={`flex justify-between gap-x-2 sm:gap-x-4 -mb-00 z-50 relative px-3 sm:px-6 md:px-10 max-w-7xl mx-auto w-full`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-neosans-medium uppercase flex justify-start items-center gap-[3px]"
      >
        <div
          className={`-mt-2 sm:mt-6 md:mt-10 ${
            locale === "/ar" ? "order-2" : "order-1"
          }`}
        >
          <div className="rounded-lg -mt-8 md:-mt-16 ml-5 md:ml-12">
            <div className="flex items-center justify-center gap-0">
              {locales.map((lang, index) => (
                <React.Fragment key={lang}>
                  <Link
                    href={lang === "en" ? "/" : `/${lang}`}
                    className={`text-lg sm:text-lg transition-all duration-300 rounded px-0 py-1 flex items-center justify-center ${
                      locale === `/${lang}` || (locale === "/" && lang === "en")
                        ? "text-webBlue cursor-default pointer-events-none"
                        : "text-webPara hover:text-webBlue cursor-pointer"
                    }`}
                    style={{ fontFamily: "DINCondensed-Bold, sans-serif" }}
                    onClick={(e) => {
                      // Prevent click on active link
                      if (
                        locale === `/${lang}` ||
                        (locale === "/" && lang === "en")
                      ) {
                        e.preventDefault();
                        return;
                      }
                      // Force page refresh for proper language switching
                      e.preventDefault();
                      const newHref = lang === "en" ? "/" : `/${lang}`;
                      window.location.href = newHref;
                    }}
                  >
                    {lang === "ar" ? "AR" : "EN"}
                  </Link>

                  {index !== locales.length - 1 && (
                    <span className="text-webPara text-xs sm:text-sm px-1 -mt-1">
                      |
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={` pt-5 md:pt-4 ${locale === "/ar" ? "order-1" : "order-2"}`}
      >
        <Link href="/">
          <Image
            quality={100}
            placeholder="empty"
            src={finalLogo}
            alt="logo"
            className="w-[170px] sm:w-[140px] md:w-[150px] lg:w-[200px] pt-2 sm:pt-3 md:pt-4 -mt-6 sm:-mt-7 md:-mt-8 cursor-pointer"
          />
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
