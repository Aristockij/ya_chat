import API, { AuthAPI, SigninData, SignupData } from '../api/AuthAPI.ts';
import store from '../utils/Store.ts';
import router from '../utils/Router.ts';
import MessagesController from './MessagesController.ts';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

   async signin(data: SigninData) {
    try {
      await this.api.signin(data);

      await this.fetchUser();

      setTimeout(()=>{
        router.go('/messenger');
      },100)
    } catch (e: any) {
      if(e.reason === "User already in system"){
        router.go("/messenger");
      }
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.read();
      store.set('user', user);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();
      router.go('/messenger');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async logout() {
    try {
      MessagesController.closeAll();

      await this.api.logout();

      router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
