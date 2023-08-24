import {Button} from './components/Button';
import {registerComponent} from "./utils/resgiterComponent";
import {render} from "./utils/render";
import {FormInput} from "./components/FormInput";
import {InputTest} from "./components/InputTest";

registerComponent('Button', Button);
registerComponent('FormInput', FormInput);
registerComponent('InputTest', InputTest);

window.addEventListener('DOMContentLoaded', () => {
  render('home')
});

