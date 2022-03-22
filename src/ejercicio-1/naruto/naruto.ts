import {Fighter, Statistics} from "../fighter/fighter";
/**
 * Define los diferentes tipos que puede tener un Pokémon.
 * @type
 */
export type NarutoType = "uzumaki" | " uchija" | "hyuga" | "senju";

export enum uzumaki {uzumaki = 0.5, uchija = 0.5, hyuga = 2, senju = 1};
export enum uchija {uzumaki = 2, uchija = 0.5, hyuga = 1, senju = 0.5};
export enum hyuga {uzumaki = 0.5, uchija = 1, hyuga = 0.5, senju = 2};
export enum senju {uzumaki = 1, uchija = 2, hyuga = 0.5, senju = 0.5};


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
  setChackra(chackra: number): void {
    this.chakra = chackra;
  }

  /**
   * Devuelve el nivel de chackra de un personaje de Naruto
   * @returns Número que representa el nivel de Chakra de un personaje de Naruto.
   */
  getChakra(): number {
    return this.chakra;
  }
}