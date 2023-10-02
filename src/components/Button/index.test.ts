import { Button } from './index.ts';
import sinon from 'sinon';

describe('Button', () => {
  it('Проверка функции клика', () => {
    const onClickFake = sinon.fake();
    const button = new Button({
      label: 'btn',
      buttonType: 'button',
      typeDiv: true,
      onClick: onClickFake,
    });

    const element = button.element as HTMLButtonElement;

    element.click();

    sinon.assert.calledOnce(onClickFake);
  });
});
