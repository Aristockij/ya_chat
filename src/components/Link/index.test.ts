import { expect } from 'chai';
import sinon from 'sinon';
import { Link } from './index.ts';
import Router from '../../utils/Router.ts';

describe('Link', () => {
  it('Проверка рендера компонента Link', () => {
    new Link({ to: '/', router: Router });
  });

  it('элемент возвращает span', () => {
    const link = new Link({ to: '/', router: Router });
    const element = link.element;

    expect(element).to.be.instanceof(window.HTMLSpanElement)
  });

  it('должен перейти на указанный маршрут при клике', () => {
    const link = new Link({ to: '/' });
    const spy = sinon.spy(Router, 'go');
    const element = link.element as HTMLSpanElement;

    console.log(spy)

    element.click();

    expect(spy.calledOnce).to.eq(true);
  });
});
