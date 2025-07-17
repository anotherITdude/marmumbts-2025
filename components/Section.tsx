'use client'
import React from "react";
import { twMerge } from "tailwind-merge";

interface SectionInterface {
  children?: React.ReactNode;
  className?:  string;
}

const Section: React.FC<SectionInterface> = ({ children, className }) => {
  return (
    <div className={`pt-8 pb-8 pl-4 pr-4 min-h-[400px] ${twMerge(className)}`}>
      {children}
    </div>
  );
};

export default Section;
