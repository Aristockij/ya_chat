import Block from '../../utils/Block';
import template from './changeInfo.hbs';
import {render} from "../../utils/render";
import {FormInput} from "../../components/FormInput";

export class ChangeInfo extends Block {
    constructor() {
        const loginRegExp = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;
        const mailRegExp = /.+@.+\..+/i;
        const nameRegExp = /^[a-яё]+(?:[-][a-яё]+)*$/i
        const phoneRegExp = /^\+?\d{10,15}$/;

        super({
            linkChat:()=>{
                render('profile')
            },
            onSubmit: (e) => {
                e.preventDefault();
                let fieldsName = this.props.fields;
                let hasErrors = false

                for(let i = 0;  i < fieldsName.length; i++ ){
                    for (let key in val){
                        let nameRef = this.props.fields[i].ref;

                        if(key === fieldsName[i].name && val[key]?.length === 0 ){

                            this.refs[nameRef].setProps({
                                errorMessage: 'пустое поле',
                                req: true,
                            })

                            hasErrors = true;
                        }
                    }
                }
                if (hasErrors) {
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
                    value: "dk@yandex.ru",
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
                    value: "dmitry",
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
                    value: "Дмитрий",
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
                    value: "Дк",
                    onChange: (event) => {
                        val.second_name = event.target.value;
                    },
                    onFocusOut: (t)=>{
                        (this.refs.second_nameRef as FormInput).checkMatches(t.target.value, this.refs.second_nameRef, nameRegExp,"первая буква заглавная, без пробелов, цифр, спецсимволов" );
                    }
                },
                {
                    name: "display_name",
                    label: "Имя в чате",
                    ref: "display_nameRef",
                    fieldType: "text",
                    value: "Дк",
                    onChange: (event) => {
                        val.display_name = event.target.value;
                    },
                    onFocusOut: (t)=>{
                        (this.refs.display_nameRef as FormInput).checkMatches(t.target.value, this.refs.display_nameRef, loginRegExp,"длиннее 3 символов и начинаться с буквы" );
                    }
                },
                {
                    name: "phone",
                    label: "Телефон",
                    ref: "phoneRef",
                    fieldType: "text",
                    showPass: true,
                    value: "+7 (999) 999 99 99",
                    onChange: (event) => {
                        val.phone = event.target.value;
                    },
                    onFocusOut: (t)=>{
                        (this.refs.phoneRef as FormInput).checkMatches(t.target.value, this.refs.phoneRef, phoneRegExp,"от 8 до 40 символов, хотя бы одна заглавная буква и цифра." );
                    }
                },
            ]
        });

        const val = {
            email:  this.props.fields[0].value,
            login: this.props.fields[1].value,
            first_name: this.props.fields[2].value,
            second_name: this.props.fields[3].value,
            display_name: this.props.fields[4].value,
            phone: this.props.fields[5].value,
        };
    }

    render() {
        return this.compile(template, this.props);
    }
}
