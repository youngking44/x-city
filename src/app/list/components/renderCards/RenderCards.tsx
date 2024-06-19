"use client";

import React, { useState } from "react";
import Card from "@/components/card/Card";
import { listData } from "@/lib/dummydata";
import { MdNavigateNext } from "react-icons/md";

const RenderCards = () => {
  const [index, setIndex] = useState(3);
  const data = listData;

  const handleClick = () => {
    setIndex(data.length);
  };
  return (
    <div>
      <div className="md:hidden flex flex-col gap-5 mt-5">
        {data.slice(0, index).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="hidden md:flex flex-col gap-5 mt-5">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <button
        className={`${
          data.length > 3 && index < 4 ? "" : "hidden"
        } md:hidden mt-5 flex underline text-accent-500 cursor-pointer`}
        onClick={handleClick}
      >
        More Posts
        <MdNavigateNext size={25} />
      </button>
    </div>
  );
};

export default RenderCards;
