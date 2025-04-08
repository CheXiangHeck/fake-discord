"use client";
import "@/app/css/Chat.css";
import { chatFactory } from "./chat/chatFactory";
import { ChatElementContent } from "@/components/props/propsInterface";
import { useEffect } from "react";
import { ChatInput } from "./chat/ChatInput";

const testingdata: ChatElementContent = {
    text: "Just finished reading an amazing article on web security! 🔐 Highly recommend it.",
    username: "cyberGeek23",
    time: "14:32",
    date: "2025-04-04",
    userImage: "https://avatars.githubusercontent.com/u/138633798?v=4&size=24",
    tags: ["web security", "recommendation", "reading"]
};

export const ChannelChat = () => {
  const insertChat = () => {
    const chat = document.getElementById("Chat");

    if (!chat) {
      console.log("Chat element not found.");
      return;
    }

    const chatCreator = new chatFactory(chat);

    chatCreator.createChat(testingdata);
  };

  useEffect(() => {
    insertChat();
  },[])

  return (
    <div className="h-full w-full bg-gray-800">
      <p className="p-3 border-b-2 border-gray-700">Welcome</p>
      <div className="flex h-full w-full">
        <div
          className="w-3/4 h-full border-r-2 border-r-gray-700 overflow-y-scroll scroll-hidden relative"
          id="Chat"
        >
          <ChatInput />
        </div>
      </div>
    </div>
  );
};
