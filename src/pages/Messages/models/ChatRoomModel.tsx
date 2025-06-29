export default interface ChatRoomModel {
  id: number | null;
  name: string | null;
  buyer: string | null;
  seller: string | null;
  itemId?: number | null;
  closed?: boolean | null;
  createdAt?: string | null;
}
