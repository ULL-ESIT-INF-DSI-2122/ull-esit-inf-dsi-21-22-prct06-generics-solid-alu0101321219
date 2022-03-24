import {FighterCatchingPhrase} from '../universe/fightercathingphrase';
import {Pokemon} from './pokemon';

/**
 * Permite obtener la 'catching phrase' de un personaje de Marvel.
 */
export class PokemonCatchingPhrase extends FighterCatchingPhrase {
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
  public catchingPhrase(): string {
    return `${this.pokemon.getName()}, I choose you!`;
  }
}