"use client";
import React from "react";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  const locale = usePathname();
  return (
    <div
      dir={`${locale === "/ar" ? "ltr" : "ltr"}`}
      className="max-w-[99%] lg:max-w-[1000px] pt-2 md:pt-[50px] pb-2 md:pb-[50px] mx-auto rounded-b-3xl relative min-h-screen"
    >
      {/* Navbar Header Image - positioned sticky at the top */}
      <div className="sticky top-0 z-50 bg-white w-full">
        <Image
          src="/2025/navbar_header.png"
          alt="Notepad Header"
          width={1000}
          height={120}
          className="w-full h-auto object-cover object-top"
          priority
        />
        {/* White background overlay to hide contt behind */}
        <div className="absolute inset-0 -z-10 bg-bgMain"></div>
      </div>

      {/* Content area with notepad lines starting after header */}
      <div
        className="relative min-h-screen bg-white rounded-b-3xl overflow-x-hidden"
        style={{
          backgroundImage: `repeating-linear-gradient(
            transparent 0px,
            transparent 30px,
            #e8f0f8 30px,
            #e8f0f8 32px
          )`,
          backgroundSize: "100% 32px",
          paddingTop: "2px",
        }}
      >
        {/* Red margin line - starts after header */}
        <div className="absolute left-[7%]  md:left-[8%] -top-[0px] bottom-0 w-0.5 bg-red-300 z-10 opacity-[.3]"></div>

        {/* Main content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

export default Container;
