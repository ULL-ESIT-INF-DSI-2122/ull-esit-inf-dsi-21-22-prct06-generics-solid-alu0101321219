import 'mocha';
import {expect} from 'chai';
import {add} from './../src/index';

describe('Function add', () => {
  it('add(1, 2) returns 3', () => {
    expect(add(1, 2)).to.be.equal(3);
  });
});