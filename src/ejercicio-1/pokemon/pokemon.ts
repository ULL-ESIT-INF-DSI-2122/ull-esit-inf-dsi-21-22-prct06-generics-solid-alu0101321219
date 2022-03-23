import {Fighter, Statistics} from "../fighter/fighter";
/**
 * Define los diferentes tipos que puede tener un Pokémon.
 * @type
 */
export type PokemonType = "fire" | "grass" | "water" | "electric";

/**
  * Representa un Pokémon.
  */
export class Pokemon extends Fighter {
  /**
    * Inicializa un objeto de la clase Pokemon.
    * @param name Nombre del pokémon.
    * @param weight Peso del pokémon.
    * @param height Altura del pokémon.
    * @param type Tipo del pokemon.
    * @param statistics Estadísticas del pokémon.
    * @param id Identificador numérico único del pokémon.
    */
  constructor(name: string, weight: number, height: number, type: PokemonType,
      statistics: Statistics, private readonly id: number) {
    super(name, weight, height, type, statistics);
  }

  /**
   * Devuelve el id (identificador único) del pokémon
   * @returns Número que representa el identificador del pokémon
   */
  getId(): number {
    return this.id;
  }
}