import Image from "next/image";
import React from "react";

const Filter = () => {
  return (
    <div className="w-full flex flex-col gap-[15px]">
      <h1 className="font-[300] text-2xl text-gray-600">
        Search results for <span className="font-bold">London</span>
      </h1>
      <div>
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-gray-600" htmlFor="city">
            Location
          </label>
          <input
            className="px-4 py-2 border-2 text-sm rounded-md"
            type="text"
            id="city"
            name="city"
            placeholder="City location"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-[2px]">
          <label className="text-xs font-semibold text-gray-600" htmlFor="type">
            Type
          </label>
          <select
            className="min-w-[20px] w-full px-4 py-2 text-sm border-2 rounded-md"
            name="type"
            id="type"
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="flex-1 flex flex-col gap-[2px]">
          <label
            className="text-xs font-semibold text-gray-600"
            htmlFor="property"
          >
            Property
          </label>
          <select
            className="min-w-[20px] w-full px-4 py-2 text-sm border-2 rounded-md"
            name="property"
            id="property"
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="flex-1 flex flex-col gap-[2px]">
          <label
            className="text-xs font-semibold text-gray-600"
            htmlFor="minPrice"
          >
            Min Price
          </label>
          <input
            className="min-w-[20px] w-full text-sm px-4 py-2 border-2 rounded-md"
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[2px]">
          <label
            className="text-xs font-semibold text-gray-600"
            htmlFor="maxPrice"
          >
            Max Price
          </label>
          <input
            className="min-w-[20px] w-full text-sm px-4 py-2 border-2 rounded-md"
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[2px]">
          <label
            className="text-xs font-semibold text-gray-600"
            htmlFor="bedroom"
          >
            Bedroom
          </label>
          <input
            className="min-w-[20px] w-full text-sm px-4 py-2 border-2 rounded-md"
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          />
        </div>
        <button
          className="px-8 py-2 self-end rounded-md bg-accent-500 cursor-pointer
            transition-all duration-500 hover:bg-accent-500/80"
        >
          <Image
            width={25}
            height={25}
            src="/assets/search.png"
            alt="Search image"
          />
        </button>
      </div>
    </div>
  );
};

export default Filter;
