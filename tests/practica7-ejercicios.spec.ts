import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from './../src/practica7-ejercicios/randomnumber';
import {RandomNumberSetCollection} from './../src/practica7-ejercicios/randomnumbersetcollection';

const randomNumber: RandomNumber = RandomNumber.getRandomNumber();
const randomNumberCollection: RandomNumberSetCollection = new RandomNumberSetCollection();

describe('Práctica 7: Ejercicios - PE101', () => {
  describe('RandomNumber', () => {
    it('La clase existe', () => {
      expect(RandomNumber != undefined).to.be.true;
    });

    it('Tiene una instancia de si misma como atributo privado', () => {
      expect(('randomNumber' in RandomNumber)).to.be.true;
    });

    it('Tiene un método estático para generar instancias', () => {
      expect('getRandomNumber' in RandomNumber).to.be.true;
    });

    it('Tiene métodos para generar números aleatorios', () => {
      expect('getFixedBetween1And0' in randomNumber).to.be.true;
      expect('getFixedArbitraryBetween' in randomNumber).to.be.true;
      expect('getIntArbitraryBetween' in randomNumber).to.be.true;
    });

    it('getFixedBetween1And0', () => {
      expect(randomNumber.getFixedBetween1And0()).to.greaterThanOrEqual(0);
      expect(randomNumber.getFixedBetween1And0()).to.lessThan(1);
    });

    it('getFixedArbitraryBetween', () => {
      expect(randomNumber.getFixedArbitraryBetween(3, 12)).to.greaterThanOrEqual(3);
      expect(randomNumber.getIntArbitraryBetween(7, 10)).to.lessThanOrEqual(10);
    });

    it('getIntArbitraryBetween', () => {
      expect(randomNumber.getIntArbitraryBetween(2, 11)).to.greaterThanOrEqual(2);
      expect(randomNumber.getIntArbitraryBetween(1, 9)).to.lessThanOrEqual(9);
    });
  });

  describe('RandomNumberSetCollection', () => {
    it('La clase existe', () => {
      expect(RandomNumberSetCollection != undefined).to.be.true;
    });

    it('Tiene un atributo para guardar la colección', () => {
      expect('collection' in randomNumberCollection).to.be.true;
    });

    it('Tiene una isntancia de un random number', () => {
      expect('randomNumberInstance' in randomNumberCollection).to.be.true;
    });

    it('Se añaden numeros correctamente', () => {
      randomNumberCollection.addFixedBetween1And0();
      expect(randomNumberCollection.getCollection().size).to.be.equal(1);
      randomNumberCollection.addFixedArbitraryBetween(1, 45);
      expect(randomNumberCollection.getCollection().size).to.be.equal(2);
      randomNumberCollection.addIntArbitraryBetween(3, 9);
      expect(randomNumberCollection.getCollection().size).to.be.equal(3);
    });
  });
});