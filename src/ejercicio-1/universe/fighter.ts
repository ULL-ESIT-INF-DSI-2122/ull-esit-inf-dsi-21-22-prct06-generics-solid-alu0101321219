/**
 * Alias de tipo objeto empleado para definir las estadísticas de un contendiente.
 * Estas son 'ataque', 'defensa', 'velocidad' y 'vida' (hp).
 */
export type Statistics = {
  attack: number;
  defense: number;
  speed: number;
  hp: number;
}

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
  constructor(private readonly name: string, private readonly weight: number,
    private readonly height: number, private readonly type: string,
    private readonly statistics: Statistics) {}

  /**
   * Devuelve el nombre del contendiente
   * @returns Cadena con el nombre del contendiente.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Devuelve el peso del contendiente
   * @returns Nº que representa el peso del contendiente.
   */
  public getWeight(): number {
    return this.weight;
  }

  /**
   * Devuelve la altura del contendiente
   * @returns Nº que representa la altura del contendiente.
   */
  public getHeight(): number {
    return this.height;
  }

  /**
   * Devuelve el tipo del contendiente
   * @returns Nº que representa el tipo del contendiente.
   */
  public getType(): string {
    return this.type;
  }

  /**
   * Devuelve el poder de ataque del contendiente.
   * @returns Nº que representa el poder de ataque del contendiente.
   */
  public getAttack(): number {
    return this.statistics.attack;
  }

  /**
   * Devuelve el poder de defensa del contendiente.
   * @returns Nº que representa el poder de defensa del contendiente.
   */
  public getDefense(): number {
    return this.statistics.defense;
  }

  /**
   * Devuelve la velocidad del contendiente.
   * @returns Nº que representa la velocidad del contendiente.
   */
  public getSpeed(): number {
    return this.statistics.speed;
  }

  /**
   * Devuelve la vida del contendiente.
   * @returns Nº que representa los puntos de vida del contendiente.
   */
  public getHP(): number {
    return this.statistics.hp;
  }
}