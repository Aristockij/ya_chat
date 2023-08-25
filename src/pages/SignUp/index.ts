import Block from '../../utils/Block';
import template from './signUp.hbs';
import {render} from "../../utils/render";

export class SignUp extends Block {
  constructor() {
    const val = {
      email:  '',
      login: '',
      first_name: '',
      second_name:'',
      phone: '',
      password: '',
      password_again: '',
    }

    super({
      onSignIn: ()=>{
        render('signIn')
      },
      onSubmit:(e)=>{
        e.preventDefault();
        console.log(val)
      },
      fields: [
        {
          name: "email",
          label: "Почта",
          ref: "emailRef",
          onFocusOut: (t)=>{
            this.refs.emailRef.mailMatches(t.target.value, this.refs.emailRef);
          },
          onChange: (event) => {
            val.email = event.target.value;
          },
        },
        {
          name: "login",
          label: "Логин",
          ref: "loginRef",
          onChange: (event) => {
            val.login = event.target.value;
          },
          onFocusOut: (t)=>{
            this.refs.loginRef.loginMatches(t.target.value, this.refs.loginRef);
          }
        },
        {
          name: "first_name",
          label: "Имя",
          ref: "first_nameRef",
          onChange: (event) => {
            val.first_name = event.target.value;
          },
          onFocusOut: (t)=>{
            this.refs.first_nameRef.nameMatches(t.target.value, this.refs.first_nameRef);
          }
        },
        {
          name: "second_name",
          label: "Фамилия",
          ref: "second_nameRef",
          onChange: (event) => {
            val.second_name = event.target.value;
          },
          onFocusOut: (t)=>{
            this.refs.second_nameRef.nameMatches(t.target.value, this.refs.second_nameRef);
          }
        },
        {
          name: "phone",
          label: "Телефон",
          onChange: (event) => {
            val.phone = event.target.value;
          },
        },
        {
          name: "password",
          label: "Пароль",
          onChange: (event) => {
            val.password = event.target.value;
          },
        },
        {
          name: "password_again",
          label: "Повторите пароль",
          onChange: (event) => {
            val.password_again = event.target.value;
          },
        },
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
