import 'mocha';
import {expect} from 'chai';
import {Fighter} from './../src/ejercicio-1/fighter/fighter';

describe('Ejercicio 1 - El combate definitivo', () => {
  describe('Fighter', () => {
    it('Existe una clase llamada Fighter', () => {
      expect(Fighter != undefined).to.be.true;
    });
  });
});