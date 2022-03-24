import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../src/ejercicio-1/universe/fighter';
import {Pokemon} from './../src/ejercicio-1/pokemonUniverse/pokemon';
import {PokemonCatchingPhrase} from './../src/ejercicio-1/pokemonUniverse/pokemoncatchingphrase';
import {PokemonFight} from './../src/ejercicio-1/pokemonUniverse/pokemonfight';
import {PokemonPrinter} from './../src/ejercicio-1/pokemonUniverse/pokemonprinter';
import {Naruto} from './../src/ejercicio-1/narutoUniverse/naruto';
import {NarutoCatchingPhrase} from './../src/ejercicio-1/narutoUniverse/narutocatchingphrase';
import {NarutoFight} from './../src/ejercicio-1/narutoUniverse/narutofight';
import {NarutoPrinter} from './../src/ejercicio-1/narutoUniverse/narutoprinter';
import {Marvel} from './../src/ejercicio-1/marvelUniverse/marvel';
import {MarvelCatchingPhrase} from './../src/ejercicio-1/marvelUniverse/marvelcatchingphrase';
import {MarvelFight} from './../src/ejercicio-1/marvelUniverse/marvelfight';
import {MarvelPrinter} from './../src/ejercicio-1/marvelUniverse/marvelprinter';
import {FighterCatchingPhrase} from '../src/ejercicio-1/universe/fightercathingphrase';
import {FighterFight} from '../src/ejercicio-1/universe/fighterFight';
import {FighterPrinter} from '../src/ejercicio-1/universe/fighterprinter';
import {Combat} from './../src/ejercicio-1/combat';


