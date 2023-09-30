import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import HTTPTransport from './HTTPTransport.ts';
import { expect } from 'chai';


describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  let requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-ignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    });

    instance = new HTTPTransport('/auth');
  });

  afterEach(() => {
    requests = [];
  })

  it('.get() должен вернуть GET запрос', () => {
    instance.get('/user');

    const [request] = requests;

    expect(request.method).to.eq('Get');
  });

  it('.post()  должен вернуть POST запрос', () => {
    instance.post('/user');

    const [request] = requests;

    expect(request.method).to.eq('Post');
  });

  it('.put()  должен вернуть PUT запрос', () => {
    instance.put('/user', 1);

    const [request] = requests;

    expect(request.method).to.eq('Put');
  });

  it('.delete()  должен вернуть DELETE запрос', () => {
    instance.delete('/user', 1);

    const [request] = requests;

    expect(request.method).to.eq('Delete');
  });
});
