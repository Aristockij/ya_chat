import { HomePage } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Chat } from "../pages/Chat";
import { Profile } from "../pages/Profile";
import { ChangeInfo } from "../pages/ChangeInfo";
import { ChangePassword } from "../pages/ChangePassword";
import { page500 } from "../pages/500";
import { page404 } from "../pages/404";

const ROUTES = {
  'home': HomePage,
  'signIn': SignIn,
  'signUp': SignUp,
  'chat': Chat,
  'profile': Profile,
  'changeInfo': ChangeInfo,
  'changePassword': ChangePassword,
  'page500': page500,
  'page404': page404,
}

export function render(name: keyof typeof ROUTES) {
  const root = document.querySelector('#app')!;

  root.innerHTML = '';

  const Page = ROUTES[name];

  const page = new Page();

  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
}
