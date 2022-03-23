import {Collectable} from "./collectable";
import {Searchable} from "./searchable";

/**
 * Clase abstracta genérica que implementa las interfaces genéricas Collectable
 * y Searchable.
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  /**
   * Vector de tipo genérico que almacena los distintos items.
   */
  protected collection: T[] = [];

  /**
   * Inicializa un objeto de la clase 'SearchableCollection'.
   * @param items Conjunto de items con los que inicializar la colección.
   */
  constructor(...items: T[]) {
    items.forEach((element) => {
      this.collection.push(element);
    });
  }

  /**
   * Introduce un objeto de tipo <T> a nuestra colleción.
   * @param item Objeto a introducir.
   */
  addItem(item: T): void {
    this.collection.push(item);
  }

  /**
   * Devuelve, si es que existe, un determinado item de acuerdo
   * a un índice introducido por parámetro.
   * @param index Índice donde se encuentra el objeto a buscar.
   * @returns El objeto tipo <T>, salvo en caso de que no se encuentre definido.
   * (que retornaría 'undefined').
   */
  getItem(index: number): T | undefined {
    if (index >= 0 && index < this.collection.length) return this.collection[index];
    return undefined;
  }

  /**
   * Elimina, si es que existe, el elemento pasado por parámetro
   * de la colección.
   * @param item Elemento a eliminar.
   */
  removeItem(item: T): void {
    const index = this.collection.indexOf(item);
    if (index > -1) this.collection.splice(index, 1);
  }

  /**
   * Calcula el número de elementos de la colección.
   * @returns Número de elementos de nuestra colección.
   */
  getNumberOfItems(): number {
    return this.collection.length;
  }

  /**
   * Busca un determinado item de tipo <T> y devuelve el subconjunto de
   * elementos de la colección que tengan las mismas características que
   * dicho item.
   * @param itemToFind Elemento a buscar
   * @returns Array con la colección de los elementos del conjunto que
   * tienen las mismas características que el elemento a buscar.
   */
  abstract search(itemToFind: T): T[];

  /**
   * Imprime por pantalla la colección.
   */
  print() {
    console.log(this.collection);
  }
}