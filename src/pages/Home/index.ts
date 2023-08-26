import Block from '../../utils/Block';
import template from './home.hbs';
import {render} from "../../utils/render";


export class HomePage extends Block {
  constructor() {
    super({
      buttons: [
        {
          label: 'Вход',
          onClick: () => {
            render('signIn');
          }
        },
        {
          label: 'Регистрация',
          onClick: () => {
            render('signUp');
          }
        },
        {
          label: 'Чат',
          onClick: () => {
            render('chat');
          }
        },
        {
          label: 'Профиль',
          onClick: () => {
            render('profile');
          }
        },
        {
          label: 'Изменить данные',
          onClick: () => {
            render('changeInfo');
          }
        },
        {
          label: 'Изменить пароль',
          onClick: () => {
            render('changePassword');
          }
        },
        {
          label: '5**',
          onClick: () => {
            render('page500');
          }
        },
        {
          label: '404',
          onClick: () => {
            render('page404');
          }
        },
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