describe('Ejercicio 1 - El combate definitivo', () => {
  const pikachu = new Pokemon('Pikachu', 30, 40, 'electric', {attack: 50, defense: 50, speed: 120, hp: 80}, 35);
  const naruto = new Naruto('Naruto', 80, 170, 'uzumaki', {attack: 60, defense: 70, speed: 110, hp: 90}, 97);
  const spiderman = new Marvel('Spiderman', 84, 172, 'avenger', {attack: 70, defense: 50, speed: 100, hp: 95}, true, 'Peter Parker');

  describe('Universe', () => {
    describe('Fighter', () => {
      it('Existe un clase llamada Fighter', () => {
        expect(Fighter != undefined).to.be.true;
      });

      it('new Pokemon("Pikachu", 30, 40, "electric", {attack: 50, defense: 50, speed: 120, hp: 80}, 35) es una isntancia de una clase hija de Fighter', () => {
        expect(pikachu instanceof Fighter);
      });

      it('La clase Fighter cuenta con un atributo "name"', () => {
        expect('name' in pikachu).to.be.true;
      });

      it('La clase Fighter cuenta con un método getName()', () => {
        expect('getName' in pikachu).to.be.true;
      });

      it('pikachu.getName() == "Pikachu"', () => {
        expect(pikachu.getName()).to.be.equal("Pikachu");
      });

      it('La clase Fighter cuenta con un atributo "weight"', () => {
        expect('weight' in pikachu).to.be.true;
      });

      it('La clase Fighter cuenta con un método getWeight()', () => {
        expect('getWeight' in pikachu).to.be.true;
      });

      it('pikachu.getWeight() == 30', () => {
        expect(pikachu.getWeight()).to.be.equal(30);
      });

      it('La clase Fighter cuenta con un atributo "height"', () => {
        expect('height' in pikachu).to.be.true;
      });

      it('La clase Fighter cuenta con un método getHeight()', () => {
        expect('getHeight' in pikachu).to.be.true;
      });

      it('pikachu.getHeight() == 40', () => {
        expect(pikachu.getHeight()).to.be.equal(40);
      });

      it('La clase Fighter cuenta con un atributo "type"', () => {
        expect('type' in pikachu).to.be.true;
      });

      it('La clase Fighter cuenta con un método getType()', () => {
        expect('getType' in pikachu).to.be.true;
      });

      it('pikachu.getType() == "electric"', () => {
        expect(pikachu.getType()).to.be.equal("electric");
      });

      it('La clase Fighter cuenta con un atributo "statistics"', () => {
        expect('statistics' in pikachu).to.be.true;
      });

      it('La clase cuenta con un método getAttack()', () => {
        expect('getAttack' in pikachu).to.be.true;
      });

      it('pikachu.getAttack() == 50', () => {
        expect(pikachu.getAttack()).to.be.equal(50);
      });

      it('La clase cuenta con un método getDefense()', () => {
        expect('getDefense' in pikachu).to.be.true;
      });

      it('pikachu.getDefense() == 50', () => {
        expect(pikachu.getDefense()).to.be.equal(50);
      });

      it('La clase cuenta con un método getSpeed()', () => {
        expect('getSpeed' in pikachu).to.be.true;
      });

      it('pikachu.getSpeed() == 120', () => {
        expect(pikachu.getSpeed()).to.be.equal(120);
      });

      it('La clase cuenta con un método getHP()', () => {
        expect('getHP' in pikachu).to.be.true;
      });

      it('pikachu.getHP() == 80', () => {
        expect(pikachu.getHP()).to.be.equal(80);
      });
    });

    describe('FighterCatchingPhrase', () => {
      const pikachuCatchingPhrase = new PokemonCatchingPhrase(pikachu);
      it('Existe una clase llamada FighterCatchingPhrase', () => {
        expect(FighterCatchingPhrase != undefined).to.be.true;
      });

      it("new PokemonCatchingPhrase(pikachu) es una instancia de una clase hija de la clase FighterCatchingPhrase", () => {
        expect(pikachuCatchingPhrase instanceof FighterCatchingPhrase);
      });

      it('La clase FighterCatchingPhrase cuenta con el atributo "fighter"', () => {
        expect('fighter' in pikachuCatchingPhrase);
      });

      it('La clase cuenta con un método abstracto "catchingPhrase"', () => {
        expect('catchingPhrase' in pikachuCatchingPhrase).to.be.true;
      });
    });
    describe('FighterFight', () => {
      const pikachuFighterFight = new PokemonFight(pikachu);
      it('Existe una clase llamada FighterFight', () => {
        expect(FighterFight != undefined).to.be.true;
      });

      it("new PokemonFight(pikachu) es una instancia de una clase hija de la clase FighterFight", () => {
        expect(pikachuFighterFight instanceof FighterFight);
      });

      it('La clase FighterFight cuenta con el atributo "fighter"', () => {
        expect('fighter' in pikachuFighterFight);
      });

      it('La clase cuenta con un método abstracto "fight"', () => {
        expect('fight' in pikachuFighterFight).to.be.true;
      });
      describe('FighterPrint', () => {
        const pikachuPrinter = new PokemonPrinter(pikachu);
        it('Existe una clase llamada FighterPrinter', () => {
          expect(FighterPrinter != undefined).to.be.true;
        });

        it('new PokemonPrinter(pikachu) es una instancia de una clase hija de la clase FighterPrinter', () => {
          expect(pikachuPrinter instanceof FighterPrinter).to.be.true;
        });

        it('La clase FighterPrinter cuenta con el atributo "fighter"', () => {
          expect('fighter' in pikachuPrinter).to.be.true;
        });

        it('La clase cuenta con un método "print"', () => {
          expect('print' in pikachuPrinter).to.be.true;
        });
      });
    });
  });
  describe('Pokemon universe', () => {
    describe('Pokemon', () => {
      it('Existe un clase llamada Pokemon', () => {
        expect(Pokemon != undefined).to.be.true;
      });

      it('new Pokemon("Pikachu", 30, 40, "electric", {attack: 50, defense: 50, speed: 120, hp: 80}, 35) se instancia correctamente', () => {
        expect(pikachu instanceof Pokemon).to.be.true;
      });

      it('La clase Pokemon hereda de Fighter', () => {
        expect(pikachu instanceof Fighter).to.be.true;
      });

      it('La clase Pokemon tiene un atributo "id"', () => {
        expect('id' in pikachu).to.be.true;
      });

      it('La clase Pokemon tiene un método getId()', () => {
        expect('getId' in pikachu).to.be.true;
      });

      it('pikachu.getId() == 35', () => {
        expect(pikachu.getId()).to.be.equal(35);
      });
    });

    describe('PokemonCatchingPhrase', () => {
      const pikachuCatchingPhrase = new PokemonCatchingPhrase(pikachu);
      it('Existe un clase llamada PokemonCatchingPhrase', () => {
        expect(PokemonCatchingPhrase != undefined).to.be.true;
      });

      it('Se instancia correctamente un objeto de la clase', () => {
        expect(pikachuCatchingPhrase instanceof PokemonCatchingPhrase).to.be.true;
      });

      it('PokemonCatchingPhrase hereda de FighterCatchingPhrase', () => {
        expect(pikachuCatchingPhrase instanceof FighterCatchingPhrase).to.be.true;
      });

      it('PokemonCatchingPhrase tiene un atribto privado "pokemon"', () => {
        expect('pokemon' in pikachuCatchingPhrase).to.be.true;
      });

      it('pikachuCatchingPhrase.catchingPhrase() == "Pikachu, I choose you!', () => {
        expect(pikachuCatchingPhrase.catchingPhrase()).to.be.equal("Pikachu, I choose you!");
      });
    });

    describe('PokemonFight', () => {
      const pikachuFighterFight = new PokemonFight(pikachu);
      it('Existe un clase llamada PokemonFight', () => {
        expect(PokemonFight != undefined).to.be.true;
      });

      it('Se instancia correctamente un objeto de la clase', () => {
        expect(pikachuFighterFight instanceof PokemonFight).to.be.true;
      });

      it('PokemonFight hereda de FighterFight', () => {
        expect(pikachuFighterFight instanceof FighterFight).to.be.true;
      });

      it('PokemonFight tiene un atributo privado "pokemon"', () => {
        expect('pokemon' in pikachuFighterFight).to.be.true;
      });

      it('pikachuFighterFight.fight(pikachu) returns 25', () => {
        expect(pikachuFighterFight.fight(pikachu)).to.be.equal(25);
      });
    });

    describe('PokemonPrinter', () => {
      const pikachuPrinter = new PokemonPrinter(pikachu);
      it('Existe un clase llamada PokemonPrinter', () => {
        expect(PokemonPrinter != undefined).to.be.true;
      });

      it('Se instancia correctamente un objeto de la clase', () => {
        expect(pikachuPrinter instanceof PokemonPrinter).to.be.true;
      });

      it('PokemonPrinter tiene un atributo privado "pokemon"', () => {
        expect("pokemon" in pikachuPrinter).to.be.true;
      });

      it('Pokemon printer tiene su propio métodoo "print"', () => {
        expect("print" in pikachuPrinter).to.be.true;
      });
    });
  });

  describe('Naruto universe', () => {
    describe('Naruto', () => {
      it('Existe un clase llamada Naruto', () => {
        expect(Naruto != undefined).to.be.true;
      });

      it('new Naruto("Naruto", 80, 170, "uzumaki", {attack: 60, defense: 70, speed: 110, hp: 90}, 97) se instancia correctamente', () => {
        expect(naruto instanceof Naruto).to.be.true;
      });

      it('La clase Naruto hereda de Fighter', () => {
        expect(naruto instanceof Fighter).to.be.true;
      });

      it('La clase Naruto tiene un atributo "chakra"', () => {
        expect('chakra' in naruto).to.be.true;
      });

      it('La clase naruto tiene el método setChakra()', () => {
        expect('setChakra' in naruto).to.be.true;
      });

      it('naruto.setChakra(80) funciona correctamente', () => {
        expect(naruto.setChakra(80));
      });

      it('La clase naruto tiene el método getChakra()', () => {
        expect('getChakra' in naruto).to.be.true;
      });

      it('naruto.getChakra() == 80', () => {
        expect(naruto.getChakra()).to.be.equal(80);
      });
    });

    describe('NarutoCatchingPhrase', () => {
      const narutoCatchingPhrase = new NarutoCatchingPhrase(naruto);
      it('Existe un clase llamada NarutoCatchingPhrase', () => {
        expect(NarutoCatchingPhrase != undefined).to.be.true;
      });

      it('Se instancia correctamente un objeto de la clase', () => {
        expect(narutoCatchingPhrase instanceof NarutoCatchingPhrase).to.be.true;
      });

      it('PokemonCatchingPhrase hereda de FighterCatchingPhrase', () => {
        expect(narutoCatchingPhrase instanceof FighterCatchingPhrase).to.be.true;
      });

      it('PokemonCatchingPhrase tiene un atributo privado "narutoPJ"', () => {
        expect('narutoPJ' in narutoCatchingPhrase).to.be.true;
      });

      it('narutoCatchingPhrase.catchingPhrase() == "Because thats my ninja way!"', () => {
        expect(narutoCatchingPhrase.catchingPhrase()).to.be.equal("Because that's my ninja way!");
      });
    });

    describe('NarutoFight', () => {
      const narutoFighterFight = new NarutoFight(naruto);
      it('Existe un clase llamada NarutoFight', () => {
        expect(NarutoFight != undefined).to.be.true;
      });

      it('Se instancia correctamente un objeto de la clase', () => {
        expect(narutoFighterFight instanceof NarutoFight).to.be.true;
      });

      it('NarutoFight hereda de FighterFight', () => {
        expect(narutoFighterFight instanceof FighterFight).to.be.true;
      });

      it('NarutoFight tiene un atributo privado "narutoPJ"', () => {
        expect('narutoPJ' in narutoFighterFight).to.be.true;
      });

      it('narutoFighterFight.fight(naruto) returns 21.42', () => {
        expect(narutoFighterFight.fight(naruto).toFixed(2)).to.be.equal("21.43");
      });
    });

    describe('NarutoPrinter', () => {
      const narutoPrinter = new NarutoPrinter(naruto);
      it('Existe un clase llamada NarutoPrinter', () => {
        expect(NarutoPrinter != undefined).to.be.true;
      });

      it('Se instancia correctamente un objeto de la clase', () => {
        expect(narutoPrinter instanceof NarutoPrinter).to.be.true;
      });

      it('NarutoPrinter tiene un atributo privado "narutoPJ"', () => {
        expect("narutoPJ" in narutoPrinter).to.be.true;
      });

      it('NarutoPrinter tiene su propio método "print"', () => {
        expect("print" in narutoPrinter).to.be.true;
      });
    });
  });
  describe('Marvel universe', () => {
    describe('Marvel', () => {
      it('Existe un clase llamada Marvel', () => {
        expect(Marvel != undefined).to.be.true;
      });

      it('new Marvel("Spiderman", 84, 172, "avenger", {attack: 70, defense: 50, speed: 100, hp: 95}, true, "Peter Parker") se instancia correctamente', () => {
        expect(spiderman instanceof Marvel).to.be.true;
      });

      it('La clase Marvel hereda de Fighter', () => {
        expect(spiderman instanceof Fighter).to.be.true;
      });

      it('La clase Marvel tiene un atributo "hasMask"', () => {
        expect('hasMask' in spiderman).to.be.true;
      });

      it('La clase Marvel tiene un método setHasMask()', () => {
        expect('setHasMask' in spiderman).to.be.true;
      });

      it('spiderman.setHasMask(false) funciona correctamente', () => {
        expect(spiderman.setHasMask(false));
      });

      it('La clase Marvel tiene un método getHasMask()', () => {
        expect('getHasMask' in spiderman).to.be.true;
      });

      it('spiderman.getHasMask() == false', () => {
        expect(spiderman.getHasMask()).to.be.false;
      });

      it('La clase Marvel tiene un atributo "realName"', () => {
        expect('realName' in spiderman).to.be.true;
      });

      it('La clase Marvel tiene un método setRealName', () => {
        expect('setRealName' in spiderman).to.be.true;
      });

      it('spiderman.setRealName("Miles Morales") funciona correctamente', () => {
        expect(spiderman.setRealName("Miles Morales"));
      });

      it('La clase Marvel tiene un método getRealName()', () => {
        expect('getRealName' in spiderman).to.be.true;
      });

      it("spiderman.getRealName() == 'Miles Morales'", () => {
        expect(spiderman.getRealName()).to.be.equal("Miles Morales");
      });
    });

    describe('MarvelCatchingPhrase', () => {
      const spidermanCatchingPhrase = new MarvelCatchingPhrase(spiderman);
      it('Existe un clase llamada MarvelCatchingPhrase', () => {
        expect(MarvelCatchingPhrase != undefined).to.be.true;
      });

      it('Se instancia correctamente un objeto de la clase', () => {
        expect(spidermanCatchingPhrase instanceof MarvelCatchingPhrase).to.be.true;
      });

      it('PokemonCatchingPhrase hereda de FighterCatchingPhrase', () => {
        expect(spidermanCatchingPhrase instanceof FighterCatchingPhrase).to.be.true;
      });

      it('PokemonCatchingPhrase tiene un atributo privado "narutoPJ"', () => {
        expect('marvelPJ' in spidermanCatchingPhrase).to.be.true;
      });

      it('spidermanCatchingPhrase.catchingPhrase() == "I am spiderman"', () => {
        expect(spidermanCatchingPhrase.catchingPhrase()).to.be.equal("I am Spiderman");
      });
    });

    describe('MarvelFight', () => {
      const spidermanFighterFight = new MarvelFight(spiderman);
      it('Existe un clase llamada MarvelFight', () => {
        expect(MarvelFight != undefined).to.be.true;
      });

      it('Se instancia correctamente un objeto de la clase', () => {
        expect(spidermanFighterFight instanceof MarvelFight).to.be.true;
      });

      it('MarvelFight hereda de FighterFight', () => {
        expect(spidermanFighterFight instanceof FighterFight).to.be.true;
      });

      it('MarvelFight tiene un atributo privado "marvelPJ"', () => {
        expect('marvelPJ' in spidermanFighterFight).to.be.true;
      });

      it('spidermanFighterFight.fight(spiderman) returns 35', () => {
        expect(spidermanFighterFight.fight(spiderman)).to.be.equal(35);
      });
    });

    describe('MarvelPrinter', () => {
      const marvelPrinter = new MarvelPrinter(spiderman);
      it('Existe un clase llamada MarvelPrinter', () => {
        expect(MarvelPrinter != undefined).to.be.true;
      });

      it('Se instancia correctamente un objeto de la clase', () => {
        expect(marvelPrinter instanceof MarvelPrinter).to.be.true;
      });

      it('MarvelPrinter tiene un atributo privado "marvelPJ"', () => {
        expect("marvelPJ" in marvelPrinter).to.be.true;
      });

      it('MarvelPrinter tiene su propio método "print"', () => {
        expect("print" in marvelPrinter).to.be.true;
      });
    });
  });
  describe("Combat", () => {
    const myCombat = new Combat(pikachu, spiderman);
    it('Existe una clase llamada Combat', () => {
      expect(Combat != undefined).to.be.true;
    });

    it("Se instancia correctamente un objeto de la clase", () => {
      expect(myCombat instanceof Combat).to.be.true;
    });

    it('Tiene 2 atributos privados para los luchadores', () => {
      expect('fighter1' in myCombat).to.be.true;
      expect('fighter2' in myCombat).to.be.true;
    });

    it('Cuenta con getters para ambos luchadores', () => {
      expect('getFighter1' in myCombat).to.be.true;
      expect('getFighter2' in myCombat).to.be.true;
    });

    it('myCombat.getFighter1() == pikachu', () => {
      expect(myCombat.getFighter1()).to.be.deep.equal(pikachu);
    });

    it('myCombat.getFighter2() == spiderman', () => {
      expect(myCombat.getFighter2()).to.be.deep.equal(spiderman);
    });

    it("Cuenta con 2 setters para ambos luchadores", () => {
      expect('setFighter1' in myCombat).to.be.true;
      expect('setFighter2' in myCombat).to.be.true;
    });

    it('Cuenta con un método "fight"', () => {
      expect('fight' in myCombat).to.be.true;
    });

    it('Cuenta con un método "start"', () => {
      expect('start' in myCombat).to.be.true;
    });

    it('myCombat.start() returns pikachu', () => {
      expect(myCombat.start(false)).to.be.deep.equal(spiderman);
    });
  });
  describe("Pokedex", () => {
  });
});