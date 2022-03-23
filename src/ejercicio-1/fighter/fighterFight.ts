import {Fighter} from './fighter';

/**
 * Permite calcular el daño que un contendiente (fighter) haría a otro
 * en caso de establecer un combate.
 */
export abstract class FighterFight {
  /**
   * Inicializa un objeto de la clase `FighterFight`.
   * @param fighter Contendiente.
   */
  constructor(private fighter: Fighter) {}

  /**
   * Simula el daño que un contendiente haría a otro en caso de combate.
   * @param otherFighter Contendiente rival
   * @returns Daño que el contendiente haría a otro contendiente.
   */
  abstract fight(otherFighter: Fighter): number;
}