import 'mocha';
import {expect} from 'chai';
import {NumericSearchableCollection} from './../src/modificacion/numericsearchablecollection';
import {StringSearchableCollection} from './../src/modificacion/stringsearchablecollection';
import {SearchableCollection} from '../src/modificacion/searchablecollection';

describe('Modificación', () => {
  describe('NumericSearchableCollection', () => {
    const myNumericSearchableCollection = new NumericSearchableCollection(2);

    it('Existe una clase llamada NumericSearchableCollection', () => {
      expect(NumericSearchableCollection != undefined).to.be.true;
    });

    it('Se puede instanciar correctamente', () => {
      expect(myNumericSearchableCollection instanceof NumericSearchableCollection).to.be.true;
    });

    it('Es hijo de la clase "SearchableCollection"', () => {
      expect(myNumericSearchableCollection instanceof SearchableCollection).to.be.true;
    });

    it('collection in NumericSearchableCollection returns true', () => {
      expect('collection' in myNumericSearchableCollection).to.be.true;
    });

    it('addItem in NumericSearchCollection returns true', () => {
      expect('addItem' in myNumericSearchableCollection).to.be.true;
    });

    it('addItem funciona correctamente', () => {
      expect(myNumericSearchableCollection.addItem(3));
      expect(myNumericSearchableCollection.addItem(12));
      expect(myNumericSearchableCollection.addItem(1));
    });

    it('getItem in NumericSearchCollection returns true', () => {
      expect('getItem' in myNumericSearchableCollection).to.be.true;
    });

    it('getItem funciona correctamente', () => {
      expect(myNumericSearchableCollection.getItem(0)).to.be.equal(2);
      expect(myNumericSearchableCollection.getItem(2)).to.be.equal(12);
      expect(myNumericSearchableCollection.getItem(9)).to.be.undefined;
    });

    it('removeItem in NumericSearchCollection returns true', () => {
      expect('removeItem' in myNumericSearchableCollection).to.be.true;
    });

    it('removeItem funciona correctamente', () => {
      expect(myNumericSearchableCollection.removeItem(3));
      expect(myNumericSearchableCollection.removeItem(13));
    });

    it('getNumberOfItems in NumericSearchCollection returns true', () => {
      expect('getNumberOfItems' in myNumericSearchableCollection).to.be.true;
    });

    it('getNumberOfItems funciona correctamente', () => {
      expect(myNumericSearchableCollection.getNumberOfItems()).to.be.equal(3);
    });

    it('search in NumericSearchCollection returns true', () => {
      expect('search' in myNumericSearchableCollection).to.be.true;
    });

    it('search funciona correctamente', () => {
      expect(myNumericSearchableCollection.search(2)).to.be.deep.equal([2]);
    });
  });
  describe('StringSearchableCollection', () => {
    const myStringSearchableCollection = new StringSearchableCollection('adios', 'muy');

    it('Existe una clase llamada StringSearchableCollection', () => {
      expect(StringSearchableCollection != undefined).to.be.true;
    });
    it('Se puede instanciar correctamente', () => {
      expect(myStringSearchableCollection instanceof StringSearchableCollection).to.be.true;
    });

    it('Es hijo de la clase "SearchableCollection"', () => {
      expect(myStringSearchableCollection instanceof SearchableCollection).to.be.true;
    });

    it('collection in NumericSearchableCollection returns true', () => {
      expect('collection' in myStringSearchableCollection).to.be.true;
    });

    it('addItem in NumericSearchCollection returns true', () => {
      expect('addItem' in myStringSearchableCollection).to.be.true;
    });

    it('addItem funciona correctamente', () => {
      expect(myStringSearchableCollection.addItem('hola'));
      expect(myStringSearchableCollection.addItem('que'));
      expect(myStringSearchableCollection.addItem('tal'));
    });

    it('getItem in myStringSearchableCollection returns true', () => {
      expect('getItem' in myStringSearchableCollection).to.be.true;
    });

    it('getItem funciona correctamente', () => {
      expect(myStringSearchableCollection.getItem(0)).to.be.equal('adios');
      expect(myStringSearchableCollection.getItem(2)).to.be.equal('hola');
      expect(myStringSearchableCollection.getItem(9)).to.be.undefined;
    });

    it('removeItem in myStringSearchableCollection returns true', () => {
      expect('removeItem' in myStringSearchableCollection).to.be.true;
    });

    it('removeItem funciona correctamente', () => {
      expect(myStringSearchableCollection.removeItem('que'));
      expect(myStringSearchableCollection.removeItem('x'));
    });

    it('getNumberOfItems in myStringSearchableCollection returns true', () => {
      expect('getNumberOfItems' in myStringSearchableCollection).to.be.true;
    });

    it('getNumberOfItems funciona correctamente', () => {
      expect(myStringSearchableCollection.getNumberOfItems()).to.be.equal(4);
    });

    it('search in myStringSearchableCollection returns true', () => {
      expect('search' in myStringSearchableCollection).to.be.true;
    });

    it('search funciona correctamente', () => {
      expect(myStringSearchableCollection.search('a')).to.be.deep.equal(['adios', 'hola', 'tal']);
    });
  });
});