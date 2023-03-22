import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';

@WebSocketGateway()
export class MessagesGateway {
  @WebSocketServer() server;

  @SubscribeMessage('messages')
  handleMessage(@MessageBody() data: any): string {
    return data;
  }
}
