import {Fighter} from './fighter';

/**
 * Interfaz empleada para forzar la existencia de un método
 * de impresión por pantalla.
 */
export interface Printable {
  print(): void;
}

/**
 * Permite imprimir por pantalla las características de un objeto
 * de la clase 'Fighter'.
 */
export class FighterPrinter implements Printable {
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
    console.log(`${this.fighter.name}: weight = ${this.fighter.weight},` +
    ` height = ${this.fighter.height}, type = ${this.fighter.type},` +
    ` attack = ${this.fighter.getAttack()},` +
    ` defense = ${this.fighter.getDefense()},` +
    ` speed = ${this.fighter.getDefense()}, hp = ${this.fighter.getHP()}`);
  }
}