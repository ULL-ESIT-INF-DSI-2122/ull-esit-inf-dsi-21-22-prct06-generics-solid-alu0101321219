import {Fighter} from './fighter';
import {CatchingPhrase} from '../interfaces';

/**
 * Permite obtener la 'catching phrase' de un contendiente.
 */
export abstract class FighterCatchingPhrase implements CatchingPhrase {
  /**
   * Inicializa un objeto de la clase `FighterPrinter`.
   * @param fighter Contendiente.
   */
  constructor(private fighter: Fighter) {}

  /**
   * Método abstracto que devuelve la 'catchingPhrase'
   * de un contendiente.
   * @returns Cadena con la 'catching phrase' del contendiente
   */
  abstract catchingPhrase(): string;
}