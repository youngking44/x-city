"use client";

import { IoIosSearch } from "react-icons/io";
import Button from "../button/Button";
import { useState } from "react";

const SearchBar = () => {
  const [activeButton, setActiveButton] = useState("Buy");

  const handleClick = (value: string) => {
    setActiveButton(value);
  };

  return (
    <div className="w-full">
      <div className="flex">
        <Button
          type="Buy"
          activeButton={activeButton}
          handleClick={handleClick}
        />
        <Button
          type="Rent"
          activeButton={activeButton}
          handleClick={handleClick}
        />
      </div>
      <form className="w-full flex flex-col md:flex-row justify-between md:border-2">
        <input
          className="w-full md:min-w-[60px] px-2 py-1 border-t-2 border-r-2 border-b-2 border-l-2 md:border-0"
          placeholder="City Location"
        />
        <input
          className="w-full md:min-w-[60px] px-2 py-1 border-r-2 border-b-2 border-l-2 md:border-0"
          placeholder="Min Price"
        />
        <input
          className="w-full md:min-w-[60px] px-2 py-1 border-r-2 border-b-2 border-l-2 md:border-0"
          placeholder="Max Price"
        />
        <button className="px-2 py-2 flex justify-center text-white bg-accent-500 cursor-pointer">
          <IoIosSearch size={30} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
