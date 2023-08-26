import Block from '../../utils/Block';
import template from './chat.hbs';
import {render} from "../../utils/render";

interface FieldValues {
    message: string;
}

export class Chat extends Block {
    constructor() {
        const val: FieldValues = {
            message: '',
        }
        super({
            linkProfile: ()=>{
             render('profile')
            },
            onSubmit: (e: MouseEvent)=>{
                e.preventDefault();
                if(val.message.length === 0 ){
                  this.props.errMes = true;
                  console.log('пустое поле');
                  return;
                }
                this.props.errMes = false;
                console.log(val)
                val.message = ''
            },
            onChange: (e: FocusEvent) => {
                const target = e.target as HTMLInputElement;
                val.message = target.value;
            },
            errMes: false,
            users:[
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },
                {
                    userName:"Вася",
                    dateMes:"12 апр 2020",
                    message:"тут какое-то сообщение новое сообщение ограниченное по длинне",
                    messCounter:3
                },

            ]
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
