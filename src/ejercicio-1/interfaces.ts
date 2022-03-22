/**
 * Interfaz empleada para forzar la existencia de un método
 * de impresión por pantalla.
 */
export interface Printable {
  print(): void;
}

export interface CatchingPhrase {
  catchingPhrase(): string;
}