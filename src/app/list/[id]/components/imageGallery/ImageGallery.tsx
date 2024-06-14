"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [slidingIndex, setSlidingIndex] = useState(0);
  const [showSlide, setShowSlide] = useState(false);

  const handleOpenSlide = (index: number) => {
    setSlidingIndex(index);
    setShowSlide(true);
  };

  const handleCloseSlide = () => {
    setShowSlide(false);
    setSlidingIndex(0);
  };

  const handleSlide = (type: string) => {
    if (type === "next") {
      setSlidingIndex((prev) => (prev < 3 ? prev + 1 : 3));
      return;
    }

    setSlidingIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div
      className={`${
        showSlide
          ? "md:w-screen md:h-screen md:absolute top-0 left-0 md:z-50 flex flex-col md:flex-row justify-center items-center gap-5 md:bg-black"
          : "flex flex-col md:flex-row gap-5"
      }`}
    >
      <div
        className={`${
          showSlide
            ? "w-full md:w-[calc(100vw-300px)] md:h-[calc(100vh-140px)]"
            : "flex-1 min-h-[200px] md:h-auto cursor-pointer"
        } relative`}
      >
        <div
          className="w-full min-h-[200px] md:h-full relative"
          onClick={() => handleOpenSlide(0)}
        >
          <Image
            fill
            src={images[slidingIndex]}
            alt=""
            className="object-cover"
          />
        </div>
        <div
          className={`absolute top-[50%] left-[-10px] -translate-y-1/2 text-white bg-black cursor-pointer ${
            showSlide ? "md:left-[-60px]" : "md:hidden"
          }`}
          onClick={() => handleSlide("prev")}
        >
          <MdOutlineKeyboardArrowLeft size={40} />
        </div>
        <div
          className={`absolute top-[50%] right-[-10px] -translate-y-1/2 text-white bg-black cursor-pointer ${
            showSlide ? "md:right-[-60px]" : "md:hidden"
          }`}
          onClick={() => handleSlide("next")}
        >
          <MdOutlineKeyboardArrowRight size={40} />
        </div>
      </div>
      <div
        className={`w-full md:w-[170px] ${
          showSlide ? "flex gap-5 md:hidden" : "flex md:flex-col gap-5"
        }`}
      >
        {images.slice(1).map((img, index) => (
          <div
            className="relative w-full h-[80px] cursor-pointer"
            key={index + img}
            onClick={() => handleOpenSlide(index + 1)}
          >
            <Image fill src={img} alt="" className="rounded-2xl object-cover" />
          </div>
        ))}
      </div>
      <div
        className={
          showSlide
            ? `absolute top-5 right-[100px] md:text-white cursor-pointer`
            : "hidden"
        }
        onClick={() => handleCloseSlide()}
      >
        <IoMdClose size={40} />
      </div>
    </div>
  );
};

export default ImageGallery;
