"use client";

import React, { useState } from "react";
import Container from "@/components/container/Container";
import ProfileInfo from "./components/profileInfo/ProfileInfo";
import Chat from "./components/chat/Chat";

const Profile = () => {
  const [showMobileChat, setShowMobileChat] = useState(false);

  return (
    <main>
      <section
        className={`w-full relative  ${
          showMobileChat ? "bg-primary-400 md:bg-white" : ""
        }`}
      >
        <Container>
          <div className="w-full md:h-screen flex flex-col md:flex-row gap-5">
            <ProfileInfo
              showMobileChat={showMobileChat}
              setShowMobileChat={setShowMobileChat}
            />
            <Chat
              showMobileChat={showMobileChat}
              setShowMobileChat={setShowMobileChat}
            />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Profile;
