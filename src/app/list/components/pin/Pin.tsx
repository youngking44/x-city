import { Item } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Marker, Popup } from "react-leaflet";

interface PinProps {
  item: Item;
}

const Pin = ({ item }: PinProps) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex items-center gap-1">
          <Image width={100} height={120} src={item.img} alt={item.title} />

          <div className="flex flex-col gap-1">
            <Link href={item.title}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <span>$ {item.price}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
