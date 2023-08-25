import Block from '../../utils/Block';
import template from './signIn.hbs';
import {render} from "../../utils/render";

export class SignIn extends Block {
  constructor() {
    const val = {
      login:  '',
      pass: '',
    }
    super({
      onSignUp: ()=> {
        render('signUp')
      },
      onSubmit:(e)=>{
        e.preventDefault();
        console.log(val);
      },

      fields: [
        {
          fieldValue: '',
          label: "Имя",
          name: "login",
          ref: "loginRef",
          errorMessage: 'введите имя',
          onChange: (event) => {
            val.login = event.target.value;
          },
          onFocusOut: (t) => {
            this.refs.loginRef.loginMatches(val.login, this.refs.loginRef);
          }
        },
        {
          label: "Пароль",
          name: "password",
          ref: "pasRef",
          onChange: (event) => {
            val.pass = event.target.value;
          },
        },
      ],

    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
