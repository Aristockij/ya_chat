import Block from '../../utils/Block';
import template from './404.hbs';
import {render} from "../../utils/render";


export class page404 extends Block {
    constructor() {
        super({
            linkChat: ()=>{
                render('chat')
            },
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
