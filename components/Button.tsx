"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
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
    <ShadcnButton
      onClick={onClick}
      disabled={disabled}
      variant={outline ? "outline" : "default"}
      size={small ? "sm" : "default"}
      className={cn(
        "group transition-all duration-200 rounded-full uppercase tracking-wider",
        // Custom font styling based on locale
        locale === "/"
          ? "font-BebasNeue text-sm"
          : "font-NotoKufiArabic-Regular text-xs",
        // Custom color styling
        outline
          ? "border-webBlue text-webBlue hover:bg-webBlue hover:text-webWhite"
          : "bg-webBlue text-webWhite hover:bg-webBlue/90",
        small && "text-md",
        className,
      )}
    >
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
    </ShadcnButton>
  );
};

export default Button;
