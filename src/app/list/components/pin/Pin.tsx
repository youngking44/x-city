import { Item } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";

interface PinProps {
  item: Item;
}

const Pin = ({ item }: PinProps) => {
  const Icon = icon({
    iconUrl: "/assets/map-pin.png",
    iconSize: [50, 50],
  });

  return (
    <Marker position={[item.latitude, item.longitude]} icon={Icon}>
      <Popup className="w-max">
        <div className="flex items-center gap-5">
          <Image width={64} height={48} src={item.img} alt={item.title} />

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
