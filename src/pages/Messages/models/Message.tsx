interface Message {
  id: number;
  message_type: string;
  content: string;
  chatRoomId: number;
  sender: string;
  sentAt: string;
}
