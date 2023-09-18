import Block from "../../utils/Block";
import template from './chatView.hbs';
import store, { withStore } from '../../utils/Store';
import MessagesController, { Message as MessageInfo } from '../../controllers/MessagesController';
import addFile from "../../icons/addfile.svg";
import avatar from "../../icons/avatar.svg";
import dots from "../../icons/dots.svg";
import basket from "../../icons/basket.svg";
import ChatsController from "../../controllers/ChatsController";
import UserController from "../../controllers/UserController";

interface MessengerProps {
    selectedChat: number | undefined;
    selectedChatName: string | undefined;
    messages: MessageInfo[];
    userId: number;
    selectChatName: string,
    avatarImg: string,
    users: object[],
    isMine: boolean;
    events: {
        click: () => void
    }
}

interface FieldValues {
    message: string;
}

interface FieldValuesSearch {
    login: string;
}

class ChatView extends Block{
    constructor(props: MessengerProps) {
        const val: FieldValues = {
            message: '',
        }
        const valUser: FieldValuesSearch = {
            login: '',
        }
        super({
            ...props,
            addFileImg: addFile,
            dotsImg: dots,
            basketImg: basket,
            chatName: props.selectChatName,
            selfUser: props.userId,
            popupRef: "popupRef",
            isMine: props.isMine,

            sendMessage:(e: FocusEvent)=>{
                e.preventDefault();
                if(val.message.length === 0 ){
                    this.props.errMes = true;
                    console.log('пустое поле');
                    return;
                }
                this.props.errMes = false;

                MessagesController.sendMessage(this.props.selectedChat!, val.message);

                console.log(this.props);
                val.message = ''
            },
            addFile: () => {
                console.log(props);
            },
            onChange: (e: FocusEvent) => {
                const target = e.target as HTMLInputElement;
                val.message = target.value;
            },
            closeChat:() => {
                const selectedChatId = props.selectedChat;
                if (selectedChatId !== undefined) {
                    ChatsController.delete(selectedChatId);
                } else {
                    console.error('selectedChatId is undefined');
                }
            },
            searchUser:(e: FocusEvent) => {
                const target = e.target as HTMLInputElement;
                valUser.login = target.value;
            },
            addUser:()=>{
                UserController.searchUser(valUser, props.selectedChat);
            },
            addAvatar:(e)=>{
                const fileInput = e.target;
                const selectedFile = fileInput.files[0];
                let chatId: number | undefined = props.selectedChat;

                ChatsController.addAvatar(chatId, selectedFile);
            },
        });
    }
    render() {
        return this.compile(template, this.props);
    }
}

const withSelectedChatMessages = withStore(state => {
    const selectedChatId = state.selectedChat;

    const selectedChat = state.chats.find(chat => chat.id === selectedChatId);
    const avatarImg = selectedChat ? selectedChat.avatar : undefined;

    if (!selectedChatId) {
        return {
            messages: [],
            selectedChat: undefined,
            selectedChatName: undefined,
            userId: state.user.id
        };
    }

    const usersWithLog = (selectedChat ? selectedChat.users : null) || [];
    usersWithLog.forEach(user => {
        user.deleteUser = () => {
            if(state.selectedChat !== undefined){
                ChatsController.deleteUser(state.selectedChat, user.id)
            }
        };
    });

    const messages = (state.messages || {})[selectedChatId].map((item)=>{
        return {...item, isMine: state.user.id  === item.user_id}
    })

    return {
        messages: messages || [],
        selectedChat: state.selectedChat,
        selectedChatName: state.selectedChatName,
        userId: state.user.id,
        avatarImg: avatarImg ? `https://ya-praktikum.tech/api/v2/resources/${avatarImg}` : avatar,
        users: usersWithLog,
        isOpenPopup: state.isOpenPopup,
        openPopup:()=>{
            store.set("isOpenPopup", true)
        },
        closePopup:()=>{
            store.set("isOpenPopup", false)
        }
    };
});

export const Messenger = withSelectedChatMessages(ChatView);
