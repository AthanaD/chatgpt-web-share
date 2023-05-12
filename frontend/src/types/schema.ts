import { components } from './openapi';

export type UserRead = components['schemas']['UserRead'];
export type UserReadAdmin = components['schemas']['UserReadAdmin'];
export type UserCreate = components['schemas']['UserCreate'];
export type UserUpdate = components['schemas']['UserUpdate'];
export type UserUpdateAdmin = components['schemas']['UserUpdateAdmin'];
export type UserSettingSchema = components['schemas']['UserSettingSchema'];
export type ServerStatusSchema = components['schemas']['ServerStatusSchema'];
export type RevChatStatus = components['schemas']['RevChatStatus'];
export type ChatModel = components['schemas']['ChatModel'];

export type ChatMessage = components['schemas']['ChatMessage'];
export type BaseConversationSchema = components['schemas']['BaseConversationSchema'];
export type RevConversationSchema = components['schemas']['RevConversationSchema'];
// export type ApiConversationSchema = components['schemas']['ApiConversationSchema'];
export type ConversationHistoryDocument = components['schemas']['ConversationHistoryDocument'];

export type AskRequest = components['schemas']['AskRequest'];
export type AskResponse = components['schemas']['AskResponse'];

export type SystemInfo = components['schemas']['SystemInfo'];
export type RequestStatistics = components['schemas']['RequestStatistics'];

export type LogFilterOptions = components['schemas']['LogFilterOptions'];

export type ConfigRead = components['schemas']['ConfigRead'];
export type ConfigUpdate = components['schemas']['ConfigUpdate'];

export const chatStatusMap = {
  asking: 'commons.askingChatStatus',
  queueing: 'commons.queueingChatStatus',
  idling: 'commons.idlingChatStatus',
};
