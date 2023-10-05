import { set } from "../helpers/setAndMergeHelper.ts";
import { EventBus } from './EventBus.ts';
import Block from './Block.ts';
import { User } from '../api/AuthAPI.ts';
import { ChatInfo } from '../api/ChatAPI.ts';
import { Message } from '../controllers/MessagesController.ts';

type PropsObject = Record<string, any>;

export enum StoreEvents {
    Updated = 'updated'
}

interface State {
    user: User;
    chats: ChatInfo[];
    messages: Record<number, Message[]>;
    selectedChat?: number;
    selectedChatName?: string;
    isOpenPopup?: boolean;
}

export class Store extends EventBus {
    private state: any = {};

    public set(keypath: string, data: unknown) {
        set(this.state, keypath, data);

        this.emit(StoreEvents.Updated, this.getState());
    }

    public getState() {
        return this.state;
    }
}

const store = new Store();

interface WithStoreConstructable<P extends Record<string, any>, SP> {
    new(props: P & SP): Block<P & SP>;
}

export function withStore<SP>(mapStateToProps: (state: State) => SP) {
    return function wrap<P extends PropsObject>(Component: WithStoreConstructable<P, SP>) {
        return class WithStore extends Component {

            constructor(props: Omit<P, keyof SP>) {
                let previousState = mapStateToProps(store.getState());

                super({ ...(props as P), ...previousState });

                store.on(StoreEvents.Updated, () => {
                    const stateProps = mapStateToProps(store.getState());

                    previousState = stateProps;

                    this.setProps({ ...stateProps });
                });
            }
        } as typeof Block;
    }
}

export default store;
