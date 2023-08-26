import Block from '../../utils/Block';
import template from './outMessage.hbs';


export class OutMessage extends Block {
    render() {
        return this.compile(template, this.props);
    }
}
