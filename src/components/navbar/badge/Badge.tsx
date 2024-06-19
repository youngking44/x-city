import React from "react";

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div
        className="w-6 h-6 rounded-[50%] text-sm font-normal flex justify-center 
        items-center absolute top-[-15px] right-[-10px] text-white bg-red-500"
      >
        3
      </div>
      {children}
    </div>
  );
};

export default Badge;
