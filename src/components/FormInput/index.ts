import Block from '../../utils/Block';
import template from './formInput.hbs';

interface FormInputProps {
    label: string;
    value: string;
    showPass: boolean;
    onKeyUp?: () => void;
    onFocusin?: () => void;
    onFocusOut?: () => void;
    onChange?: () => void;
    events: {
        focusin: () => void;
        focusout: () => void;
        change: () => void,
        keyup: () => void;
    };
}

interface BlockInterface {
    setProps(props: any): void;
}

export class FormInput extends Block {
    constructor(props: FormInputProps) {
        super({
            ...props,
            req: false,
            showPass: false,
            fieldValue: props.value || '',
            errorMessage: 'ошибка',
            events: {
                focusin: props.onFocusin,
                focusout: props.onFocusOut,
                change: props.onChange,
                keyup: props.onKeyUp,
            },
        });
    }


    checkMatches(val:object, ref: BlockInterface, reg: any, mes:string) {
        if (!reg.test(val)) {
            ref.setProps({
                fieldValue: val,
                errorMessage: mes,
                req: true,
            })
            console.log(val)
        } else {
            ref.setProps({
                fieldValue: val,
                req: false
            })
        }
    }

    render() {
        return this.compile(template, this.props);
    }
}
