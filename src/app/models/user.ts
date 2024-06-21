import { Message } from './message';
import { Room } from './room';

export interface User {
  _id?: string;
  id?: string;
  name?: string;
  clientId?: string;
  messages?: Message[];
  joinedRooms?: Room[];
}
