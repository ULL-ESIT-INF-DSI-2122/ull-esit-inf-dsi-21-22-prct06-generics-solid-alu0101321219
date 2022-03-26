/**
 * Clase abstracta empleada principalmente para operaciones de
 * codificación y decodificación de mensajes de tipo genérico.
 */
export abstract class Cipher<T> {
  /**
   * Inicializa un objeto de la clase 'Cipher'
   * @param alphabet Alfabeto de entrada
   * @param key Clave empleada para la codificación
   */
  constructor(private alphabet: T, private key: T) {}

  /**
   * Devuelve el alfabeto
   * @returns Alfabeto
   */
  public getAlphabet(): T {
    return this.alphabet;
  }

  /**
   * Establece un nuevo alfabeto.
   * @param alphabet Nuevo alfabeto
   */
  public setAlphabet(alphabet: T): void {
    this.alphabet = alphabet;
  }

  /**
   * Devuelve la clave
   * @returns Clave
   */
  public getKey(): T {
    return this.key;
  }

  /**
   * Establece una nueva clave.
   * @param key Nueva clave
   */
  public setKey(key: T): void {
    this.key = key;
  }

  /**
   * Devuelve la codificación de un mensaje introducido por parámetro.
   * @param message Mensaje a codificar.
   */
  public abstract encode(message: T): T;

  /**
   * Devuelve la decodificación de un mensaje introducido por parámetro.
   * @param message Mensaje a decodificar.
   */
  public abstract decode(message: T): T;
}