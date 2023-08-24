import Block from '../../utils/Block';
import template from './formInput.hbs';

interface InputTestProps {
    label: string;
    value: string;
    onKeyUp?: () => void;
    onBlur?: () => void;
    onEnter?: () => void;
    events: {
        keyup: () => void;
        blur: () => void;
        mouseenter: () => void;
    };
}


export class InputTest extends Block {
    constructor(props: InputTestProps) {
        super({
            ...props,
            req: false,
            errorMessage: 'ошибка',
            events: {
                keyup: props.onKeyUp,
                mouseenter: props.onEnter,
                blur: props.onBlur,
            },
        });
    }

    getValue() {
        const inputElement = document.querySelector(`[name="${this.props.fieldName}"]`) as HTMLInputElement;
        if (inputElement) {
            return inputElement.value;
        }
        return '';
    }

    render() {
        return this.compile(template, this.props);
    }
}
