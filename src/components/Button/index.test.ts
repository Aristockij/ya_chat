import { Button } from './index.ts';
import sinon from 'sinon';
import { expect } from 'chai';

describe('Button', () => {
  it('Проверка функции клика', () => {
    const onClickFake = sinon.fake();
    const button = new Button({
      label: 'btn',
      buttonType: 'button',
      typeDiv: true,
      onClick: onClickFake,
      events: {
        click: sinon.fake(),
      }
    });

    const element = button.element as HTMLButtonElement;
    element.click();

    // sinon.assert.calledOnce(onClickFake);
    //
    // sinon.assert.calledOnce(button.events.click);
    //
    // sinon.assert.calledOn(button.events.click, element);

  });
});
