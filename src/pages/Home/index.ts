import Block from '../../utils/Block';
import template from './home.hbs';

export class HomePage extends Block {
  constructor() {
    super({
      buttons: [
        {
          label: 'Вход',
          to: '/',
        },
        {
          label: 'Регистрация',
          to: '/sign-up',
        },
        {
          label: 'Чат',
          to: '/messenger',
        },
        {
          label: 'Профиль',
          to: '/profile',
        },
        {
          label: 'Изменить данные',
          to: '/settings',
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
