import Block from '../../utils/Block';
import template from './userListItem.hbs';

export class UserListItem extends Block {
    render() {
        return this.compile(template, this.props);
    }
}
