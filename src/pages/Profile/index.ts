import Block from '../../utils/Block';
import template from './profile.hbs';
import arrow from "../../icons/arrow.svg";
import store, { withStore } from '../../utils/Store';
import AuthController from "../../controllers/AuthController";
import avatar from '../../icons/avatar.svg';


class Profile extends Block {
    constructor() {
        super({
            arrowImg: arrow,
            logout: ()=> {
                AuthController.logout();
            },
            profileName: '',
            avatarRef:"avatarRef",
            avatarImg: avatar,
            items:[
                {
                    itemName: "Почта",
                    ref: "mailRef",
                    itemValue: "",
                    tagName: "email",
                },
                {
                    itemName: "Логин",
                    ref: "loginRef",
                    itemValue: "dmitry",
                    tagName: "login",
                },
                {
                    itemName: "Имя",
                    ref: "nameRef",
                    itemValue: "Дмитрий",
                    tagName: "first_name",
                },
                {
                    itemName: "Фамилия",
                    ref: "namesecRef",
                    itemValue: "Дк",
                    tagName: "second_name",
                },
                {
                    itemName: "Имя в чате",
                    ref: "nameChatRef",
                    itemValue: "Дк",
                    tagName: "display_name",
                },
                {
                    itemName: "Телефон",
                    ref: "phoneRef",
                    itemValue: "+7 (999) 999 99 99",
                    tagName: "phone",
                },
            ]
        });
        (this.props.items.map((item)=>{
            const tagName = item.tagName;
            if (store.getState().user.hasOwnProperty(tagName)) {
                this.refs[item.ref].setProps({ itemValue: store.getState().user[tagName] });
            }
        }))
        this.refs.avatarRef.setProps({profileName: store.getState().user.first_name })
    }
    render() {
        return this.compile(template, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(Profile);
