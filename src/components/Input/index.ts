import Block from '../../utils/Block';
import template from './input.hbs';

interface InputProps {
    label: string;
    value: string;
    onChange?: () => void;
    events: {
        change: () => void,
    };
}


export class Input extends Block {
    constructor(props: InputProps) {
        super({
            ...props,
            req: false,
            fieldValue: props.value || '',
            events: {
                change: props.onChange,
            },
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
