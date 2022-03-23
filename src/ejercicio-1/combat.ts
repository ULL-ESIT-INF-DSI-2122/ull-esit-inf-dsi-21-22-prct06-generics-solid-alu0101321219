import {Fighter} from "./fighter/fighter";

/**
 * Clase empleada para realizar la simulación de un combate
 * entre 2 contendientes.
 */
class Combat {
  /**
   * Inicializa un objeto de la clase Combat
   * @param fighter1 Contendiente nº 1
   * @param fighter2 Contendiente nº 2
   */
  constructor(private fighter1: Fighter, private fighter2: Fighter) {}

  getFighter1(): Fighter {
    return this.fighter1;
  }

  getFighter2(): Fighter {
    return this.fighter2;
  }

  setFighter1(fighter: Fighter): void {
    this.fighter1 = fighter;
  }

  setFighter2(fighter: Fighter): void {
    this.fighter2 = fighter;
  }
}