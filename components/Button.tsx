"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  arrow?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  arrow,
  className,
}) => {
  const locale = usePathname();

  const arrowSign = () => {
    if (locale === "/") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="w-3 h-3 group-hover:translate-x-1 transition"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3.5}
          stroke="currentColor"
          className="w-3 h-3 group-hover:-translate-x-1 transition"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      );
    }
  };

  return (
    <div className="relative group">
      {/* Main button container with 3D effect */}
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "relative overflow-hidden transition-all duration-200 rounded-full uppercase tracking-wider",
          "bg-webBlue text-webWhite",
          "hover:bg-webBlue/90 active:translate-y-1",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Size variants
          small ? "h-10 px-6 py-2" : "h-12 px-14 py-1",
          // Font styling based on locale
          locale === "/"
            ? "font-BebasNeue text-md"
            : "font-NotoKufiArabic-Regular text-md",
          small && "text-lg",
          className,
        )}
        style={{
          // 3D effect using box-shadow
          boxShadow: `
            0 1.5px 0 0 white,
            0 4px 0 0 #0075C9,
            0 8px 15px rgba(0, 0, 0, 0.2)
          `,
        }}
      >
        {/* Button content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {locale === "/" ? (
            <>
              {label}
              {arrow && arrowSign()}
            </>
          ) : (
            <>
              {arrow && arrowSign()}
              {label}
            </>
          )}
        </span>

        {/* Pseudo-element for additional 3D effect */}
      </button>
    </div>
  );
};

export default Button;
