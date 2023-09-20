import Block from '../../utils/Block';
import template from './500.hbs';
import Router from "../../utils/Router";


export class page500 extends Block {
    constructor() {
        super({
            linkChat: ()=>{
                Router.go('chat')
            },
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
