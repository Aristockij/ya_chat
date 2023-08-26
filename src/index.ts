import {Button} from './components/Button';
import {registerComponent} from "./utils/resgiterComponent";
import {render} from "./utils/render";
import {FormInput} from "./components/FormInput";
import {UserListItem} from "./components/UserListItem";
import {OutMessage} from "./components/OutMessage";
import {InputMessage} from "./components/InputMessage";
import {SendMessageBtn} from "./components/SendMessageBtn";
import {Input} from "./components/Input";
import {ProfileAvatar} from "./components/ProfileAvatar";
import {ProfileItem} from "./components/ProfileItem";

registerComponent('Button', Button);
registerComponent('FormInput', FormInput);
registerComponent('UserListItem', UserListItem);
registerComponent('OutMessage', OutMessage);
registerComponent('InputMessage', InputMessage);
registerComponent('SendMessageBtn', SendMessageBtn);
registerComponent('Input', Input);
registerComponent('ProfileAvatar', ProfileAvatar);
registerComponent('ProfileItem', ProfileItem);


window.addEventListener('DOMContentLoaded', () => {
  render('home')
});

