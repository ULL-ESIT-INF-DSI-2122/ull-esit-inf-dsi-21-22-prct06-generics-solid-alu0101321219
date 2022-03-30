import {RandomNumber} from "./randomnumber";

/**
 * Gestiona una colección de números aleatorios.
 */
export class RandomNumberSetCollection implements Iterable<number> {
  /**
   * Conjunto donde almacenar la colección.
   */
  private collection: Set<number>;

  /**
   * Instancia de un número aleatorio.
   */
  private randomNumberInstance: RandomNumber = RandomNumber.getRandomNumber();

  /**
   * Inicializa un objeto de la clase 'RandomNumberSetCollection'
   */
  constructor() {
    this.collection = new Set([]);
  }

  /**
   * Devuelve la colección
   * @returns Colección de numeros aleatorios
   */
  public getCollection(): Set<number> {
    return this.collection;
  }

  /**
   * Añade un numero aleatorio en punto flotante entre 1 y 0
   */
  public addFixedBetween1And0(): void {
    this.collection.add(this.randomNumberInstance.getFixedBetween1And0());
  }

  /**
   * Añade un número aleatorio en punto flotante entre min y max
   * @param min Mínimo
   * @param max Máximo
   */
  public addFixedArbitraryBetween(min: number, max: number): void {
    this.collection.add(this.randomNumberInstance.getFixedArbitraryBetween(min, max));
  }

  /**
   * Añade un número entero entre min y max
   * @param min Minimo
   * @param max Máximo
   */
  public addIntArbitraryBetween(min: number, max: number): void {
    this.collection.add(this.randomNumberInstance.getIntArbitraryBetween(min, max));
  }

  /**
   * Función necesaria para hacer la clase iterable
   * @returns Iterador numérico
   */
  [Symbol.iterator](): Iterator<number> {
    return this.collection.values();
  }
}