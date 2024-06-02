import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Item } from "@/types";

interface CardProps {
  item: Item;
}

const Card = ({ item }: CardProps) => {
  return (
    <div className="flex gap-5">
      <div className="relative flex-[2] h-[200px]">
        <Image fill src={item.img} alt={item.title} />
      </div>
      <div className="flex-[3] flex flex-col gap-5">
        <h2
          className="text-[20px] font-bold text-soft-black transition-all duration-3 00
         hover:text-black hover:scale-[1.01]"
        >
          <Link href={`/${item.id}`}>{item.title.substring(0, 20)}...</Link>
        </h2>
        <div className="text-sm flex items-center gap-1 text-gray-500">
          <Image
            width={20}
            height={20}
            src="/assets/pin.png"
            alt="Address icon"
          />
          <p>{item.address}</p>
        </div>
        <p className="w-fit p-1 bg-accent-300 rounded-md">${item.price}</p>
        <div className="flex justify-between items-center gap-2 flex-wrap">
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-2 px-1 py-2 text-sm rounded-md bg-[whitesmoke]">
              <Image
                width={20}
                height={20}
                src="/assets/bed.png"
                alt="Bedroom icon"
              />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="flex items-center gap-2 px-1 py-2 text-sm rounded-md bg-[whitesmoke]">
              <Image
                width={20}
                height={20}
                src="/assets/bath.png"
                alt="Bathroom icon"
              />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1 border-2 rounded-md cursor-pointer">
              <Image
                width={20}
                height={20}
                src="/assets/save.png"
                alt="Save image icon"
              />
            </div>
            <div className="p-1 border-2 rounded-md cursor-pointer">
              <Image
                width={20}
                height={20}
                src="/assets/chat.png"
                alt="Chat image icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
