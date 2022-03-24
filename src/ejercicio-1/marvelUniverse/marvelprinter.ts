import {FighterPrinter} from '../universe/fighterprinter';
import {Marvel} from './marvel';

/**
 * Permite imprimir por pantalla las características de un objeto de la clase
 * Marvel.
 */
export class MarvelPrinter extends FighterPrinter {
  /**
   * Inicializa un objeto de la clase `MarvelPrinter`.
   * @param marvelPJ Personaje de Marvel.
   */
  constructor(private marvelPJ: Marvel) {
    super(marvelPJ);
  }

  /**
   * Imprime por pantalla de manera formateada la información de un personaje
   * de Marvel, incluyendo con ello la información de un contendiente.
   */
  public print(): void {
    console.log(`Universe: Marvel`);
    super.print();
    const mask: string = this.marvelPJ.getHasMask()? 'yes' : 'no';
    console.log(`Other information: real name = ${this.marvelPJ.getRealName()}, have mask? ${mask}`);
  }
}