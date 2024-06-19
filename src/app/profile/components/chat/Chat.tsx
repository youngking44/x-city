"use client";

import React, { useState } from "react";
import SingleChat from "../singleChat/SingleChat";
import Button from "@/components/button/Button";
import Avatar from "@/components/avatar/Avatar";
import { MdClose } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";

interface ChatProps {
  showMobileChat: boolean;
  setShowMobileChat: (val: boolean) => void;
}

const Chat = ({ showMobileChat, setShowMobileChat }: ChatProps) => {
  const [openChat, setOpenChat] = useState(false);

  const handleCloseChat = () => {
    setOpenChat(true);
  };
  return (
    <div
      className={`flex-[2] px-5 pt-[160px] bg-primary-400 flex flex-col gap-5 ${
        showMobileChat ? "" : "hidden md:flex"
      } `}
    >
      <div className="relative">
        <div
          className="md:hidden absolute top-0 left-0"
          onClick={() => setShowMobileChat(false)}
        >
          <IoMdArrowBack size={30} />
        </div>
        <h1 className="text-3xl font-[300] text-center md:text-left">
          {!openChat ? "Chats" : "Messages"}
        </h1>
      </div>
      {!openChat ? (
        <div className="flex-1 flex flex-col gap-5 pb-5 overflow-y-auto">
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <SingleChat handleCloseChat={handleCloseChat} key={index} />
            ))}
        </div>
      ) : (
        <div className="flex-1 h-[calc(100vh-100px)] md:h-auto flex flex-col absolute md:static top-[100px] right-0 bottom-0 left-0 bg-white">
          <div className="flex items-center gap-5 p-5 bg-accent-300">
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setOpenChat(false)}
            >
              <IoMdArrowBack size={30} />
            </div>
            <div className="flex-1">
              <Avatar />
            </div>
            <span className="font-bold">Mike King</span>
            <div
              className="hidden md:block cursor-pointer"
              onClick={() => setOpenChat(false)}
            >
              <MdClose size={30} />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 px-5">
            <div className="p-2 self-start">
              <p>Hey dude, how is life?</p>
              <span>1 hour ago</span>
            </div>
            <div className="p-2 self-end">
              <p>Hey dude, how is life?</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <form className="flex px-5">
            <input
              type="text"
              placeholder="Message"
              className="flex-1 p-2 border-2"
            />
            <Button type="accent">Send</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
