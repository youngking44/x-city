import React from "react";

interface ButtonProps {
  type: string;
  children: React.ReactNode;
}

const Button = ({ type, children }: ButtonProps) => {
  return (
    <button
      className={`px-5 py-2 rounded-md cursor-pointer ${
        type === "primary" ? "bg-accent-500" : ""
      } ${type === "accent" ? "bg-accent-300" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
