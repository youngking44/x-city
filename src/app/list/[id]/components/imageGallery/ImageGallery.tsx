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

const btnStyles = "absolute text-white cursor-pointer";

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
          ? "w-screen h-screen absolute top-0 left-0 z-50 flex justify-center items-center bg-black"
          : "flex gap-5"
      }`}
    >
      <div
        className={`${
          showSlide
            ? "w-[calc(100vw-300px)] h-[calc(100vh-140px)]"
            : "flex-1 cursor-pointer"
        } relative`}
        onClick={() => handleOpenSlide(0)}
      >
        <Image fill src={images[slidingIndex]} alt="" />
      </div>
      <div
        className={`w-[170px] ${showSlide ? "hidden" : "flex flex-col gap-5"}`}
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
        className={showSlide ? `${btnStyles} top-5 right-[100px]` : "hidden"}
        onClick={() => handleCloseSlide()}
      >
        <IoMdClose size={40} />
      </div>
      <div
        className={showSlide ? `${btnStyles} left-[100px]` : "hidden"}
        onClick={() => handleSlide("prev")}
      >
        <MdOutlineKeyboardArrowLeft size={40} />
      </div>
      <div
        className={showSlide ? `${btnStyles} right-[100px]` : "hidden"}
        onClick={() => handleSlide("next")}
      >
        <MdOutlineKeyboardArrowRight size={40} />
      </div>
    </div>
  );
};

export default ImageGallery;
