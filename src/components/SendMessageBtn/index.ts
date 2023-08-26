import Block from '../../utils/Block';
import template from './sendMessageBtn.hbs';
import sendMess from '../../icons/send.svg';

interface SendMessageBtnProps {
    onClick?: () => void;
    events: {
        click: () => void;
    };
}

export class SendMessageBtn extends Block {
    constructor(props: SendMessageBtnProps) {
        super({
            ...props,
            sendMessageImg: sendMess,
            events: {
                click: props.onClick
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
