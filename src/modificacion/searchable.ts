/**
 * Interfaz genérica empleada para utilizar una función de búsqueda.
 */
export interface Searchable<T> {
  search(itemToFind: T): T[];
}