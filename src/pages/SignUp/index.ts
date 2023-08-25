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
          onChange: (event) => {
            val.email = event.target.value;
          },
        },
        {
          name: "login",
          label: "Логин",
          onChange: (event) => {
            val.login = event.target.value;
          },
        },
        {
          name: "first_name",
          label: "Имя",
          onChange: (event) => {
            val.first_name = event.target.value;
          },
          onFocusOut: (t)=>{
            this.refs.loginRef.loginMatches(t.target.value, this.refs.loginRef);

            // if(t.target.value.length < 3 || !loginRegExp.test(t.target.value)){
            //   this.refs.loginRef.setProps({
            //     fieldValue: t.target.value,
            //     errorMessage: "пароль должен быть длиннее 3 символов и начинаться с буквы",
            //     req: true,
            //   })
            //   console.log(!loginRegExp.test(t.target.value))
            // }else if(t.target.value.length >= 20 || !loginRegExp.test(t.target.value)){
            //   this.refs.loginRef.setProps({
            //     fieldValue: t.target.value,
            //     errorMessage: "пароль должен быть короче 20 символов и начинаться с буквы",
            //     req: true,
            //   })
            // }
            // else{
            //   this.refs.loginRef.setProps({
            //     fieldValue: t.target.value,
            //     req: false
            //   })
            // }
          }
        },
        {
          name: "second_name",
          label: "Фамилия",
          onChange: (event) => {
            val.second_name = event.target.value;
          },
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
