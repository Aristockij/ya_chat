import { AuthController } from './AuthController.ts';
import esmock from 'esmock';
import sinon from 'sinon';


describe('AuthController', () => {
    let mockAuth;
    let signinFake =  sinon.fake();

    before(async ()=>{

        const {api: myAuthController} = await esmock('./AuthController.ts', {
            '../api/AuthAPI.ts': {
                signin: signinFake
            }
        })

        mockAuth = myAuthController;
    })
   it('signin() должен проверить данные которые принимает аргументом',  ()=>{
       const testData = { login: 'testUser', password: 'testPassword' };
       mockAuth.signin(testData);

       sinon.assert.calledWithExactly(mockAuth.signin, testData);
   })
});
