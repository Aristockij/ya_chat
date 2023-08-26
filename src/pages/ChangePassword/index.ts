import Block from '../../utils/Block';
import template from './changePassword.hbs';
import {render} from "../../utils/render";
import {FormInput} from "../../components/FormInput";

export class ChangePassword extends Block {
    constructor() {
        const passRegExp = /^(?=.*[A-Z])(?=.*\d).{8,40}$/i;

        super({
            linkChat:()=>{
                render('profile')
            },
            onSubmit: (e: MouseEvent) => {
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
                if(val.newPassword !== val.newPasswordAgain){
                    this.refs.passRefAgain.setProps({
                        errorMessage: 'пароли не совпадают',
                        req: true,
                    })
                    return;
                }
                if (hasErrors || val.newPassword !== val.newPasswordAgain ) {
                    return;
                }

                console.log(val);
            },

            fields: [
                {
                    name: "oldPassword",
                    label: "Старый пароль",
                    ref: "oldPass",
                    fieldType: "text",
                    showPass: true,
                    onChange: (event: object) => {
                        val.oldPassword = event.target.value;
                    },
                    onFocusOut: (t: object)=>{
                        (this.refs.oldPass as FormInput).checkMatches(t.target.value, this.refs.oldPass, passRegExp,"от 8 до 40 символов, хотя бы одна заглавная буква и цифра." );
                    }
                },
                {
                    name: "newPassword",
                    label: "Новый пароль",
                    ref: "newPass",
                    fieldType: "text",
                    showPass: true,
                    onChange: (event: object) => {
                        val.newPassword = event.target.value;
                    },
                    onFocusOut: (t: object)=>{
                        (this.refs.newPass as FormInput).checkMatches(t.target.value, this.refs.newPass, passRegExp,"от 8 до 40 символов, хотя бы одна заглавная буква и цифра." );
                    }
                },
                {
                    name: "newPasswordAgain",
                    label: "Повторите новый пароль",
                    ref: "passRefAgain",
                    fieldType: "text",
                    showPass: true,
                    onChange: (event: object) => {
                        val.newPasswordAgain = event.target.value;
                    },
                    onFocusOut: (t: object)=>{
                        (this.refs.passRefAgain as FormInput).checkMatches(t.target.value, this.refs.passRefAgain, passRegExp,"от 8 до 40 символов, хотя бы одна заглавная буква и цифра." );
                    }
                },
            ]
        });

        const val = {
            oldPassword: '',
            newPassword: '',
            newPasswordAgain: '',
        };

    }

    render() {
        return this.compile(template, this.props);
    }
}
