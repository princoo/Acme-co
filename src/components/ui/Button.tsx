import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  className,
  disabled = false,
  ...props
}) => {
  const baseStyles = "text-sm cursor-pointer font-semibold w-full rounded-full";

  const sizeStyles = {
    small: "text-sm px-3 py-1.5",
    medium: "text-base px-3 py-3",
    large: "text-lg p-2",
  };
  // const disabledStyles = disabled && "bg-secondary/40 cursor-not-allowed hover:bg-secondary/40 text-black";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/80",
    secondary: "bg-secondary text-white hover:bg-secondary/40",
    outline: "bg-[#C2E6FF] text-black hover:bg-primary/20",
  };

const combined = clsx(
  baseStyles,
  sizeStyles[size],
  disabled
    ? "bg-secondary/40 cursor-not-allowed text-black"
    : variantStyles[variant],
  className
);


  return (
    <button
      className={combined}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
