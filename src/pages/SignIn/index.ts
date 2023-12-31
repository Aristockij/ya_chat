import Block from '../../utils/Block';
import template from './signIn.hbs';
import {FormInput} from "../../components/FormInput";
import AuthController from "../../controllers/AuthController";
import { SigninData } from '../../api/AuthAPI';


export class SignIn extends Block {
  constructor() {
    const loginRegExp = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;
    const val:Record<string, string> = {
      login:  '',
      password: '',
    }

    super({
      onSubmit:(e: MouseEvent)=>{
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
        // if(){
        //
        // }
        if (hasErrors) {
          return;
        }

        AuthController.signin(val as unknown as SigninData);
      },
      fields: [
        {
          fieldValue: '',
          label: "Логин",
          name: "login",
          ref: "loginRef",
          errorMessage: 'введите имя',
          fieldType: "text",
          onChange: (e: FocusEvent) => {
            const target = e.target as HTMLInputElement;
            val.login = target.value;
          },
          onFocusOut: (t: FocusEvent) => {
            const target = t.target as HTMLInputElement;
            (this.refs.loginRef as FormInput).checkMatches(target.value, loginRegExp, 'логин должен быть длиннее 3 символов и начинаться с буквы');
          }
        },
        {
          label: "Пароль",
          name: "password",
          ref: "pasRef",
          showPass: true,
          fieldType: "password",
          onChange: (e: FocusEvent) => {
            const target = e.target as HTMLInputElement;
            val.password = target.value;
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
