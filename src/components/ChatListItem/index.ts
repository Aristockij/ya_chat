import Block from '../../utils/Block';
import template from './chatListItem.hbs';

interface ChatListItemProps {
    userName: string;
    dateMes: string;
    message: string;
    messCounter: string;
    onClick?: () => void;
    chatAvatar: string,
    events: {
        click: () => void;
    };
}

export class ChatListItem extends Block {
    constructor(props:ChatListItemProps) {
        super({
            ...props,
            events: {
                click: props.onClick,
            },
        })
    }
    
    render() {
        return this.compile(template, this.props);
    }
}
