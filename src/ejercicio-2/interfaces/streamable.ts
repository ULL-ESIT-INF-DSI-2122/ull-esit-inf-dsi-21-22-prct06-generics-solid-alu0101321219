import {SearchableStreamable} from "./searchablestreamable";

/**
 * Especifica las propiedades y métodos con los que debería contar
 * una colección de emisiones concreta (ej: colección de series)
 */
export interface Streamable<T> extends SearchableStreamable<T> {
  /**
   * Devuelve la colleción de emisiones
   * @return Colección completa de emisiones.
   */
  getCollection(): T[];

  /**
   * Comprueba si una determinada emisión se encuentra ya en la colección.
   * @param broadcast Emisión a comprobar.
   * @returns Verdadero si la emisión está en la colección.
   */
  isRegistered(broadcast: T): boolean

  /**
   * Añade una determinada emisión al conjunto de emisiones.
   * @param broadcast Emisión a añadir.
   * @returns Verdadero si se ha añadido correctamente y falso en el caso de
   * que ya estuviera registrada.
   */
  addBroadcast(broadcast: T): boolean;

  /**
   * Elimina una emisión del conjunto si es que se encuentra dentro de él.
   * @param broadcast Emisión a eliminar del conjunto.
   * @returns Verdadero si la emisión se eliminó correctamente, falso en caso
   * de que no existiera dentro del conjunto y por tanto no pudiese ser eliminada.
   */
  removeBroadCast(broadcast: T): boolean;
}