import {Naruto, NarutoType} from './naruto';
import {FighterFight} from '../fighter/fighterFight';

/**
 * Define la efectividad de un personaje del clan 'uzumaki' en caso
 * de realizar un ataque contra los demás tipos.
 */
export enum uzumaki {uzumaki = 0.5, uchija = 0.5, hyuga = 2, senju = 1};

/**
 * Define la efectividad de un personaje del clan 'uchija' en caso
 * de realizar un ataque contra los demás tipos.
 */
export enum uchija {uzumaki = 2, uchija = 0.5, hyuga = 1, senju = 0.5};

/**
 * Define la efectividad de un personaje del clan 'hyuga' en caso
 * de realizar un ataque contra los demás tipos.
 */
export enum hyuga {uzumaki = 0.5, uchija = 1, hyuga = 0.5, senju = 2};

/**
 * Define la efectividad de un personaje del clan 'senju' en caso
 * de realizar un ataque contra los demás tipos.
 */
export enum senju {uzumaki = 1, uchija = 2, hyuga = 0.5, senju = 0.5};

/**
 * Permite calcular el daño que un personaje de Naruto haría a otro en
 * caso de combate.
 */
export class NarutoFight extends FighterFight {
  /**
   * Inicializa un objeto de la clase 'NarutoFight'.
   * @param narutoPJ Personaje de Naruto.
   */
  constructor(private narutoPJ: Naruto) {
    super(narutoPJ);
  }

  /**
   * Simula el daño que le haría el personaje de Naruto de nuestra clase
   * a otro personaje de Naruto en caso de establecer un combate.
   * @param otherNarutoPJ Personaje de Naruto rival
   * @returns Daño causado por nuestro personaje de Naruto al personaje de Naruto
   * rival.
   */
  fight(otherNarutoPJ: Naruto): number {
    switch (this.narutoPJ.getType()) {
      case 'uzumaki':
        return 50 * (this.narutoPJ.getAttack() / otherNarutoPJ.getDefense()) * uzumaki[otherNarutoPJ.getType() as NarutoType];
      case 'uchija':
        return 50 * (this.narutoPJ.getAttack() / otherNarutoPJ.getDefense()) * uchija[otherNarutoPJ.getType() as NarutoType];
      case 'hyuga':
        return 50 * (this.narutoPJ.getAttack() / otherNarutoPJ.getDefense()) * hyuga[otherNarutoPJ.getType() as NarutoType];
      case 'senju':
        return 50 * (this.narutoPJ.getAttack() / otherNarutoPJ.getDefense()) * senju[otherNarutoPJ.getType() as NarutoType];
    }
    return -1;
  }
}