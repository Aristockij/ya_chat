import Router, { BlockProps} from './Router.ts'
import { expect } from 'chai';
import sinon from 'sinon';

describe('Router', () => {

  global.window.history.back = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  };
  global.window.history.forward = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  }

  beforeEach(() => {
    Router.reset();
  });

  const getContentFake = sinon.fake.returns(document.createElement('div'));

  const BlockMock = class {
    getContent = getContentFake;
  } as unknown as BlockProps;

  it('use() должен вернуть инстенс роутера', () => {
    const result = Router.use('/', BlockMock);

    expect(result).to.eq(Router);
  });

  describe('.back()', () => {
    it('должен рендерить страницу при возврашении', () => {
      Router
        .use('/', BlockMock)
        .start();

      Router.back();

      expect(getContentFake.callCount).to.eq(1);
    });
  });

  it('должен рендерить страницу при старте', () => {
    Router
      .use('/', BlockMock)
      .start();

    expect(getContentFake.callCount).to.eq(1);
  });
});
