import Block from '../../utils/Block';
import template from './Profile.hbs';
import {render} from "../../utils/render";


export class Profile extends Block {
    constructor() {
        super({
            linkChat: ()=>{
                render('chat')
            },
            linkChangeInfo: ()=>{
                render('changeInfo')
            },
            linkChangePassword: ()=>{
                render('changePassword')
            },
            items:[
                {
                    itemName: "Почта",
                    itemValue: "dk@yandex.ru",
                },
                {
                    itemName: "Логин",
                    itemValue: "dmitry",
                },
                {
                    itemName: "Имя",
                    itemValue: "Дмитрий",
                },
                {
                    itemName: "Фамилия",
                    itemValue: "Дк",
                },
                {
                    itemName: "Имя в чате",
                    itemValue: "Дк",
                },
                {
                    itemName: "Телефон",
                    itemValue: "+7 (999) 999 99 99",
                },
            ]
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
