import Block from '../../utils/Block';
import template from './signUp.hbs';
import {render} from "../../utils/render";

export class SignUp extends Block {
  constructor() {
    super({
      onSignIn: ()=>{
        render('signIn')
      },
      fields: [
        {
          name: "email",
          label: "Почта"
        },
        {
          name: "login",
          label: "Логин"
        },
        {
          name: "first_name",
          label: "Имя"
        },
        {
          name: "second_name",
          label: "Фамилия"
        },
        {
          name: "phone",
          label: "Телефон"
        },
        {
          name: "password",
          label: "Пароль",
          onKeyUp: (e)=>{
            console.log(e.target.value)
          }
        },
        {
          name: "password_again",
          label: "Повторите пароль",
          onKeyUp: (e)=>{
            console.log(e.target.value)
          }
        },
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
