import 'mocha';
import {expect} from 'chai';
import {Cipher} from './../src/ejercicio-3/cipher';
import {CaesarCipher} from './../src/ejercicio-3/caesarcipher';

const myCipher = new CaesarCipher('abcdefghijklmnopqrstuvwxyz', 'clave');

describe('Ejercicio 3 - El cifrado indescifrable', () => {
  describe('Cipher', () => {
    it('Existe una clase llamada "Cipher"', () => {
      expect(Cipher != undefined).to.be.true;
    });

    it('Tiene un atributo para almacenar el alfabeto', () => {
      expect('alphabet' in myCipher).to.be.true;
    });

    it('Tiene un atributo para almacenar la clave', () => {
      expect('key' in myCipher).to.be.true;
    });

    it('Tiene un método getter para el alfabeto', () => {
      expect('getAlphabet' in myCipher).to.be.true;
    });

    it('Tiene un método setter para el alfabeto', () => {
      expect('setAlphabet' in myCipher).to.be.true;
    });

    it('Tiene un método getter para la clave', () => {
      expect('getKey' in myCipher).to.be.true;
    });

    it('Tiene un método setter para la clave', () => {
      expect('setKey' in myCipher).to.be.true;
    });

    it('Tiene un método para codificar un mensaje', () => {
      expect('encode' in myCipher).to.be.true;
    });

    it('Tiene un método para decodificar un mensaje', () => {
      expect('decode' in myCipher).to.be.true;
    });
  });

  describe('CaesarCipher', () => {
    it('Existe una clase llamada "CaesarCipher"', () => {
      expect(CaesarCipher != undefined).to.be.true;
    });

    it('Se instancia correctamente new CaesarCipher("abcdefghijklmnopqrstuvwxyz", "clave")', () => {
      expect(myCipher instanceof CaesarCipher).to.be.true;
    });

    it('Es una clase hija de "Cipher"', () => {
      expect(myCipher instanceof Cipher).to.be.true;
    });

    it('Tiene un método privado para formatear el alfabeto', () => {
      expect('formatAlphabet' in myCipher).to.be.true;
    });

    it('myCipher.getAlphabet() == "abcdefghijklmnopqrstuvwxyz"', () => {
      expect(myCipher.getAlphabet()).to.be.equal('abcdefghijklmnopqrstuvwxyz');
    });

    it('myCipher.setAlphabet("abcdefghijklmnopqrstuvwxy1")', () => {
      myCipher.setAlphabet('abcdefghijklmnopqrstuvwxy1');
      expect(myCipher.getAlphabet()).to.be.equal('abcdefghijklmnopqrstuvwxy1');
    });

    it('myCipher.getKey() == "clave"', () => {
      expect(myCipher.getKey()).to.be.equal('clave');
    });

    it('myCipher.setKey("otraclave")', () => {
      myCipher.setKey('otraclave');
      expect(myCipher.getKey()).to.be.equal('otraclave');
    });

    it('myCipher.encode("Tengo una buena noticia.") == "Tyfhr vjf vmfqm jticujd."', () => {
      expect(myCipher.encode('Tengo una buena noticia.')).to.be.equal('Tyfhr vjf vmfqm jticujd.');
    });

    it('myCipher.decode("Tyfhr vjf vmfqm jticujd.") == "Tengo una buena noticia.', () => {
      expect(myCipher.decode('Tyfhr vjf vmfqm jticujd.')).to.be.equal('Tengo una buena noticia.');
    });
  });
});