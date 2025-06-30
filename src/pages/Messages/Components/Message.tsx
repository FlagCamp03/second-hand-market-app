import React from "react";
import useAuthStore, { User } from "../../../store/auth";
import MessageModel from "../models/MessageModel";

const Message = (props) => {
  // const user: User | null = useAuthStore((state) => state.user || null);
  const user: User = {
    id: 300,
    email: "test@test.com",
    nickname: "testbuyer1",
    avatar:
      "https://gips0.baidu.com/it/u=3602773692,1512483864&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280",
  };
  const userName = user.nickname;
  const message: MessageModel = props.message;
  const messageSender = message.sender;
  const bIsUser: Boolean = userName === messageSender;
  const avaterUrl = bIsUser ? user.avatar : null;

  let date: Date | null = null;
  let formattedDate;
  if (message.sentAt) {
    date = new Date(message.sentAt);
    formattedDate = `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div className={bIsUser ? "message owner" : "message"}>
      <div className="messageInfo">
        {avaterUrl ? <img src={avaterUrl} alt="" /> : null}
        <span>{formattedDate}</span>
      </div>
      <div className="messageContent">
        <p>{message.content}</p>
        {/* <img src="" alt="" /> */}
      </div>
    </div>
  );
};

export default Message;
