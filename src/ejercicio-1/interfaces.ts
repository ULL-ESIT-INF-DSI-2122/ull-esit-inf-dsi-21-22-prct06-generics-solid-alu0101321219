/**
 * Interfaz empleada para forzar la existencia de un método
 * de impresión por pantalla.
 */
export interface Printable {
  /**
   * Imprime por pantalla las características de un objeto, en nuestro caso
   * de un contendiente.
   */
  print(): void;
}

/**
 * Interfaz empleada para forzar la existencia de una 'catching phrase'
 * para cada uno de los contendientes de nuestro universo.
 */
export interface CatchingPhrase {
  /**
   * Devuelve una cadena con la 'catching phrase' de un determinado contendiente
   * de nuestro universo.
   * @returns Cadena con la 'catching phrase' correspondiente.
   */
  catchingPhrase(): string;
}