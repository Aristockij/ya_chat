import Block from '../../utils/Block';
import template from './changeInfo.hbs';
import {FormInput} from "../../components/FormInput";
import arrow from "../../icons/arrow.svg";
import {withStore} from "../../utils/Store";
import MutateController from "../../controllers/UserController";
import {UserData} from "../../api/UserAPI";
import avatar from "../../icons/avatar.svg";

export class ChangeInfo extends Block {
    constructor(props: any) {
        const loginRegExp = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;
        const mailRegExp = /.+@.+\..+/i;
        const nameRegExp = /^[a-яё]+(?:[-][a-яё]+)*$/i
        const phoneRegExp = /^\+?\d{10,15}$/;
        super({

            onSubmit: (e: MouseEvent) => {
                e.preventDefault();
                const fieldsName = this.props.fields;
                let hasErrors = false

                for (let i = 0; i < fieldsName.length; i++) {
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

                if (hasErrors) {
                    return;
                }

                MutateController.mutateUserInfo(val as UserData);

            },
            avatarImg: props.avatarImg,
            arrowImg: arrow,
            uploadAvatar: (e: Event)=>{
                const fileInput = e.target as HTMLInputElement;
                const files = fileInput.files;
                if (files && files.length > 0) {
                    const selectedFile = files[0];

                    MutateController.mutateAvatar(selectedFile);
                } else {
                    console.error('Не выбран файл');
                }
            },
            fields: [
                {
                    name: "email",
                    label: "Почта",
                    ref: "emailRef",
                    fieldType: "text",
                    fieldValue: props.email,
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
                    fieldValue: props.login,
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
                    fieldValue: props.first_name,
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
                    fieldValue: props.second_name,
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
                    name: "display_name",
                    label: "Имя в чате",
                    ref: "display_nameRef",
                    fieldType: "text",
                    fieldValue: props.display_name,
                    onChange: (e: FocusEvent) => {
                        const target = e.target as HTMLInputElement;
                        val.display_name = target.value;
                    },
                    onFocusOut: (t: FocusEvent)=>{
                        const target = t.target as HTMLInputElement;
                        (this.refs.display_nameRef as FormInput).checkMatches(target.value, loginRegExp,"длиннее 3 символов и начинаться с буквы" );
                    }
                },
                {
                    name: "phone",
                    label: "Телефон",
                    ref: "phoneRef",
                    fieldType: "text",
                    showPass: true,
                    fieldValue: props.phone,
                    onChange: (e: FocusEvent) => {
                        const target = e.target as HTMLInputElement;
                        val.phone = target.value;
                    },
                    onFocusOut: (t: FocusEvent)=>{
                        const target = t.target as HTMLInputElement;
                        (this.refs.phoneRef as FormInput).checkMatches(target.value, phoneRegExp,"от 8 до 40 символов, хотя бы одна заглавная буква и цифра." );
                    }
                },
            ]
        });
        const val: Record<string, string> = {
            email:  props.email,
            login: props.login,
            first_name: props.first_name,
            second_name: props.second_name,
            display_name: props.display_name,
            phone: props.phone,
        };
    }
    render() {
        return this.compile(template, this.props);
    }
}

const withInfo = withStore((state) => ({
    ...state.user,
    avatarImg: state.user.avatar ? `https://ya-praktikum.tech/api/v2/resources/${state.user.avatar}` : avatar,
}))

export const ChangeInfoPage = withInfo(ChangeInfo);
