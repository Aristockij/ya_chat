import Block from '../../utils/Block';
import template from './formInput.hbs';

interface FormInputProps {
    label: string;
    value: string;
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
const loginRegExp = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;
const mailRegExp = /.+@.+\..+/i;
const passRegExp = /^(?=.[A-Z])(?=.\d)[A-Za-z\d]{8,40}$/;
const nameRegExp = /^[a-яё]+(?:[-][a-яё]+)*$/i


export class FormInput extends Block {
    constructor(props: FormInputProps) {
        super({
            ...props,
            req: false,
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
    loginMatches(val, ref){
        if(val.length < 3 || !loginRegExp.test(val)){
            ref.setProps({
                fieldValue: val,
                errorMessage: "пароль должен быть длиннее 3 символов и начинаться с буквы",
                req: true,
            })
        }else if(val.length  >= 20 || !loginRegExp.test(val)){
            ref.setProps({
                fieldValue: val,
                errorMessage: "пароль должен быть короче 20 символов и начинаться с буквы",
                req: true,
            })
        }
        else{
            ref.setProps({
                fieldValue: val,
                req: false
            })
        }
    }
    mailMatches(val, ref){
        if(!mailRegExp.test(val)){
            ref.setProps({
                fieldValue: val,
                errorMessage: "символ @ обязателен",
                req: true,
            })
        }else{
            ref.setProps({
                fieldValue: val,
                req: false
            })
        }
    }
    passMatches(val, ref){
        if(!passRegExp.test(val)){
            ref.setProps({
                fieldValue: val,
                errorMessage: "пароль должен быть больше 8 символов",
                req: true,
            })
        }else{
            ref.setProps({
                fieldValue: val,
                req: false
            })
        }
    }
    nameMatches(val, ref){
        if(!nameRegExp.test(val)){
            ref.setProps({
                fieldValue: val,
                errorMessage: "есть недопустимые символы",
                req: true,
            })
        }else{
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
