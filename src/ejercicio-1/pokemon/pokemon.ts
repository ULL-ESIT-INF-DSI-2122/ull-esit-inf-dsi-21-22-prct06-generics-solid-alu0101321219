import {Fighter, Statistics} from "../fighter/fighter";
/**
 * Define los diferentes tipos que puede tener un Pokémon.
 * @type
 */
export type pokemonType = "fire" | "grass" | "water" | "electric";

/**
  * Representa un Pokémon.
  */
export class Pokemon extends Fighter {
  /**
    * Inicializa un objeto de la clase Pokemon.
    * @param id Identificador numérico único del pokémon.
    * @param name Nombre del pokémon.
    * @param weight Peso del pokémon.
    * @param height Altura del pokémon.
    * @param type Tipo del pokemon.
    * @param statistics Estadísticas del pokémon: ataque, defensa, velocidad y vida (hp)
    */
  constructor(private readonly id: number, name: string, weight: number, height: number, type: pokemonType,
      statistics: Statistics) {
    super(name, weight, height, type, statistics);
  }

  /**
   * Devuelve el id (identificador único) del pokémon
   * @returns Número que representa el identificador del pokémon
   */
  getId(): number {
    return this.id;
  }

  /**
   * Devuelve la 'catching phrase' de un pokémon.
   * @returns Cadena con la 'catching phrase' del pokémon.
   */
  catchingPhrase(): string {
    return `${this.getName()}, I choose you!`;
  }
}