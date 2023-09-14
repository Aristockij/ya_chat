import Block from '../../utils/Block';
import template from './chat.hbs';
import avatar from "../../icons/avatar.svg";
import setting from "../../icons/setting.svg";
import dots from "../../icons/dots.svg";
import ChatsController from "../../controllers/ChatsController";
import store, {withStore} from "../../utils/Store";


interface LoginValues {
    login: string;
}

class Chat extends Block {
    constructor(props) {

        let login: LoginValues={
            login: '',
        }
        super({
            onSubmit: (e: MouseEvent)=>{
                e.preventDefault();
            },
            searchUser:(e: FocusEvent)=>{
                const target = e.target as HTMLInputElement;
                login.login = target.value;
            },
            sendMessage: (e: FocusEvent) => {
                const target = e.target as HTMLInputElement;
                // val.message = target.value;
            },
            searchRef: "searchRef",
            avatarImg: avatar,
            settingImg: setting,
            errMes: false,

            chatAvatar: props.chatAvatar,
            messages: props.messages,
            selectChat: props.selectChat,
            selectChatName: props.selectChatName,

            chat: [
                { messages: 'asd' },
            ],
            addUser:()=>{
                ChatsController.create(login.login);
            },
        });
    }
    render() {
        return this.compile(template, this.props);
    }
}

const withChat = withStore((state) => ({
    selectChat: state.selectedChat,
    chatName: state.selectedChat,
    chats: state.chats.map((item, index)=>{
        return {
            onChat:()=>{
                // ChatsController.delete(item.id)
                ChatsController.selectChat(item.id)
                ChatsController.selectChatName(item.title)
            },
            chatAvatar: item.avatar ? `https://ya-praktikum.tech/api/v2/resources/${item.avatar}` : avatar,
            userName: item.title,
            messCounter: item.unread_count,
            message: item.last_message
        }
    })
}))

export const ChatPage = withChat(Chat);
