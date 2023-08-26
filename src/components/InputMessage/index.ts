import Block from '../../utils/Block';
import template from './inputMessage.hbs';


export class InputMessage extends Block {
    render() {
        return this.compile(template, this.props);
    }
}
