export interface UserProfile {
  username: string;
  displayName: string;
  avatar: string;
  online: boolean;
  lastSeen?: any;
  password?: string;
  isVip?: boolean;
  isBanned?: boolean;
}

export interface Message {
  id: string;
  room: string;
  username: string;
  text?: string;
  image?: string;
  audio?: string;
  replyTo?: string;
  isVip?: boolean;
  createdAt?: any;
}

export interface CallSession {
  id: string;
  room: string;
  caller: string;
  receiver: string;
  type: 'voice' | 'video';
  status: 'calling' | 'accepted' | 'declined' | 'ended';
  createdAt?: any;
}

export interface TypingState {
  user: string;
  room: string;
  time?: any;
}

