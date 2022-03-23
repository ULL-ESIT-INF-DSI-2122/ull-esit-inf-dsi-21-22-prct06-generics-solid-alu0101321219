import {FighterPrinter} from '../universe/fighterprinter';
import {Naruto} from './naruto';
import {Printable} from '../interfaces';

/**
 * Permite imprimir por pantalla las características de un objeto de la clase
 * Naruto.
 */
export class NarutoPrinter extends FighterPrinter implements Printable {
  /**
   * Inicializa un objeto de la clase `NarutoPrinter`.
   * @param narutoPJ Pokémon.
   */
  constructor(private narutoPJ: Naruto) {
    super(narutoPJ);
  }

  /**
   * Imprime por pantalla de manera formateada la información de un personaje
   * de naruto, incluyendo con ello la información de un contendiente.
   */
  print(): void {
    console.log(`Universe: Naruto`);
    super.print();
    console.log(`Other information: level of chakra = ${this.narutoPJ.getChakra()} %`);
  }
}