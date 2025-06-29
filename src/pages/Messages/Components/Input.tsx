import React, { useState } from "react";
import useAuthStore, { User } from "../../../store/auth";
import MessageModel from "../models/MessageModel";
import chatRoomStore from "../../../store/message";

const Input = () => {
  const [sendText, setSendText] = useState<string>("");

  const chatRoomId = chatRoomStore((state) => state.chatRoomId);
  // const user: User | null = useAuthStore((state) => state.user || null);
  const user: User = {
    id: 300,
    email: "test@test.com",
    nickname: "test1",
  };

  const handleSendClick = async () => {
    setSendText("");

    const now = new Date();
    const formattedTime = now.toLocaleTimeString();

    const sendMessage: MessageModel = {
      message_type: "text",
      content: sendText,
      chatRoomId: chatRoomId,
      sender: user.nickname,
      sentAt: formattedTime,
    };
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        value={sendText}
        onChange={(e) => setSendText(e.target.value)}
      />
      <div className="send">
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
};

export default Input;
