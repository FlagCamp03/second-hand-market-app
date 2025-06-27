import React from "react";

const Chats = () => {
  const chats = [
    {
      id: 1,
      name: "test1",
      msg: "hello",
      img: null,
    },
    {
      id: 2,
      name: "test2",
      msg: "nope",
      img: null,
    },
    {
      id: 3,
      name: "test3",
      msg: "Sir I'm going to take a break Please let me in ",
      img: null,
    },
  ];

  return (
    <div className="chats">
      {chats.map((chat) => (
        <div className="userChat">
          {chat.img ? <img src={chat.img} alt="" /> : null}
          <div className="userChatInfo">
            <span>{chat.name}</span>
            <p>{chat.msg}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
