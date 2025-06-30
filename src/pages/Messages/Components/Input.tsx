import React, { useState } from "react";
import useAuthStore, { User } from "../../../store/auth";
import { SentMessageModel } from "../models/MessageModel";
import chatRoomStore from "../../../store/message";
import { sendMessage } from "../../../utils/messageApi";

const Input = () => {
  const [sendText, setSendText] = useState<string>("");

  const chatRoomId = chatRoomStore((state) => state.chatRoomId);
  // const user: User | null = useAuthStore((state) => state.user || null);
  const user: User = {
    id: 300,
    email: "test@test.com",
    nickname: "testbuyer1",
  };

  const handleSendClick = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();

    const sentMessage: SentMessageModel = {
      messageType: "text",
      content: sendText,
      sender: user.nickname!,
    };
    sendMessage(chatRoomId, sentMessage)
      .then(() => {
        console.log("successfully sent");
      })
      .catch((err) => {
        console.log("err");
      })
      .finally(() => {});
    setSendText("");
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
