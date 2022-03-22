import {Fighter, Statistics} from "./fighter";
/**
 * Define los diferentes tipos que puede tener un personaje de Marvel.
 * @type
 */
export type marvelType = "???";

/**
  * Representa un personaje de Marvel.
  */
export class Marvel extends Fighter {
  /**
    * Inicializa un objeto de la clase Marvel.
    * @param name Nombre del personaje de marvel.
    * @param weight Peso del personaje de marvel.
    * @param height Altura del personaje de marvel.
    * @param type Tipo del personaje de marvel.
    * @param statistics Estadísticas del personaje de marvel: ataque, defensa, velocidad y vida (hp)
    * @param city Ciudad donde vive el personaje.
    * @param haveMask Indica si es un personaje enmascarado.
    */
  constructor(name: string, weight: number, height: number, type: marvelType,
      statistics: Statistics, public readonly realName: string, public haveMask: boolean) {
    super(name, weight, height, type, statistics);
  }
}