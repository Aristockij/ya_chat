import {Button} from './components/Button';
import {Link} from './components/Link';
import {registerComponent} from "./utils/resgiterComponent";
import {FormInput} from "./components/FormInput";
import {UserListItem} from "./components/UserListItem";
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
import {Profile} from "./pages/Profile";
import {Chat} from "./pages/Chat";
import {ChangeInfo} from "./pages/ChangeInfo";
import {ChangePassword} from "./pages/ChangePassword";

registerComponent('Button', Button);
registerComponent('Link', Link);
registerComponent('FormInput', FormInput);
registerComponent('UserListItem', UserListItem);
registerComponent('OutMessage', OutMessage);
registerComponent('InputMessage', InputMessage);
registerComponent('SendMessageBtn', SendMessageBtn);
registerComponent('Input', Input);
registerComponent('ProfileAvatar', ProfileAvatar);
registerComponent('ProfileItem', ProfileItem);


enum Routes {
  Index = '/',
  SignIn = '/signIn',
  SignUp = '/signUp',
  // Profile = '/profile',
  // Chat = '/chat',
  // ChangeInfo = '/changeInfo',
  // ChangePassword = '/changePassword',

}

window.addEventListener('DOMContentLoaded', async () => {
  Router
      .use(Routes.Index, HomePage)
      .use(Routes.SignIn, SignIn)
      .use(Routes.SignUp, SignUp)
      // .use(Routes.Profile, Profile)
      // .use(Routes.Chat, Chat)
      // .use(Routes.ChangeInfo, ChangeInfo)
      // .use(Routes.ChangePassword, ChangePassword)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    // case Routes.Register:
    //   isProtectedRoute = false;
      break;
  }

  try {
    // await AuthController.fetchUser();

    Router.start();
    //
    // if (!isProtectedRoute) {
    //   Router.go(Routes.Profile)
    // }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }

});
