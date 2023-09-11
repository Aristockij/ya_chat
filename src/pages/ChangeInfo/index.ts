import Block from '../../utils/Block';
import template from './changeInfo.hbs';
import {FormInput} from "../../components/FormInput";
import arrow from "../../icons/arrow.svg";
import store, {withStore} from "../../utils/Store";
import MutateController from "../../controllers/MutateController";
import {UserData} from "../../api/UserAPI";
import avatar from "../../icons/avatar.svg";

export class ChangeInfo extends Block {
    constructor() {
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

                MutateController.mutate(val as UserData);

            },
            avatarRef:"avatarRef",
            avatarImg: '',
            arrowImg: arrow,
            typeName: "file",
            nameInput: "avatar",
            accept: "image/*",
            inputAvatarRef: "inputAvatarRef",
            uploadAvatar: (e)=>{
                const fileInput = e.target;
                const selectedFile = fileInput.files[0];
                const formData: FormData = new FormData()
                let avatar = formData.append('avatar', selectedFile);

                MutateController.mutateAvatar(avatar);
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
                    name: "display_name",
                    label: "Имя в чате",
                    ref: "display_nameRef",
                    fieldType: "text",
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
            email:  this.props.fields[0].value,
            login: this.props.fields[1].value,
            first_name: this.props.fields[2].value,
            second_name: this.props.fields[3].value,
            display_name: this.props.fields[4].value,
            phone: this.props.fields[5].value,
        };

        (this.props.fields.map((item)=>{
            const tagName = item.name;

            if (store.getState().user.hasOwnProperty(tagName)) {
                this.refs[item.ref].setProps({ fieldValue: store.getState().user[tagName] });
            }
            if(val.hasOwnProperty(tagName)){
                val[tagName] = store.getState().user[tagName]
            }
        }))
        this.refs.avatarRef.setProps({profileName: store.getState().user.first_name })
        this.refs.avatarRef.setProps({avatarImg: store.getState().user.avatar})

        console.log(store.getState().user)
    }
    render() {
        return this.compile(template, this.props);
    }
}

const withInfo = withStore((state) => ({ ...state.user }))

export const ChangeInfoPage = withInfo(ChangeInfo);
