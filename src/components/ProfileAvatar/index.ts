import Block from '../../utils/Block';
import template from './profileAvatar.hbs';
import avatar from '../../icons/avatar.svg';

export class ProfileAvatar extends Block {
    constructor(props: any) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
