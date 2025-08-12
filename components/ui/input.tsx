import * as React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    const locale = usePathname();

    return (
      <input
        type={type}
        className={cn(
          // Base styles
          "w-full h-14 px-6 rounded-full outline-none transition-all duration-200",
          // Background and border
          "bg-webLightBlue border-2 border-blue-200",
          // Text and placeholder colors
          "text-black placeholder-black",
          // Focus states
          "focus:border-blue-400 focus:bg-blue-50",
          // Disabled states
          "disabled:opacity-70 disabled:cursor-not-allowed",
          // Error states
          error ? "border-red-500 bg-red-50" : "",
          // Font styling based on locale
          locale === "/"
            ? "font-DINCondensed-Bold tracking-wider text-md"
            : "font-DINArabic-CondBold text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

// FormField wrapper component for handling errors
export interface FormFieldProps {
  children: React.ReactNode;
  error?: string;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  children,
  error,
  className,
}) => {
  const locale = usePathname();

  return (
    <div className={cn("form-field w-full", className)}>
      <div className="relative">
        {children}
        {error && (
          <p
            className={`text-red-500 text-xs mt-1 ${
              locale === "/" ? "ml-6" : "mr-6"
            } ${
              locale === "/"
                ? "font-DINCondensed-Bold"
                : "font-DINArabic-CondBold"
            } ${locale === "/" ? "text-left" : "text-right"}`}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export { Input, FormField };
