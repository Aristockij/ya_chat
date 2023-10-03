import Block from '../utils/Block.ts';
import Router from '../utils/Router.ts';

export interface BlockConstructable<P> {
    new(props: P): Block<P>;
}

export interface PropsWithRouter {
    router: typeof Router;
}


export function withRouter<P extends Record<string, any> & PropsWithRouter>(Component: BlockConstructable<P>) {
    type Props = P & PropsWithRouter;

    return class WithRouter extends Component {
        constructor(props: Props) {
            super({ ...props, router: Router });
        }
    } as typeof Block;
}
