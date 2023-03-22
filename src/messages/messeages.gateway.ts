import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { MessagesService } from './messages.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) {}
  @SubscribeMessage('createMessages')
  createMessages() {
    return this.messagesService.createMessage('Hello World');
  }

  @SubscribeMessage('getAllMessages')
  getAllMessages() {
    return this.messagesService.getAllMessages();
  }
}
