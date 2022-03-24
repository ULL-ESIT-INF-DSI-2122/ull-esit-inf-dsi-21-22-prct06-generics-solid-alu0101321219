import {FighterCatchingPhrase} from '../universe/fightercathingphrase';
import {Marvel} from './marvel';

/**
 * Permite obtener la 'catching phrase' de un personaje de Marvel.
 */
export class MarvelCatchingPhrase extends FighterCatchingPhrase {
  /**
   * Inicializa un objeto de la clase `MarvelCatchingPhrase`.
   * @param marvelPJ Personaje de Marvel.
   */
  constructor(private marvelPJ: Marvel) {
    super(marvelPJ);
  }

  /**
   * Devuelve la 'catching phrase' de un personaje de Marvel.
   * @returns Cadena con la 'catching phrase' del personaje de Marvel.
   */
  public catchingPhrase(): string {
    return `I am ${this.marvelPJ.getName()}`;
  }
}