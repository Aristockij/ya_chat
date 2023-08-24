import Handlebars from 'handlebars';
import { HelperOptions } from "handlebars";
import template from './form.hbs';
import Block from '../../utils/Block';

interface FormProps {
    onClick?: () => void;
    events: {
        click: () => void;
    };
}

export class Form extends Block {
    constructor(props: FormProps) {
        super({
            ...props,
            events: {
                click: props.onClick
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
