import Block from '../../utils/Block';
import template from './ProfileAvatar.hbs';
import avatar from '../../icons/avatar.svg';

export class ProfileAvatar extends Block {
    constructor() {
        super({
            avatarImg: avatar
        });
    }
    render() {
        return this.compile(template, this.props);
    }
}
