import React from "react";

import Messages from "./Messages.tsx";
import Input from "./Input.tsx";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatinfo">
        <span>Jane</span>
      </div>
      <Messages />
      <Input></Input>
    </div>
  );
};

export default Chat;
