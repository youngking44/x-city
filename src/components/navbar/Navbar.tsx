"use client";

import React, { useState } from "react";
import Container from "../container/Container";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const gap = "gap-10";
const itemStyles = "transition-all ease-out hover:scale-105";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <header className="w-full h-[100px] fixed flex items-center z-40 bg-orange-200">
      <Container>
        <div
          className={`font-[500] flex justify-between md:justify-start items-center ${gap}`}
        >
          <div className="flex items-center gap-2">
            <Image
              width={40}
              height={40}
              src="/assets/logo/logo.png"
              alt="Logo"
              className="object-cover"
            />
            <span className="text-[20px] font-bold">X-City</span>
          </div>
          <div
            className={`md:flex-1 flex flex-col md:flex-row md:justify-between md:items-center w-[60%] 
            md:w-auto h-screen md:h-auto pt-[100px] md:pt-0 px-5 md:px-0 absolute md:static top-0
          text-white md:text-black bg-black md:bg-transparent transition-all md:transition-none duration-500 
            ease-in-out ${gap} ${isToggle ? "right-0" : "-right-full"}`}
          >
            <nav>
              <ul className={`flex flex-col md:flex-row ${gap}`}>
                <li className={`${itemStyles}`}>
                  <Link href="/">Home</Link>
                </li>
                <li className={`${itemStyles}`}>
                  <Link href="/about">About</Link>
                </li>
                <li className={`${itemStyles}`}>
                  <Link href="/contact">Contact</Link>
                </li>
                <li className={`${itemStyles}`}>
                  <Link href="/agents">Agents</Link>
                </li>
              </ul>
            </nav>
            <div
              className={`flex flex-col md:flex-row items-start md:items-center ${gap}`}
            >
              <button className={`${itemStyles}`}>
                <Link href="/sign-in">Sign in</Link>
              </button>
              <button
                className={`${itemStyles} md:px-5 md:py-2 md:bg-accent-500 `}
              >
                <Link href="/sign-up">Sign up</Link>
              </button>
            </div>
          </div>
          <div
            className="md:hidden w-[50px] h-[50px] rounded-[50%] flex justify-center items-center 
            cursor-pointer z-10 text-white bg-black"
            onClick={() => setIsToggle(!isToggle)}
          >
            {isToggle ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
