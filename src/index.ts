import {Button} from './components/Button';
import {Link} from './components/Link';
import {registerComponent} from "./utils/resgiterComponent";
import {FormInput} from "./components/FormInput";
import {ChatListItem} from "./components/ChatListItem";
import {OutMessage} from "./components/OutMessage";
import {InputMessage} from "./components/InputMessage";
import {SendMessageBtn} from "./components/SendMessageBtn";
import {Input} from "./components/Input";
import {ProfileAvatar} from "./components/ProfileAvatar";
import {ProfileItem} from "./components/ProfileItem";
import Router from './utils/Router';
import {HomePage} from "./pages/Home";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {ProfilePage} from "./pages/Profile";
import {ChangeInfoPage} from "./pages/ChangeInfo";
import {ChatPage} from "./pages/Chat";
import AuthController from './controllers/AuthController';
import {ChangePassword} from "./pages/ChangePassword";
import ChatsController from "./controllers/ChatsController";
import {Messenger} from "./components/ChatView";
import {ChatUserItem} from "./components/ChatUserItem";
import {PopupWrap} from "./components/PopupWrap";

registerComponent('Button', Button);
registerComponent('Link', Link);
registerComponent('FormInput', FormInput);
registerComponent('ChatListItem', ChatListItem);
registerComponent('OutMessage', OutMessage);
registerComponent('InputMessage', InputMessage);
registerComponent('SendMessageBtn', SendMessageBtn);
registerComponent('Input', Input);
registerComponent('ProfileAvatar', ProfileAvatar);
registerComponent('ProfileItem', ProfileItem);
registerComponent('Messenger', Messenger);
registerComponent('ChatUserItem', ChatUserItem);
registerComponent('PopupWrap', PopupWrap);


enum Routes {
  Index = '/list',
  SignIn = '/',
  SignUp = '/sign-up',
  Profile = '/profile',
  Chat = '/messenger',
  ChangeInfo = '/settings',
  ChangePassword = '/changePassword',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
      .use(Routes.Index, HomePage)
      .use(Routes.SignIn, SignIn)
      .use(Routes.SignUp, SignUp)
      .use(Routes.Profile, ProfilePage)
      .use(Routes.Chat, ChatPage)
      .use(Routes.ChangeInfo, ChangeInfoPage)
      .use(Routes.ChangePassword, ChangePassword)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.SignUp:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();
    await ChatsController.fetchChats();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Profile)
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }

});
