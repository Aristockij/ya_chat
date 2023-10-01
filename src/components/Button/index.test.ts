// import { Button } from './index.ts';
// import sinon from 'sinon';
// import { expect } from 'chai';
//
// describe('Button', () => {
//   it('Проверка функции клика', () => {
//     const onClickFake = sinon.fake();
//     const button = new Button({
//       label: 'btn',
//       buttonType: 'button',
//       typeDiv: true,
//       onClick: onClickFake,
//     });
//
//     const element = button.element as HTMLButtonElement;
//     console.log(element)
//     console.log(' ')
//     console.log(button)
//     element.click();
//
//     sinon.assert.calledOnce(onClickFake);
//
//     expect(onClickFake).to.eq(true);
//   });
// });
