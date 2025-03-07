import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "darken" | "light" | "custom";
  size?: "sm" | "md" | "lg" | string;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  customColor?: string;
  customPadding?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  variant = "primary",
  size = "md",
  className = "",
  customColor = "",
  customPadding = "",
  onClick,
}) => {
  const variantClasses = {
    primary: "bg-primary hover:bg-primary/80 text-black",
    darken: "bg-darken hover:bg-darken/80 text-white",
    light: "bg-white hover:bg-gray-400 text-darken",
    custom: customColor,
  }[variant];

  const sizeClasses =
    {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    }[size] || customPadding;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded cursor-pointer font-medium transition-all duration-300 ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
