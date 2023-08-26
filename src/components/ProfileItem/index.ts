import Block from '../../utils/Block';
import template from './ProfileItem.hbs';


export class ProfileItem extends Block {
    render() {
        return this.compile(template, this.props);
    }
}
