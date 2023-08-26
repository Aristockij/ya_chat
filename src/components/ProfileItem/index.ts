import Block from '../../utils/Block';
import template from './profileItem.hbs';


export class ProfileItem extends Block {
    render() {
        return this.compile(template, this.props);
    }
}
