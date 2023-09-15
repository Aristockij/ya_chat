import API, { ChatsAPI } from '../api/ChatAPI';
import store from '../utils/Store';
import MessagesController from './MessagesController';
import {unregisterDecorator} from "handlebars";

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);

    this.fetchChats();
  }

  async fetchChats() {
    const chats = await this.api.read();

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id);

      await MessagesController.connect(chat.id, token);
    });

    store.set('chats', chats);
  }

  async addUserToChat(id: number, userId: number) {
      try{
         await this.api.addUsers(id, [userId]);

         await this.getChatUsers(id);
      }catch (e){
        console.log(e)
      }
  }

  async deleteUser(id: number, chatId: number) {
      try{
          await this.api.removeUsers(id, [chatId])

          await this.getChatUsers(id);
      }catch (e){
          console.log(e)
      }
  }

  async delete(id: number) {
    await this.api.delete(id);

    this.fetchChats();
    store.set('selectedChat', null);
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  async addAvatar(id, avatar) {
    try {
      const file: FormData = new FormData();
      file.append('avatar', avatar);
      file.append('chatId', id);

      await this.api.addChatAvatar(file).then( data =>
        {
         let chatIndex = store.getState().chats.findIndex(chat => chat.id === id);
         const currentChats = store.getState().chats;

         let updatedChat = { ...currentChats[chatIndex], avatar: data.avatar };

         currentChats[chatIndex] = updatedChat;

         store.set('chats', currentChats);
        }
      );
    } catch (e: any) {
      console.error(e);
    }
  }

  async getChatUsers(idChat){
    try{
      await this.api.getUsers(idChat)
        .then((data)=>{
          let chatIndex = store.getState().chats.findIndex(chat => chat.id === idChat );
          const currentChats = store.getState().chats;

          let updatedChat = { ...currentChats[chatIndex], users: data };

          currentChats[chatIndex] = updatedChat;

          store.set('chats', currentChats)
        });
    }catch (e){
      console.log(e)
    }
  }

  selectChat(id: number) {
    store.set('selectedChat', id);
  }

  selectChatName(name: string) {
    store.set('selectedChatName', name);
  }
}

const controller = new ChatsController();

// @ts-ignore
window.chatsController = controller;

export default controller;
