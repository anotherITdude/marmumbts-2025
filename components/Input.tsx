"use client";
import { RefObject } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

interface InputProps {
  id: string;
  label: string;
  type: string;
  number?: boolean;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors | any;
  //ref?: RefObject<HTMLInputElement> | null;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  errors,
}) => {
  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  return (
    <div className="w-full relative">
      <input
        id={id}
        {...(type === "file"
          ? {
              accept: "image/jpeg, image/png",
              multiple: false,
            }
          : "")}
        disabled={disabled}
        {...register(id)}
        placeholder=" "
        type={type}
        className={`
          peer
          w-full
          pb-3
           
          ${
            locale === "/"
              ? "font-BebasNeue tracking-widest"
              : "font-NotoKufiArabic-Regular"
          }
          text-[12px]
          bg-webWhite 
          border-[1px]
          rounded-full
          px-5
          
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${errors[id] ? "border-webRed" : "border-webBlue"}
          ${errors[id] ? "focus:border-webRed" : "focus:border-black"}
          ${type === "file" ? "mt-0 pt-8" : "pt-6"}

        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute 
          
          ${locale === "/" ? "text-sm font-BebasNeue tracking-wider" : "text-sm font-NotoKufiArabic-Regular font-bold"}
          ${type === "file" ? "top-3 " : "top-4"}
          duration-150 
          transform
          -translate-y-3
          uppercase 
          
          
          z-10 
          origin-[0] 

          ${locale === "/" ? "left-5" : "right-5"}
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? "text-webRed" : "text-webBlue"}
          ${type === "file" ? "top-4 mt-2" : ""}
        `}
      >
        {errors[id] ? (
          <span className="uppercase text-xs md:text-xs">{errors[id]?.message}</span>
        ) : (
          label
        )}
      </label>
      <span className="text-sm ml-5 text-webRed animate-pulse"></span>
    </div>
  );
};

export default Input;
