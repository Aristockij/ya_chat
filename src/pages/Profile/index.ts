import Block from '../../utils/Block.ts';
import template from './profile.hbs';
import arrow from "../../icons/arrow.svg";
import { withStore } from '../../utils/Store.ts';
import AuthController from "../../controllers/AuthController.ts";
import avatar from '../../icons/avatar.svg';


class Profile extends Block {
    constructor(props: any) {
        super({
            arrowImg: arrow,
            logout: ()=> {
                AuthController.logout();
            },
            profileName: props.first_name,
            avatarRef:"avatarRef",
            avatarImg:  props.avatar ? `https://ya-praktikum.tech/api/v2/resources/${props.avatar}` : avatar,
            items:[
                {
                    itemName: "Почта",
                    ref: "mailRef",
                    itemValue: props.email,
                    tagName: "email",
                },
                {
                    itemName: "Логин",
                    ref: "loginRef",
                    itemValue: props.login,
                    tagName: "login",
                },
                {
                    itemName: "Имя",
                    ref: "nameRef",
                    itemValue: props.first_name,
                    tagName: "first_name",
                },
                {
                    itemName: "Фамилия",
                    ref: "namesecRef",
                    itemValue: props.second_name,
                    tagName: "second_name",
                },
                {
                    itemName: "Имя в чате",
                    ref: "nameChatRef",
                    itemValue: props.display_name,
                    tagName: "display_name",
                },
                {
                    itemName: "Телефон",
                    ref: "phoneRef",
                    itemValue: props.phone,
                    tagName: "phone",
                },
            ]
        });
    }
    render() {
        return this.compile(template, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(Profile);
