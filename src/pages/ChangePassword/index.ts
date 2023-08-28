import Block from '../../utils/Block';
import template from './changePassword.hbs';
import {render} from "../../utils/render";
import {FormInput} from "../../components/FormInput";
import arrow from "../../icons/arrow.svg";


export class ChangePassword extends Block {
    constructor() {
        const passRegExp = /^(?=.*[A-Z])(?=.*\d).{8,40}$/i;
        const val: Record<string, string> = {
            oldPassword: '',
            newPassword: '',
            newPasswordAgain: '',
        };
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
            arrowImg: arrow,
            fields: [
                {
                    name: "oldPassword",
                    label: "Старый пароль",
                    ref: "oldPass",
                    fieldType: "text",
                    showPass: true,
                    onChange: (e: FocusEvent) => {
                        const target = e.target as HTMLInputElement;
                        val.oldPassword = target.value;
                    },
                    onFocusOut: (t: FocusEvent)=>{
                        const target = t.target as HTMLInputElement;
                        (this.refs.oldPass as FormInput).checkMatches(target.value, passRegExp,"от 8 до 40 символов, хотя бы одна заглавная буква и цифра." );
                    }
                },
                {
                    name: "newPassword",
                    label: "Новый пароль",
                    ref: "newPass",
                    fieldType: "text",
                    showPass: true,
                    onChange: (e: FocusEvent) => {
                        const target = e.target as HTMLInputElement;
                        val.newPassword = target.value;
                    },
                    onFocusOut: (t: FocusEvent)=>{
                        const target = t.target as HTMLInputElement;
                        (this.refs.newPass as FormInput).checkMatches(target.value, passRegExp,"от 8 до 40 символов, хотя бы одна заглавная буква и цифра." );
                    }
                },
                {
                    name: "newPasswordAgain",
                    label: "Повторите новый пароль",
                    ref: "passRefAgain",
                    fieldType: "text",
                    showPass: true,
                    onChange: (e: FocusEvent) => {
                        const target = e.target as HTMLInputElement;
                        val.newPasswordAgain = target.value;
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
