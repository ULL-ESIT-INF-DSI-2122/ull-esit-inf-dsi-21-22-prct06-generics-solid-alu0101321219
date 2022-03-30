/**
 * Clase para generar numeros aleatorios que sigue el patrón de diseño
 * singleton.
 */
export class RandomNumber {
  /**
   * Instancia de la misma clase utilizada para aplicar
   * el patrón singleton.
   */
  private static randomNumber: RandomNumber;

  /**
   * Inicializa un objeto de 'RandomNumber'
   */
  private constructor() {}

  /**
   * Genera instancias de nuestra clase RandomNumber
   * @returns Instancia del la clase RandomNumber.
   */
  public static getRandomNumber(): RandomNumber {
    if (!RandomNumber.randomNumber) {
      RandomNumber.randomNumber = new RandomNumber();
    }
    return RandomNumber.randomNumber;
  }


  /**
   * Genera un número aleatorio en punto flotante entre 1 y 0
   * @returns Número aleatorio entre 1 y 0.
   */
  public getFixedBetween1And0(): number {
    return Math.random();
  }

  /**
   * Genera un número aleatorio en punto flotante entre un rango.
   * @param min Mínimo de rango.
   * @param max Máximo del rango.
   * @returns Número aleatorio dentro del rango.
   */
  public getFixedArbitraryBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Genera un número aleatorio entero entre un rango.
   * @param min Mínimo de rango.
   * @param max Máximo del rango.
   * @returns Número aleatorio dentro del rango.
   */
  public getIntArbitraryBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}