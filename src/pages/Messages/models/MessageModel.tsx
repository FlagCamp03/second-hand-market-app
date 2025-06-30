export default interface MessageModel {
  id?: number | null;
  message_type: string | null;
  content: string | null;
  chatRoomId: number | null;
  sender?: string | null;
  sentAt: string | null;
}

export interface SentMessageModel {
  messageType: string;
  content: string;
  sender: string;
}
