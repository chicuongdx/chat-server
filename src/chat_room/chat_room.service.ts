import { Injectable } from '@nestjs/common';
import { ChatRoom } from './entities/chat_room.entity';

@Injectable()
export class ChatRoomService {
  private readonly chatRooms: ChatRoom[] = [];

  createChatRoom(name: string): ChatRoom {
    const chatRoom = new ChatRoom(name);
    this.chatRooms.push(chatRoom);
    return chatRoom;
  }

  getChatRoom(id: number): ChatRoom {
    return this.chatRooms.find((chatRoom) => chatRoom.id === id);
  }
}
