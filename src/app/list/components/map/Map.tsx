"use client";

import { Item } from "@/types";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/Pin";

interface MapProps {
  items: Item[];
}

const Map = ({ items }: MapProps) => {
  return (
    <MapContainer
      center={[52.4797, -1.90269]}
      zoom={7}
      scrollWheelZoom={false}
      className="w-full h-full rounded-md"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
