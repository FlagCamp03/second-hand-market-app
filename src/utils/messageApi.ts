export const getChatRoomsByUser = (restId) => {
  return fetch(`/chatRooms/user/${restId}`).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to get menu");
    }
    console.log(response);
    return response.json();
  });
};

export const listMessages = (roomId) => {
  return fetch(`/chatRooms/${roomId}`).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to get menu");
    }
    console.log(response);
    return response.json();
  });
};

export const sendMessage = (roomId, sentMessage) => {
  return fetch(`/chatRooms/${roomId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sentMessage),
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to add menu item to shopping cart");
    }
  });
};
