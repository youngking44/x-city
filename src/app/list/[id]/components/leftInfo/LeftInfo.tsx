import { userData } from "@/lib/dummydata";
import { ItemInfo } from "@/types";
import Image from "next/image";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import ImageGallery from "../imageGallery/ImageGallery";

interface LeftInfoProps {
  data: ItemInfo;
}

const LeftInfo = ({ data }: LeftInfoProps) => {
  return (
    <div className="flex-[3] flex flex-col gap-5 pt-[160px]">
      <ImageGallery images={data.images} />
      <div className="flex justify-between flex-wrap gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">{data.title}</h2>
          <div className="flex items-center gap-2 text-sm">
            <MdLocationPin size={20} />
            <span className="font-[500] opacity-70">{data.address}</span>
          </div>
          <p className="self-start p-1 bg-accent-300">$ {data.price}</p>
        </div>
        <div className="w-[120px] py-4 flex flex-col items-center gap-2 bg-accent-300">
          <div className="relative w-[50px] h-[50px]">
            <Image
              fill
              src={userData.img}
              alt=""
              className="object-cover rounded-[50%]"
            />
          </div>
          <span className="font-bold opacity-85">{userData.name}</span>
        </div>
      </div>
      <p>{data.description}</p>
    </div>
  );
};

export default LeftInfo;
