import Block from '../../utils/Block';
import template from './signIn.hbs';
import {render} from "../../utils/render";
import {FormInput} from "../../components/FormInput";

export class SignIn extends Block {
  constructor() {
    const loginRegExp = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;

    const val = {
      login:  '',
      password: '',
    }
    super({
      onSignUp: ()=> {
        render('signUp');
      },
      onSubmit:(e)=>{
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

        console.log(val);
      },
      fields: [
        {
          fieldValue: '',
          label: "Логин",
          name: "login",
          ref: "loginRef",
          errorMessage: 'введите имя',
          fieldType: "text",
          onChange: (event) => {
            val.login = event.target.value;
          },
          onFocusOut: (t) => {
            (this.refs.loginRef as FormInput).checkMatches(t.target.value, this.refs.loginRef, loginRegExp, 'логин должен быть длиннее 3 символов и начинаться с буквы');
          }
        },
        {
          label: "Пароль",
          name: "password",
          ref: "pasRef",
          showPass: true,
          fieldType: "password",
          onChange: (event) => {
            val.password = event.target.value;
          },
        },
      ],

    });
    (this.refs.pasRef as FormInput).setProps({showPass: true,})
  }
  render() {
    return this.compile(template, this.props);
  }
}
