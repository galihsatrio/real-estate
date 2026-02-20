import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: "primary" | "secondary" | "outline" | "ghost";
   size?: "sm" | "md" | "lg";
}

export function Button({
   children,
   variant = "primary",
   size = "md",
   className = "",
   ...props
}: ButtonProps) {
   const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

   const variants = {
      primary: "bg-brand-blue text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20",
      secondary: "bg-brand-dark text-white hover:bg-zinc-800",
      outline: "border border-zinc-200 text-brand-dark hover:bg-zinc-50",
      ghost: "text-zinc-600 hover:text-brand-dark hover:bg-zinc-100",
   };

   const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-semibold",
   };

   return (
      <button
         className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
         {...props}
      >
         {children}
      </button>
   );
}
