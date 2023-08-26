import Block from '../../utils/Block';
import template from './signUp.hbs';
import {render} from "../../utils/render";
import {FormInput} from "../../components/FormInput";

export class SignUp extends Block {
  constructor() {
    const loginRegExp = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;
    const mailRegExp = /.+@.+\..+/i;
    const nameRegExp = /^[a-яё]+(?:[-][a-яё]+)*$/i
    const passRegExp = /^(?=.*[A-Z])(?=.*\d).{8,40}$/i;
    const phoneRegExp = /^\+?\d{10,15}$/;

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
      onSubmit: (e) => {
        e.preventDefault();
        let fieldsName = this.props.fields;
        let hasErrors = false

        for(let i = 0;  i < fieldsName.length; i++ ){
          for (let key in val){
            let nameRef = this.props.fields[i].ref;

            if(key === fieldsName[i].name && val[key].length === 0 ){

              this.refs[nameRef].setProps({
                errorMessage: 'пустое поле',
                req: true,
              })

              hasErrors = true;
            }
          }
        }
        if(val.password !== val.password_again){
          this.refs.passRefAgain.setProps({
            errorMessage: 'пароли не совпадают',
            req: true,
          })
          return;
        }
        if (hasErrors || val.password !== val.password_again ) {
          return;
        }

        console.log(val);
      },
      fields: [
        {
          name: "email",
          label: "Почта",
          ref: "emailRef",
          fieldType: "text",
          onFocusOut: (t)=>{
            (this.refs.emailRef as FormInput).checkMatches(t.target.value, this.refs.emailRef, mailRegExp ,"символ @ обязателен");
          },
          onChange: (event) => {
            val.email = event.target.value;
          },
        },
        {
          name: "login",
          label: "Логин",
          ref: "loginRef",
          fieldType: "text",
          onChange: (event) => {
            val.login = event.target.value;
          },
          onFocusOut: (t)=>{
            (this.refs.loginRef as FormInput).checkMatches(t.target.value, this.refs.loginRef, loginRegExp, "логин должен быть длиннее 3 символов и начинаться с буквы");
          }
        },
        {
          name: "first_name",
          label: "Имя",
          ref: "first_nameRef",
          fieldType: "text",
          onChange: (event) => {
            val.first_name = event.target.value;
          },
          onFocusOut: (t)=>{
            (this.refs.first_nameRef as FormInput).checkMatches(t.target.value, this.refs.first_nameRef, nameRegExp,  "первая буква заглавная, без пробелов, цифр, спецсимволов");
          }
        },
        {
          name: "second_name",
          label: "Фамилия",
          ref: "second_nameRef",
          fieldType: "text",
          onChange: (event) => {
            val.second_name = event.target.value;
          },
          onFocusOut: (t)=>{
            (this.refs.second_nameRef as FormInput).checkMatches(t.target.value, this.refs.second_nameRef, nameRegExp,"первая буква заглавная, без пробелов, цифр, спецсимволов" );
          }
        },
        {
          name: "phone",
          label: "Телефон",
          ref: "phoneRef",
          fieldType: "text",
          onChange: (event) => {
            val.phone = event.target.value;
          },
          onFocusOut: (t)=>{
            (this.refs.phoneRef as FormInput).checkMatches(t.target.value, this.refs.phoneRef, phoneRegExp,"от 10 до 15 символов" );
          }
        },
        {
          name: "password",
          label: "Пароль",
          ref: "passRef",
          fieldType: "password",
          showPass: true,
          onChange: (event) => {
            val.password = event.target.value;
          },
          onFocusOut: (t)=>{
            (this.refs.passRef as FormInput).checkMatches(t.target.value, this.refs.passRef, passRegExp,"от 8 до 40 символов, хотя бы одна заглавная буква и цифра." );
          }
        },
        {
          name: "password_again",
          label: "Повторите пароль",
          ref: "passRefAgain",
          fieldType: "password",
          showPass: true,
          onChange: (event) => {
            val.password_again = event.target.value;
          },
          onFocusOut: (t)=>{
            (this.refs.passRefAgain as FormInput).checkMatches(t.target.value, this.refs.passRefAgain, passRegExp,"от 8 до 40 символов, хотя бы одна заглавная буква и цифра." );
          }
        },
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
