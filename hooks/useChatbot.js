"use client";

import { useState } from "react";

const useChatbot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return {
    isChatbotOpen,
    toggleChatbot,
  };
};

export default useChatbot;
