import React, { ReactHTMLElement, useEffect } from "react";
import ChatRoom from "../models/ChatRoom";
import useAuthStore, { User } from "../../../store/auth";
import chatRoomStore from "../../../store/message";

const Chats = () => {
  // Get user info , use fake datas for now
  // const user: User | null = useAuthStore((state) => state.user || null);

  const setChatRoomInfo = chatRoomStore((state) => state.setChatRoomInfo);
  const chatRoomId = chatRoomStore((state) => state.chatRoomId);

  useEffect(() => {
    // Get chatRooms
  }, []);

  const handleClickChatRoom = (chatRoomId: number, chatParterName: string) => {
    setChatRoomInfo(chatRoomId, chatParterName);
    console.log(chatRoomId);
    console.log(chatParterName);
  };

  // Fake datas

  const user: User = {
    id: 300,
    email: "test@test.com",
    nickname: "test1",
  };

  const chatRooms: ChatRoom[] = [
    {
      id: 1,
      name: "chat1",
      buyer: "test1",
      seller: "testSellor1",
      itemId: 1,
    },
    {
      id: 2,
      name: "chat2",
      buyer: "testBuyer1",
      seller: "test1",
      itemId: 2,
    },
    {
      id: 3,
      name: "chat3",
      buyer: "test1",
      seller: "testSellor2",
      itemId: 3,
    },
  ];

  return (
    <div className="chats">
      {chatRooms.map((chatroom) => (
        <div
          className="userChat"
          onClick={() => {
            chatroom.buyer === user.nickname
              ? handleClickChatRoom(chatroom.id!, chatroom.seller!)
              : handleClickChatRoom(chatroom.id!, chatroom.buyer!);
          }}
        >
          {/* {chat.img ? <img src={chat.img} alt="" /> : null} */}
          <div className="userChatInfo">
            <span>
              {chatroom.buyer === user.nickname
                ? chatroom.seller
                : chatroom.buyer}
            </span>
            <p>{chatroom.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
