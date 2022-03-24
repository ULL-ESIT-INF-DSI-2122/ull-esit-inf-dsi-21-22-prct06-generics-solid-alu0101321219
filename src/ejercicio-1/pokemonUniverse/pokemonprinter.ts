import {FighterPrinter} from '../universe/fighterprinter';
import {Pokemon} from './pokemon';

/**
 * Permite imprimir por pantalla las características de un objeto de la clase
 * Pokémon.
 */
export class PokemonPrinter extends FighterPrinter {
  /**
   * Inicializa un objeto de la clase `PokemonPrinter`.
   * @param pokemon Pokémon.
   */
  constructor(private pokemon: Pokemon) {
    super(pokemon);
  }

  /**
   * Imprime por pantalla de manera formateada la información de un pokémon,
   * incluyendo con ello la información de un contendiente.
   */
  public print(): void {
    console.log(`Universe: Pokémon`);
    super.print();
    console.log(`Other information: id = ${this.pokemon.getId()}`);
  }
}