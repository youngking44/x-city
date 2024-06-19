import Avatar from "@/components/avatar/Avatar";
import React from "react";

interface SingleChatProps {
  handleCloseChat: () => void;
}

const SingleChat = ({ handleCloseChat }: SingleChatProps) => {
  return (
    <div
      className="flex items-center gap-5 px-4 py-2 rounded-md bg-white cursor-pointer"
      onClick={handleCloseChat}
    >
      <Avatar />
      <span className="font-semibold">Mike King</span>
      <p>Hey Mike, How is it going?</p>
    </div>
  );
};

export default SingleChat;
