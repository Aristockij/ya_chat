import Block from '../../utils/Block';
import template from './outMessage.hbs';

interface OutMessageProps {
    message: string;
    isMine: boolean;
}

export class OutMessage extends Block {
    constructor(props: OutMessageProps) {
        super(props);
    }

    render() {
        return this.compile(template, this.props);
    }
}
