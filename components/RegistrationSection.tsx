"use client";
import React from "react";
import RegistrationForm from "./RegistrationForm";
import { motion } from "framer-motion";
import Image from "next/image";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

interface RegisterSectionInterface {
  title?: string;
}
const RegisterSection: React.FC<RegisterSectionInterface> = ({ title }) => {
  const motionSettings = {
    initial: { opacity: 0, x: 15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsh2 = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsButton = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1.5 },
  };

  const locale = usePathname();
  const t = locale === "/" ? en : ar;

  return (
    <div id="register">
      <div className="flex overflow-visible flex-col md:flex-row justify-evenly pb-0">
        <div className="flex w-full bg-webBlue pt-14  pb-14 md:pt-0 md:pb-0 justify-center min-h-[400px]">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
