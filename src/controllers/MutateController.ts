import API, {UserAPI, UserData, UserPassword} from "../api/UserAPI";
import store from "../utils/Store";
import router from "../utils/Router";

export class MutateController {
    private readonly api: UserAPI;

    constructor() {
        this.api = API;
    }

    async mutate(data: UserData) {
        try {
            await this.api.mutateUser(data);

            store.set('user', data);

            router.go('/profile');
        } catch (e: any) {
            console.error(e.message);
        }
    }
    async mutateAvatar(data: FormData) {
        try {
            await this.api.mutateAvatar(data);

            store.set('user', data);
            console.log(data)
        } catch (e: any) {
            console.error(e.message);
        }
    }

    async mutatePassword(data: UserPassword) {
        try {
            await this.api.mutatePassword(data);

            router.go('/profile');
        } catch (e: any) {
            console.error(e.message);
        }
    }
}

export default new MutateController();
