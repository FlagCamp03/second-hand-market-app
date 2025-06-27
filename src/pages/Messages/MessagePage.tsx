import React from "react";
import Sidebar from "./components/Sidebar.tsx";
import Chat from "./components/Chat.tsx";
import "./MessagePage.scss";

const MessagePage: React.FC = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
};

export default MessagePage;
