import { ChatRoom } from 'src/chat_room/entities/chat_room.entity';
import { Message } from 'src/messages/entities/message.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  full_name: string;

  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.users)
  chat_room: ChatRoom;

  @OneToMany(() => Message, (message) => message.sender)
  sent_messages: Message[];
}
