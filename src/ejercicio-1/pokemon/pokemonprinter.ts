import {FighterPrinter} from '../fighter/fighterprinter';
import {Pokemon} from './pokemon';
import {Printable} from '../interfaces';

/**
 * Permite imprimir por pantalla las características de un objeto de la clase
 * Pokémon.
 */
export class PokemonPrinter extends FighterPrinter implements Printable {
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
  print(): void {
    console.log(`Universe: Pokémon`);
    super.print();
    console.log(`Other information: id = ${this.pokemon.getId()}`);
  }
}

const pikachu = new Pokemon(0, "Pikachu", 30, 30, 'electric', {attack: 55, defense: 40, speed: 90, hp: 35});
const pikachuprinter = new PokemonPrinter(pikachu);
pikachuprinter.print();