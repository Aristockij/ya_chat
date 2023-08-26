import Block from '../../utils/Block';
import template from './userListItem.hbs';
import avatar from '../../icons/avatar.svg';

interface UserListItemProps {
    userName: string;
    dateMes: string;
    message: string;
    messCounter: string;
}

export class UserListItem extends Block {
    constructor(props:UserListItemProps) {
        super({
            ...props,
            avatarImg: avatar,
        })
    }
    render() {
        return this.compile(template, this.props);
    }
}
