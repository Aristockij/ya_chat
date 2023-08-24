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
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
