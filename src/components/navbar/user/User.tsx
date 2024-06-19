import Image from "next/image";
import React from "react";
import Badge from "../badge/Badge";
import Avatar from "@/components/avatar/Avatar";
import Button from "@/components/button/Button";

const User = () => {
  return (
    <div className="hidden md:flex items-center gap-5 font-[600]">
      <Avatar />
      <span>Mike King</span>
      <Badge>
        <Button type="primary">Profile</Button>
      </Badge>
    </div>
  );
};

export default User;
