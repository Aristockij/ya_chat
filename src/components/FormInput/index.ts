import Block from '../../utils/Block';
import template from './formInput.hbs';

interface FormInputProps {
    label: string;
    value: string;
    onKeyUp?: () => void;
    onFocusin?: () => void;
    onFocusOut?: () => void;
    onChange?: (value: string) => void;
    events: {
        focusin: () => void;
        focusout: () => void;
        change: () => void,
        keyup: () => void;
    };
}

export class FormInput extends Block {
    constructor(props: FormInputProps) {
        super({
            ...props,
            req: false,
            value: props.value || '',
            errorMessage: 'ошибка',
            events: {
                focusin: props.onFocusin,
                focusout: props.onFocusOut,
                change: props.onChange,
                keyup: props.onKeyUp,
            },
        });
    }
    getValue() {
        const inputElement = this.element.querySelector('input') as HTMLInputElement;
        if (inputElement) {
            return inputElement.value;
        }
        return '';
    }
    render() {
        return this.compile(template, this.props);
    }
}
