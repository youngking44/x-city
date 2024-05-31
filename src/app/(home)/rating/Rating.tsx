import React from "react";

const Rating = () => {
  return (
    <div className="flex justify-between gap-2">
      <div className="flex flex-col">
        <span className="text-lg md:text-[25px] font-bold">10+</span>
        <span className="opacity-70">Years of Experience</span>
      </div>
      <div className="flex flex-col">
        <span className="text-lg md:text-[25px] font-bold">150</span>
        <span className="opacity-70">Award Gained</span>
      </div>
      <div className="flex flex-col">
        <span className="text-lg md:text-[25px] font-bold">3000+</span>
        <span className="opacity-70">Available Properties</span>
      </div>
    </div>
  );
};

export default Rating;
