import Block from '../../utils/Block';
import template from './ProfileAvatar.hbs';


export class ProfileAvatar extends Block {
    render() {
        return this.compile(template, this.props);
    }
}
