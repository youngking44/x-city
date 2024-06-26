import Map from "@/app/list/components/map/Map";
import { ItemInfo } from "@/types";
import Image from "next/image";
import React from "react";
import "leaflet/dist/leaflet.css";

interface RightInfoProps {
  data: ItemInfo;
}

const RightInfo = ({ data }: RightInfoProps) => {
  return (
    <div className="flex-[2] pt-10 md:pt-[160px] pb-10 md:pb-14 px-5 flex flex-col gap-5 bg-primary-400">
      <h3 className="font-bold">General</h3>
      <div className="flex flex-col gap-5 p-5 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <Image width={20} height={20} src="/assets/utility.png" alt="Image" />
          <div>
            <span className="font-semibold">Utilities</span>
            <p className="font-[500] text-sm text-gray-600">
              Renter is responsible
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image width={20} height={20} src="/assets/pet.png" alt="Image" />
          <div>
            <span className="font-semibold">Pet Policy</span>
            <p className="font-[500] text-sm text-gray-600">Pet Allowed</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image width={20} height={20} src="/assets/fee.png" alt="Image" />
          <div>
            <span className="font-semibold">Property Fees</span>
            <p className="font-[500] text-sm text-gray-600">
              Must have 3x in rent the total household income
            </p>
          </div>
        </div>
      </div>
      <h3 className="font-bold">Room Sizes</h3>
      <div className="flex flex-wrap gap-5">
        <div className="p-2 flex items-center gap-2 bg-white">
          <Image width={20} height={20} src="/assets/size.png" alt="Image" />
          <span className="font-[500] text-sm text-gray-600">
            80sqm(861sgft)
          </span>
        </div>
        <div className="p-2 flex items-center gap-2 bg-white">
          <Image width={20} height={20} src="/assets/bed.png" alt="Image" />
          <span className="font-[500] text-sm text-gray-600">2 bed</span>
        </div>
        <div className="p-2 flex items-center gap-2 bg-white">
          <Image width={20} height={20} src="/assets/bath.png" alt="Image" />
          <span className="font-[500] text-sm text-gray-600">1 bathroom</span>
        </div>
      </div>
      <h3 className="font-bold">Nearby Places</h3>
      <div className="flex flex-wrap gap-5 p-5 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <Image width={20} height={20} src="/assets/school.png" alt="Image" />
          <div>
            <span className="font-semibold">School</span>
            <p className="font-[500] text-sm text-gray-600">250m away</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image width={20} height={20} src="/assets/bus.png" alt="Image" />
          <div>
            <span className="font-semibold">Bus Stop</span>
            <p className="font-[500] text-sm text-gray-600">100m away</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            width={20}
            height={20}
            src="/assets/restaurant.png"
            alt="Image"
          />
          <div>
            <span className="font-semibold">Restaurant</span>
            <p className="font-[500] text-sm text-gray-600">200m away</p>
          </div>
        </div>
      </div>
      <h3 className="font-bold">Location</h3>
      <div className="w-full h-[200px]">
        <Map
          items={[{ ...data, img: data.images[0], bedroom: data.bedRooms }]}
        />
      </div>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <button
          className="w-[200px] flex items-center gap-2 px-5 py-3 rounded-md border-2 border-solid capitalize 
          border-accent-300 bg-white cursor-pointer transition-all duration-300 ease-in 
          hover:bg-gray-50"
        >
          <Image
            width={20}
            height={20}
            src="/assets/chat.png"
            alt="Save icon"
          />
          <span>Send a message</span>
        </button>
        <button
          className="w-[200px] flex items-center gap-2 px-5 py-3 rounded-md border-2 border-solid capitalize 
          border-accent-300 bg-white cursor-pointer transition-all duration-300 ease-in 
          hover:bg-gray-50"
        >
          <Image
            width={20}
            height={20}
            src="/assets/save.png"
            alt="Save icon"
          />
          <span>Save the place</span>
        </button>
      </div>
    </div>
  );
};

export default RightInfo;
