import {Fighter, Statistics} from "../fighter/fighter";
/**
 * Define los diferentes tipos que puede tener un Pokémon.
 * @type
 */
export type PokemonType = "fire" | "grass" | "water" | "electric";

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