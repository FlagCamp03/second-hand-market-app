import React, { ReactHTMLElement, useEffect, useState } from "react";
import ChatRoomModel from "../models/ChatRoomModel";
import useAuthStore, { User } from "../../../store/auth";
import chatRoomStore from "../../../store/message";
import { getChatRoomsByUser } from "../../../utils/messageApi";

const Chats = () => {
  // Get user info , use fake datas for now
  // const user: User | null = useAuthStore((state) => state.user || null);
  const user: User = {
    id: 300,
    email: "test@test.com",
    nickname: "testbuyer1",
  };

  const setChatRoomInfo = chatRoomStore((state) => state.setChatRoomInfo);
  const chatRoomId = chatRoomStore((state) => state.chatRoomId);

  const [chatRooms, setChatRooms] = useState<ChatRoomModel[]>([]);

  // Fake datas

  // setChatRooms([
  //   {
  //     id: 1,
  //     name: "chat1",
  //     buyer: "test1",
  //     seller: "testSellor1",
  //     itemId: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "chat2",
  //     buyer: "testBuyer1",
  //     seller: "test1",
  //     itemId: 2,
  //   },
  //   {
  //     id: 3,
  //     name: "chat3",
  //     buyer: "test1",
  //     seller: "testSellor2",
  //     itemId: 3,
  //   },
  // ]);

  useEffect(() => {
    // Get chatRooms
    if (user?.id) {
      getChatRoomsByUser(user.id)
        .then((data) => {
          console.log(data);
          setChatRooms(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [user?.id]);

  const handleClickChatRoom = (chatRoomId: number, chatParterName: string) => {
    setChatRoomInfo(chatRoomId, chatParterName);
    console.log(chatRoomId);
    console.log(chatParterName);
  };

  return (
    <div className="chats">
      {chatRooms.map((chatroom) => (
        <div
          key={chatroom.id}
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
