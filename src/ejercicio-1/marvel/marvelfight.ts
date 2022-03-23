import {Marvel, MarvelType} from "./marvel";
import {FighterFight} from "../fighter/fighterFight";

/**
 * Define la efectividad de un personaje tipo 'avenger' en caso
 * de realizar un ataque contra los demás tipos.
 */
export enum avenger {avenger = 0.5, thanosSupporter = 2, guardianOfTheGalaxy = 0.5};

/**
 * Define la efectividad de un personaje tipo 'thanosSupporter' en caso
 * de realizar un ataque contra los demás tipos.
 */
export enum thanosSupporter {avenger = 1, thanosSupporter = 0.5, guardianOfTheGalaxy = 2};

/**
 * Define la efectividad de un personaje tipo 'guardianOfTheGalaxy' en caso de
 * realizar un ataque contra los demás tipos.
 */
export enum guardianOfTheGalaxy {avenger = 1, thanosSupporter = 0.5, guardianOfTheGalaxy = 0.5};

/**
 * Permite calcular el daño que un personaje de Marvel haría a otro
 * en caso de un combate.
 */
export class MarvelFight extends FighterFight {
  /**
   * Inicializa un objeto de la clase MarvelFight
   * @param marvelPJ Personaje de Marvel
   */
  constructor(private marvelPJ: Marvel) {
    super(marvelPJ);
  }

  /**
   * Simula el daño que haría el personaje de marvel de nuestra clase
   * a otro personaje de marvel en caso de combate.
   * @param otherMarvelPJ Otro personaje de Marvel
   * @returns Daño que causaría el personaje de marvel invocante al que se
   * le introduce por parámetro.
   */
  fight(otherMarvelPJ: Marvel): number {
    switch (this.marvelPJ.getType()) {
      case 'avenger':
        return 50 * (this.marvelPJ.getAttack() / otherMarvelPJ.getDefense()) * avenger[otherMarvelPJ.getType() as MarvelType];
      case 'thanosSupporter':
        return 50 * (this.marvelPJ.getAttack() / otherMarvelPJ.getDefense()) * thanosSupporter[otherMarvelPJ.getType() as MarvelType];
      case 'guardianOfTheGalaxy':
        return 50 * (this.marvelPJ.getAttack() / otherMarvelPJ.getDefense()) * guardianOfTheGalaxy[otherMarvelPJ.getType() as MarvelType];
    }
    return -1;
  }
}

const spiderman = new Marvel("Spiderman", 80, 1.78, 'avenger', {attack: 55, defense: 40, speed: 90, hp: 35}, true);
const marvelFight = new MarvelFight(spiderman);
console.log(marvelFight.fight(spiderman));