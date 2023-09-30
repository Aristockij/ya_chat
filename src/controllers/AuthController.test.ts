import sinon from 'sinon';
import { AuthController } from './AuthController.ts';
import API from '../api/AuthAPI.ts';
import { expect } from 'chai';

describe('AuthController', () => {
    it('should call api.signin with the provided data', async () => {
        // Создайте заглушку (stub) для метода signin вашего объекта api
        // const apiSigninStub = sinon.stub(API, 'signin');

        // Создайте экземпляр контроллера
        // const authController = new AuthController();
        //
        // // Тестовые данные для входа
        // const testData = { username: 'testUser', password: 'testPassword' };
        //
        // // Вызовите метод signin контроллера с тестовыми данными
        // await authController.signin(testData);
        //
        // // Проверьте, что api.signin был вызван с ожидаемыми аргументами
        // expect(apiSigninStub.calledOnce).to.be.true;
        // expect(apiSigninStub.calledWith(testData)).to.be.true;
        //
        // // Восстановите оригинальный метод после теста
        // apiSigninStub.restore();
    });
});
