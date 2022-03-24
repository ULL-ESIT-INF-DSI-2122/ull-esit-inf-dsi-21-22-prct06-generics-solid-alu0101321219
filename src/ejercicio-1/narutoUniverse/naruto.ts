import {Fighter, Statistics} from "../universe/fighter";
/**
 * Define los diferentes tipos que puede tener un Pokémon.
 * @type
 */
export type NarutoType = "uzumaki" | "uchija" | "hyuga" | "senju";

/**
  * Representa un personaje de Naruto.
  */
export class Naruto extends Fighter {
  /**
    * Inicializa un objeto de la clase Naruto
    * @param name Nombre del personaje de Naruto.
    * @param weight Peso del personaje de Naruto.
    * @param height Altura del personaje de Naruto.
    * @param type Clan del personaje de Naruto.
    * @param statistics Estadísticas del personaje de Naruto: ataque, defensa, velocidad y vida (hp)
    * @param chakra Nivel de chackra del personaje de Naruto.
    */
  constructor(name: string, weight: number, height: number, type: NarutoType,
      statistics: Statistics, private chakra: number) {
    super(name, weight, height, type, statistics);
  }

  /**
   * Establece el nivel de un personaje de Naruto
   * @param chackra Nivel de chakra a establecer.
   */
  public setChackra(chackra: number): void {
    this.chakra = chackra;
  }

  /**
   * Devuelve el nivel de chackra de un personaje de Naruto
   * @returns Número que representa el nivel de Chakra de un personaje de Naruto.
   */
  public getChakra(): number {
    return this.chakra;
  }
}