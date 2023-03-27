import { Message } from 'src/messages/entities/message.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class ChatRoom {
  constructor(name: string) {
    this.chat_name = name;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chat_name: string;

  @ManyToOne(() => User, (user) => user.chat_room)
  create_by: User;

  @OneToMany(() => Message, (message) => message.chat_room)
  messages: Message[];

  @OneToMany(() => User, (user) => user.chat_room)
  users: User[];
}
