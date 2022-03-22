import {FighterCatchingPhrase} from '../fighter/fightercathingphrase';
import {Pokemon} from './pokemon';
import {CatchingPhrase} from '../interfaces';

/**
 * Permite obtener la 'catching phrase' de un personaje de Marvel.
 */
export class PokemonCatchingPhrase extends FighterCatchingPhrase implements CatchingPhrase {
  /**
   * Inicializa un objeto de la clase `PokemonCatchingPhrasse`.
   * @param pokemon Pokémon.
   */
  constructor(private pokemon: Pokemon) {
    super(pokemon);
  }

  /**
   * Devuelve la 'catching phrase' de un pokémon.
   * @returns Cadena con la 'catching phrase' del pokémon.
   */
  catchingPhrase(): string {
    return `${this.pokemon.getName()}, I choose you!`;
  }
}