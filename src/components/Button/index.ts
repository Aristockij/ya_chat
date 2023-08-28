import Block from '../../utils/Block';
import template from './button.hbs';

interface ButtonProps {
  label: string;
  buttonType: string;
  typeDiv: boolean;
  onClick?: () => void;
  events: {
    click: () => void;
  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      ...props,
      typeDiv: false,
      events: {
        click: props.onClick,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
