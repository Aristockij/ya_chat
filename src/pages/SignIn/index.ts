import Block from '../../utils/Block';
import template from './signIn.hbs';
import {render} from "../../utils/render";

export class SignIn extends Block {
  constructor() {
    const val = {
      login:  ''
    }
    super({
      onSignUp: ()=> {
        render('signUp')
      },
      fields: [
        {
          label: "Имя",
          name: "login",
          ref: "loginRef",
          errorMessage: 'введите имя',
          onChange: (t) => {
            if(t.target.value.length < 3){
              this.refs.loginRef.setProps({
                req: true,
              })
            }else{
              this.refs.loginRef.setProps({
                req: false
              })
            }
          },
        },
        {
          label: "Пароль",
          name: "password",
          ref: "pasRef",
          onKeyUp: (e)=>{
            console.log(e)
          },
          onFocus: (e)=>{
            console.log(e)
          },
        },
      ],

    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
