import {Button} from './components/Button';
import {registerComponent} from "./utils/resgiterComponent";
import {render} from "./utils/render";
import {FormInput} from "./components/FormInput";

registerComponent('Button', Button);
registerComponent('FormInput', FormInput);

window.addEventListener('DOMContentLoaded', () => {
  render('home')
});

