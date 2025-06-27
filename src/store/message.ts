import { create } from "zustand";

interface chatRoomId {
  chatRoomId: number | null;
  chatRoomParterName: string | null;
  setChatRoomInfo(chatRoomId: number, chatRoomParterName: string);
}

// Create Zustand store
const chatRoomStore = create<chatRoomId>((set) => ({
  chatRoomId: null,
  chatRoomParterName: null,
  setChatRoomInfo: (chatRoomId, chatRoomParterName) => {
    set({ chatRoomId, chatRoomParterName });
  },
}));

export default chatRoomStore;
