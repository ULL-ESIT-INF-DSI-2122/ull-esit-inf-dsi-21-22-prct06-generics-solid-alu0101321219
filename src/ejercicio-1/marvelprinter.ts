import {Printable, FighterPrinter} from './fighterprinter';
import {Marvel} from './marvel';

/**
 * Permite imprimir por pantalla las características de un objeto de la clase
 * Marvel.
 */
export class MarvelPrinter extends FighterPrinter implements Printable {
  /**
   * Inicializa un objeto de la clase `MarvelPrinter`.
   * @param pokemon Pokémon.
   */
  constructor(private marvelPJ: Marvel) {
    super(marvelPJ);
  }

  /**
   * Imprime por pantalla de manera formateada la información de un personaje
   * de marvel, incluyendo con ello la información de un contendiente.
   */
  print(): void {
    console.log(`Universo: Marvel`);
    super.print();
    const mask: string = this.marvelPJ.haveMask? 'yes' : 'no';
    console.log(`Other information: real name = ${this.marvelPJ.realName}, have mask? ${mask}`);
  }
}

const spiderman = new Marvel("Spiderman", 80, 1.78, '???', [['attack', 55], ['defense', 40], ['speed', 90], ['hp', 35]], 'Peter Parker', true);
const spidermanPrint = new MarvelPrinter(spiderman);
spidermanPrint.print();