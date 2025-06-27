import React from "react";

import Messages from "./Messages.tsx";
import Input from "./Input.tsx";
import chatRoomStore from "../../../store/message.ts";

const Chat = () => {
  const chatRoomParterName = chatRoomStore((state) => state.chatRoomParterName);

  return (
    <div className="chat">
      <div className="chatinfo">
        <span>{chatRoomParterName}</span>
      </div>
      <Messages />
      <Input></Input>
    </div>
  );
};

export default Chat;
