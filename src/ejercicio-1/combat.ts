import {Fighter} from "./universe/fighter";
import {Pokemon} from "./pokemonUniverse/pokemon";
import {PokemonFight} from "./pokemonUniverse/pokemonfight";
import {PokemonCatchingPhrase} from "./pokemonUniverse/pokemoncatchingphrase";
import {Marvel} from "./marvelUniverse/marvel";
import {MarvelFight} from "./marvelUniverse/marvelfight";
import {MarvelCatchingPhrase} from "./marvelUniverse/marvelcatchingphrase";
import {Naruto} from "./narutoUniverse/naruto";
import {NarutoFight} from "./narutoUniverse/narutofight";
import {NarutoCatchingPhrase} from "./narutoUniverse/narutocatchingphrase";

/**
 * Clase empleada para realizar la simulación de un combate
 * entre 2 contendientes del mismo o distintos universos.
 */
export class Combat {
  /**
   * Inicializa un objeto de la clase Combat
   * @param fighter1 Contendiente nº 1
   * @param fighter2 Contendiente nº 2
   */
  constructor(private fighter1: Fighter, private fighter2: Fighter) {}

  /**
   * Devuelve el contendiente nº 1.
   * @returns Contendiente nº 1.
   */
  public getFighter1(): Fighter {
    return this.fighter1;
  }

  /**
   * Devuelve el contendiente nº 2.
   * @returns Contendiente nº 2.
   */
  public getFighter2(): Fighter {
    return this.fighter2;
  }

  /**
   * Permite establecer el contendiente nº 1.
   * @param fighter Contendiente nº 1.
   */
  public setFighter1(fighter: Fighter): void {
    this.fighter1 = fighter;
  }

  /**
   * Permite establecer el contendiente nº 2.
   * @param fighter Contendiente nº 2.
   */
  public setFighter2(fighter: Fighter): void {
    this.fighter2 = fighter;
  }

  /**
   * Calcula el daño que un contendiente realizaría a otro contendiente de un
   * universo distinto en caso de un ataque.
   * @param fighter Determina que luchador realiza el ataque (si el 1 o el 2)
   * @returns Daño que el contendiente elegido realizaría al oponente.
   */
  public fight(fighter: (1 | 2)): number {
    if (fighter == 1) {
      switch (this.fighter1.constructor.name) {
        case 'Pokemon':
          if (this.fighter2.constructor.name == 'Marvel') return (this.fighter1.getAttack() / this.fighter2.getDefense()) * 0.5;
          if (this.fighter2.constructor.name == 'Naruto') return (this.fighter1.getAttack() / this.fighter2.getDefense()) * 2;
        case 'Marvel':
          if (this.fighter2.constructor.name == 'Pokemon') return (this.fighter1.getAttack() / this.fighter2.getDefense()) * 2;
          if (this.fighter2.constructor.name == 'Naruto') return (this.fighter1.getAttack() / this.fighter2.getDefense()) * 1;
        case 'Naruto':
          if (this.fighter2.constructor.name == 'Marvel') return (this.fighter1.getAttack() / this.fighter2.getDefense()) * 2;
          if (this.fighter2.constructor.name == 'Pokemon') return (this.fighter1.getAttack() / this.fighter2.getDefense()) * 1;
      }
    } else {
      switch (this.fighter2.constructor.name) {
        case 'Pokemon':
          if (this.fighter1.constructor.name == 'Marvel') return (this.fighter2.getAttack() / this.fighter1.getDefense()) * 0.5;
          if (this.fighter1.constructor.name == 'Naruto') return (this.fighter2.getAttack() / this.fighter1.getDefense()) * 2;
        case 'Marvel':
          if (this.fighter1.constructor.name == 'Pokemon') return (this.fighter2.getAttack() / this.fighter1.getDefense()) * 2;
          if (this.fighter1.constructor.name == 'Naruto') return (this.fighter2.getAttack() / this.fighter1.getDefense()) * 1;
        case 'Naruto':
          if (this.fighter1.constructor.name == 'Marvel') return (this.fighter2.getAttack() / this.fighter1.getDefense()) * 2;
          if (this.fighter1.constructor.name == 'Pokemon') return (this.fighter2.getAttack() / this.fighter1.getDefense()) * 1;
      }
    }
    return -1;
  }

