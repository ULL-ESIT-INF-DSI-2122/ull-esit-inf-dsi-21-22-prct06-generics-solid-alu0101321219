/**
 * Tipo empleado para definir las estadísticas de un contendiente.
 * Estas son 'ataque', 'defensa', 'velocidad' y 'vida' (hp).
 */
export type Statistics = [['attack', number], ['defense', number],
['speed', number], ['hp', number]];

/**
 * Define una clase abstracta empleada para representar un contendiente
 * de un universo genérico. Su objetivo es ser una superclase de clases
 * como 'Pokemon', 'Marvel', 'DC Comics'...
 */
export abstract class Fighter {
  /**
   * Inicializa un objeto de la clase 'Fighter'.
   * @param name Nombre del contendiente.
   * @param weight Peso del contendiente.
   * @param height Altura del contendiente.
   * @param type Tipo del contendiente.
   * @param statistics Vector de estadísticas del contendiente.
   */
  constructor(public readonly name: string, public readonly weight: number,
    public readonly height: number, public readonly type: string,
    private readonly statistics: Statistics) {}

  /**
   * Devuelve el poder de ataque del contendiente.
   * @returns Nº que representa el poder de ataque del contendiente.
   */
  getAttack(): number {
    return this.statistics[0][1];
  }

  /**
   * Devuelve el poder de defensa del contendiente.
   * @returns Nº que representa el poder de defensa del contendiente.
   */
  getDefense(): number {
    return this.statistics[1][1];
  }

  /**
   * Devuelve la velocidad del contendiente.
   * @returns Nº que representa la velocidad del contendiente.
   */
  getSpeed(): number {
    return this.statistics[2][1];
  }

  /**
   * Devuelve la vida del contendiente.
   * @returns Nº que representa los puntos de vida del contendiente.
   */
  getHP(): number {
    return this.statistics[3][1];
  }
}