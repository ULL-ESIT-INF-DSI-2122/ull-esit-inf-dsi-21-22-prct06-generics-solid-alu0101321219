import {Fighter, Statistics} from "../universe/fighter";
/**
 * Define los diferentes tipos que puede tener un personaje de Marvel.
 * @type
 */
export type MarvelType = "avenger" | "thanosSupporter" | "guardianOfTheGalaxy";

/**
  * Representa un personaje de Marvel.
  */
export class Marvel extends Fighter {
  /**
   * Inicializa un objeto de la clase Marvel
   * @param name Nombre del personaje de Marvel
   * @param weight Peso del personaje de Marvel.
   * @param height Altura del personaje de Marvel.
   * @param type Facción del personaje de Marvel
   * @param statistics Estadísticas del personaje de marvel.
   * @param hasMask Si es un personaje enmascarado o no.
   * @param realName Nombre real del personaje. Si no se define es su nombre
   *        de personaje.
   */
  constructor(name: string, weight: number, height: number, type: MarvelType,
      statistics: Statistics, private hasMask: boolean, private readonly realName?: string) {
    super(name, weight, height, type, statistics);
    if (!realName) this.realName = this.getName();
  }

  /**
   * Establece si un personaje de Marvel es o no enmascarado.
   * @param hasMask 'True' si tiene máscara, 'False' en caso contrario.
   */
  setHasMask(hasMask: boolean): void {
    this.hasMask = hasMask;
  }

  /**
   * Comprueba si un personaje es o no enmascarado.
   * @returns 'True' si lleva máscara.
   */
  getHasMask(): boolean {
    return this.hasMask;
  }

  /**
   * Devuelve el nombre real de un personaje de marvel.
   * @returns Nombre real del personaje de marvel
   */
  getRealName(): string | undefined {
    return this.realName;
  }
}