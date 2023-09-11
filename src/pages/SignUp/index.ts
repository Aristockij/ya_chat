import Block from '../../utils/Block';
import template from './signUp.hbs';
import { FormInput } from "../../components/FormInput";
import { Link } from "../../components/Link";
import AuthController from "../../controllers/AuthController";
import {SignupData} from "../../api/AuthAPI";

export class SignUp extends Block {

  constructor() {
    const loginRegExp = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;
    const mailRegExp = /.+@.+\..+/i;
    const nameRegExp = /^[a-яё]+(?:[-][a-яё]+)*$/i
    const passRegExp = /^(?=.*[A-Z])(?=.*\d).{8,40}$/i;
    const phoneRegExp = /^\+?\d{10,15}$/;

    const val:  Record<string, string> = {
      email:  '',
      login: '',
      first_name: '',
      second_name:'',
      phone: '',
      password: '',
      password_again: '',
    }

    super({
      onSubmit: (e: MouseEvent) => {
        e.preventDefault();
        const fieldsName = this.props.fields;
        let hasErrors = false

        for(let i = 0;  i < fieldsName.length; i++ ){
          const nameRef = this.props.fields[i].ref;
          const fieldName = fieldsName[i].name;

          if (!val[fieldName]?.length) {
            this.refs[nameRef].setProps({
              errorMessage: 'пустое поле',
              req: true,
            });
            hasErrors = true;
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
        AuthController.signup(val as SignupData)
        console.log(val);
      },
      fields: [
        {
          name: "email",
          label: "Почта",
          ref: "emailRef",
          fieldType: "text",
          onFocusOut: (t: FocusEvent)=>{
            const target = t.target as HTMLInputElement;
            (this.refs.emailRef as FormInput).checkMatches(target.value, mailRegExp ,"символ @ обязателен");
          },
          onChange: (e: FocusEvent) => {
            const target = e.target as HTMLInputElement;
            val.email = target.value;
          },
        },
        {
          name: "login",
          label: "Логин",
          ref: "loginRef",
          fieldType: "text",
          onChange: (e: FocusEvent) => {
            const target = e.target as HTMLInputElement;
            val.login = target.value;
          },
          onFocusOut: (t: FocusEvent)=>{
            const target = t.target as HTMLInputElement;
            (this.refs.loginRef as FormInput).checkMatches(target.value, loginRegExp, "логин должен быть длиннее 3 символов и начинаться с буквы");
          }
        },
        {
          name: "first_name",
          label: "Имя",
          ref: "first_nameRef",
          fieldType: "text",
          onChange: (e: FocusEvent) => {
            const target = e.target as HTMLInputElement;
            val.first_name = target.value;
          },
          onFocusOut: (t: FocusEvent)=>{
            const target = t.target as HTMLInputElement;
            (this.refs.first_nameRef as FormInput).checkMatches(target.value, nameRegExp,  "первая буква заглавная, без пробелов, цифр, спецсимволов");
          }
        },
        {
          name: "second_name",
          label: "Фамилия",
          ref: "second_nameRef",
          fieldType: "text",
          onChange: (e: FocusEvent) => {
            const target = e.target as HTMLInputElement;
            val.second_name = target.value;
          },
          onFocusOut: (t: FocusEvent)=>{
            const target = t.target as HTMLInputElement;
            (this.refs.second_nameRef as FormInput).checkMatches(target.value, nameRegExp,"первая буква заглавная, без пробелов, цифр, спецсимволов" );
          }
        },
        {
          name: "phone",
          label: "Телефон",
          ref: "phoneRef",
          fieldType: "text",
          onChange: (e: FocusEvent) => {
            const target = e.target as HTMLInputElement;
            val.phone = target.value;
          },
          onFocusOut: (t: FocusEvent)=>{
            const target = t.target as HTMLInputElement;
            (this.refs.phoneRef as FormInput).checkMatches(target.value, phoneRegExp,"от 10 до 15 символов" );
          }
        },
        {
          name: "password",
          label: "Пароль",
          ref: "passRef",
          fieldType: "password",
          showPass: true,
          onChange: (e: FocusEvent) => {
            const target = e.target as HTMLInputElement;
            val.password = target.value;
          },
          onFocusOut: (t: FocusEvent)=>{
            const target = t.target as HTMLInputElement;
            (this.refs.passRef as FormInput).checkMatches(target.value, passRegExp,"от 8 до 40 символов, хотя бы одна заглавная буква и цифра." );
          }
        },
        {
          name: "password_again",
          label: "Повторите пароль",
          ref: "passRefAgain",
          fieldType: "password",
          showPass: true,
          onChange: (e: FocusEvent) => {
            const target = e.target as HTMLInputElement;
            val.password_again = target.value;
          },
          onFocusOut: (t: FocusEvent)=>{
            const target = t.target as HTMLInputElement;
            (this.refs.passRefAgain as FormInput).checkMatches(target.value, passRegExp,"от 8 до 40 символов, хотя бы одна заглавная буква и цифра." );
          }
        },
      ]
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
