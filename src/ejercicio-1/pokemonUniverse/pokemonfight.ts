import {Pokemon, PokemonType} from "./pokemon";
import {FighterFight} from "../universe/fighterFight";

/**
 * Define la efectividad del tipo fuego en el caso
 * de realizar un ataque contra los demás tipos.
 * @enum
 */
export enum fire {fire = 0.5, grass = 2, water = 0.5, electric = 1};

/**
   * Define la efectividad del tipo hierba en el caso
   * de realizar un ataque contra los demás tipos.
   * @enum
   */
export enum grass {fire = 0.5, grass = 0.5, water = 2, electric = 1};

/**
   * Define la efectividad del tipo agua en el caso
   * de realizar un ataque contra los demás tipos.
   * @enum
   */
export enum water {fire = 2, grass = 0.5, water = 0.5, electric = 0.5};

/**
   * Define la efectividad del tipo eléctrico en el caso
   * de realizar un ataque contra los demás tipos.
   * @enum
   */
export enum electric {fire = 1, grass = 1, water = 2, electric = 0.5};


/**
 * Permite calcular el daño que un pokémon haría a otro
 * en caso de un combate.
 */
export class PokemonFight extends FighterFight {
  /**
   * Inicializa un objeto de la clase PokemonFight
   * @param pokemon Pokemon
   */
  constructor(private pokemon: Pokemon) {
    super(pokemon);
  }

  /**
   * Simula el daño que un pokémon causaría a otro en caso de un ataque.
   * @param otherPokemon Pokemon rival o contricante.
   * @returns Daño causado al pokémon rival por parte del pokémon atacante.
   */
  fight(otherPokemon: Pokemon): number {
    switch (this.pokemon.getType()) {
      case 'fire':
        return 50 * (this.pokemon.getAttack() / otherPokemon.getDefense()) * fire[otherPokemon.getType() as PokemonType];
      case 'grass':
        return 50 * (this.pokemon.getAttack() / otherPokemon.getDefense()) * grass[otherPokemon.getType() as PokemonType];
      case 'water':
        return 50 * (this.pokemon.getAttack() / otherPokemon.getDefense()) * water[otherPokemon.getType() as PokemonType];
      case 'electric':
        return 50 * (this.pokemon.getAttack() / otherPokemon.getDefense()) * electric[otherPokemon.getType() as PokemonType];
    }
    return -1;
  }
}