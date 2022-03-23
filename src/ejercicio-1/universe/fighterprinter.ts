import {Fighter} from './fighter';
import {Printable} from '../interfaces';

/**
 * Permite imprimir por pantalla las características de un objeto
 * de la clase 'Fighter'.
 */
export abstract class FighterPrinter implements Printable {
  /**
   * Inicializa un objeto de la clase `FighterPrinter`.
   * @param fighter Contendiente.
   */
  constructor(private fighter: Fighter) {}

  /**
    * Imprime por pantalla de forma formateada la información de un
    * contendiente (nombre, peso, altura, tipo y estadísticas).
    */
  print(): void {
    console.log(`${this.fighter.getName()}: weight = ${this.fighter.getWeight()},` +
    ` height = ${this.fighter.getHeight()}, type = ${this.fighter.getType()},` +
    ` attack = ${this.fighter.getAttack()},` +
    ` defense = ${this.fighter.getDefense()},` +
    ` speed = ${this.fighter.getDefense()}, hp = ${this.fighter.getHP()}`);
  }
}