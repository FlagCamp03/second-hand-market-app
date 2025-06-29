import React, { useEffect, useState } from "react";
import Message from "./Message.tsx";
import chatRoomStore from "../../../store/message.ts";
import MessageModel from "../models/MessageModel";

function Messages() {
  const chatRoomId = chatRoomStore((state) => state.chatRoomId);
  const [messages, setMessages] = useState<MessageModel[]>([]);

  // Get Messages from backend
  useEffect(() => {}, []);

  // Fake Messages
  const fakeMessages: MessageModel[] = [
    {
      id: 1,
      message_type: "text",
      content: "I need your help",
      chatRoomId: 1,
      sender: "test1",
      sentAt: "20:30",
    },
    {
      id: 2,
      message_type: "text",
      content: "Don't tell me what to do",
      chatRoomId: 1,
      sender: "testSellor1",
      sentAt: "20:31",
    },
    {
      id: 3,
      message_type: "text",
      content: "OK",
      chatRoomId: 1,
      sender: "test1",
      sentAt: "20:32",
    },
    {
      id: 4,
      message_type: "text",
      content: "You are a good man",
      chatRoomId: 1,
      sender: "testSellor1",
      sentAt: "20:33",
    },
  ];

  return (
    <div className="messages">
      {fakeMessages.map((m) =>
        chatRoomId === m.chatRoomId ? <Message message={m} /> : null
      )}
    </div>
  );
}

export default Messages;
