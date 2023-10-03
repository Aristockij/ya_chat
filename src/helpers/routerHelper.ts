import Block from '../utils/Block.ts';
import Router from '../utils/Router.ts';

interface BlockConstructable<P> {
    new(props: P): Block<P>;
}


export function withRouter<P extends PropsWithRouter>(Component: BlockConstructable<P>) {
    type Props = P & PropsWithRouter;

    return class WithRouter extends Component {
        constructor(props: Props & PropsWithRouter) {
            super({ ...props, router: Router});
        }
    }
}

export interface PropsWithRouter {
    router: typeof Router;
}