  /**
   * Realiza una simulación de un combate por turnos entre 2 contendientes
   * del mismo o de diferentes universos. Dicho combate cuenta con diversas
   * rondas, en cada una de ellas uno de los 2 contricantes realiza daño al otro.
   * La simulación finaliza cuando el daño acumulado por uno de ellos es
   * mayor que el valor de su hp. El primer atacante siempre será el que más
   * velocidad tiene.
   * @param printable Decide si imprimir por pantalla o no el resultado.
   * @returns Contendiente ganador
   */
  public start(printable: boolean = true): Fighter {
    let round: number = 1;
    let isfighter1turn: boolean = true;
    let fighter1hp = this.fighter1.getHP();
    let fighter2hp = this.fighter2.getHP();

    let fighter1Damage: number = 1;
    let fighter2Damage: number = 1;
    let fighter1Phrase: string = '';
    let fighter2Phrase: string = '';
    if (this.fighter1 instanceof Pokemon) {
      fighter1Phrase = new PokemonCatchingPhrase(this.fighter1).catchingPhrase();
      if (this.fighter2 instanceof Pokemon) {
        fighter1Damage = new PokemonFight(this.fighter1).fight(this.fighter2);
        fighter2Damage = new PokemonFight(this.fighter2).fight(this.fighter1);
      } else {
        fighter1Damage = this.fight(1);
        fighter2Damage = this.fight(2);
      }
    } else if (this.fighter1 instanceof Marvel) {
      fighter1Phrase = new MarvelCatchingPhrase(this.fighter1).catchingPhrase();
      if (this.fighter2 instanceof Marvel) {
        fighter1Damage = new MarvelFight(this.fighter1).fight(this.fighter2);
        fighter2Damage = new MarvelFight(this.fighter2).fight(this.fighter1);
      } else {
        fighter1Damage = this.fight(1);
        fighter2Damage = this.fight(2);
      }
    } else if (this.fighter1 instanceof Naruto) {
      fighter1Phrase = new NarutoCatchingPhrase(this.fighter1).catchingPhrase();
      if (this.fighter2 instanceof Naruto) {
        fighter1Damage = new NarutoFight(this.fighter1).fight(this.fighter2);
        fighter2Damage = new NarutoFight(this.fighter2).fight(this.fighter1);
      } else {
        fighter1Damage = this.fight(1);
        fighter2Damage = this.fight(2);
      }
    }

    if (this.fighter2 instanceof Pokemon) fighter2Phrase = new PokemonCatchingPhrase(this.fighter2).catchingPhrase();
    else if (this.fighter2 instanceof Marvel) fighter2Phrase = new MarvelCatchingPhrase(this.fighter2).catchingPhrase();
    else if (this.fighter2 instanceof Naruto) fighter2Phrase = new NarutoCatchingPhrase(this.fighter2).catchingPhrase();

    if (this.fighter2.getSpeed() > this.fighter1.getSpeed()) isfighter1turn = false;

    while (fighter1hp > 0 && fighter2hp > 0) {
      if (printable) {
        console.log(`\nRound ${round}:`);
        console.log(` > [ ${this.fighter1.getName()} ] = ${fighter1hp} (hp)`);
        console.log(` > [ ${this.fighter2.getName()} ] = ${fighter2hp} (hp)`);
      }
      if (isfighter1turn) {
        fighter2hp -= fighter1Damage;
        isfighter1turn = false;
        if (printable) {
          console.log(`\n --> ${this.fighter1.getName()} hits ${this.fighter2.getName()} with ` +
            `${fighter1Damage} of damage.`);
          console.log(fighter1Phrase);
        }
      } else {
        fighter1hp -= fighter2Damage;
        isfighter1turn = true;
        if (printable) {
          console.log(`\n --> ${this.fighter2.getName()} hits ${this.fighter1.getName()} with ` +
            `${fighter2Damage} of damage.`);
          console.log(fighter2Phrase);
        }
      }
      round++;
    }

    let winner: Fighter = this.fighter1;
    if (fighter1hp < 0) {
      fighter1hp = 0;
      winner = this.fighter2;
    } else fighter2hp = 0;

    if (printable) {
      console.log(`\nRound ${round}: ` + `${winner.getName()} wins!!`);
      console.log(` > [ ${this.fighter1.getName()} ]  = ${fighter1hp} (hp)`);
      console.log(` > [ ${this.fighter2.getName()} ]  = ${fighter2hp} (hp)`);
    }
    return winner;
  }
}

const pikachu = new Pokemon('Pikachu', 40, 30, 'electric', {attack: 50, defense: 60, speed: 120, hp: 70}, 0);
const combat = new Combat(pikachu, pikachu);
console.log(pikachu.constructor.name);
console.log(combat.fight(1));