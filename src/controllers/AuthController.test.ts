// import { expect } from 'chai';
// import sinon from 'sinon';
// import { AuthController } from './AuthController.ts';
// import API from '../api/AuthAPI.ts';
//
// describe('AuthController', () => {
//     it('should call api.signin with the provided data', async () => {
//         const apiStub = sinon.stub(API, 'signin').resolves();
//
//         const authController = new AuthController();
//
//         const testData = { login: 'testUser', password: 'testPassword123' };
//
//         await authController.signin(testData);
//
//
//         expect(apiStub.calledOnce).to.be.true;
//         expect(apiStub.calledWith(testData)).to.be.true;
//
//         apiStub.restore();
//     });
// });
