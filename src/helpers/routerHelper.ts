import Block from '../utils/Block.ts';
import Router from '../utils/Router.ts';

interface BlockConstructable<P> {
    new(props: P): Block<P>;
}


export function withRouter(Component: BlockConstructable<any>) {
    type Props = PropsWithRouter & {
        [P in keyof P]: P;
    };

    return class WithRouter extends Component {
        constructor(props: Props & PropsWithRouter) {
            super({ ...props, router: Router});
        }
    }
}

export interface PropsWithRouter {
    router: typeof Router;
}
