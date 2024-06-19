import { userData } from "@/lib/dummydata";
import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="relative w-[45px] h-[45px] rounded-[50%] overflow-hidden">
      <Image
        fill
        src={userData.img}
        alt="Profile image"
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;
