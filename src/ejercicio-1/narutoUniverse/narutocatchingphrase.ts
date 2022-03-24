import {FighterCatchingPhrase} from '../universe/fightercathingphrase';
import {Naruto} from './naruto';

/**
 * Permite obtener la 'catching phrase' de un personaje de Naruto.
 */
export class NarutoCatchingPhrase extends FighterCatchingPhrase {
  /**
   * Inicializa un objeto de la clase `NarutoCatchingPhrase`.
   * @param narutoPJ Naruto.
   */
  constructor(private narutoPJ: Naruto) {
    super(narutoPJ);
  }

  /**
   * Devuelve la 'catching phrase' de un personaje de Naruto.
   * @returns Cadena con la 'catching phrase' de un personaje de Naruto.
   */
  public catchingPhrase(): string {
    return `Because that's my ninja way!`;
  }
}