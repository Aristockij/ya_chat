import API, { AuthAPI, SigninData, SignupData } from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';
import MessagesController from './MessagesController';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SigninData) {
    try {
      await this.api.signin(data);

      await this.fetchUser();

      router.go('/chat');
    } catch (e: any) {
      console.error(e.message);
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
      console.log(data);
      router.go('/chat');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async logout() {
    try {
      MessagesController.closeAll();

      await this.api.logout();

      router.go('/sign-in');
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
