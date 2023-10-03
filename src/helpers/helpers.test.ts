import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import { set } from './setAndMergeHelper.ts';

describe('set function', () => {
  const keypath = 'test';
  const value = 'some value';
  let obj: Record<string, any>;

  beforeEach(() => {
    obj = {};
  });

  it('должен установить значение по ключевому пути в объекте', () => {
    set(obj, keypath, value);

    expect(obj).to.haveOwnProperty(keypath, value);
  });

  it('Должен вернуть исходный объект', () => {
    const result = set(obj, keypath, value);

    obj['test2'] = 'another value';

    expect(result).to.equal(obj);
  });

  it('Должен вернуть исходный объект, если это не объект', () => {
    const notAnObject = 'string';

    const result = set(notAnObject, keypath, value);

    expect(result).to.eq(notAnObject);
  });

  it('Должен выбрасывать ошибку, если путь не является строкой', () => {
    const keypathNotAString = 10;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const f = () => set(obj, keypathNotAString, value);

    expect(f).to.throw(Error);
  });
});
