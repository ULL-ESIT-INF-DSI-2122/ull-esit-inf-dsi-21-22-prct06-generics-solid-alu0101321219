/**
 * Interfaz genérica que define métodos para trabajar con
 * 'items'.
 */
export interface Collectable<T> {
  addItem(item: T): void;
  getItem(index: number): T | undefined;
  removeItem(item: T): void;
  getNumberOfItems(): number;
}