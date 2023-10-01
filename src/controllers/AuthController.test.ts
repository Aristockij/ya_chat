import { AuthController } from './AuthController.ts';
import { expect } from 'chai';
import esmock from 'esmock';
import sinon, {SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic} from 'sinon';
import HTTPTransport from "../utils/HTTPTransport.ts";


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
   it('test',  ()=>{
       const testData = { login: 'testUser', password: 'testPassword' };
       mockAuth.signin(testData);

       sinon.assert.calledWithExactly(mockAuth.signin, testData);
   })
});
