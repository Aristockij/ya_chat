import Block from '../../utils/Block';
import template from './home.hbs';
// import {render} from "../../utils/render";
import router from '../../utils/Router';
import { Link } from '../../components/Link';


export class HomePage extends Block {
  constructor() {
    super({
      buttons: [
        {
          label: 'Вход',
          to: '/sign-in',
        },
        {
          label: 'Регистрация',
          to: '/sign-up',
        },
        {
          label: 'Чат',
          to: '/chat',
        },
        {
          label: 'Профиль',
          to: '/profile',
        },
        {
          label: 'Изменить данные',
          to: '/changeInfo',
        },
        {
          label: 'Изменить пароль',
          to: '/changePassword',
        },
        {
          label: '5**',
          to: '/page500',
        },
        {
          label: '404',
          to: '/page404',
        },
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
