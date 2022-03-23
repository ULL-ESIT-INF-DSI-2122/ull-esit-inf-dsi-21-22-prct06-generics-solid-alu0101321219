import {SearchableCollection} from "./searchablecollection";

/**
 * Modela una colección de elementos numéricos.
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
  /**
   * Instancia un objeto de la clase 'NumericSearchableCollection'.
   * @param items Conjunto de items a introducir.
   */
  constructor(...items: number[]) {
    super(...items);
  }

  /**
   * Implementa el método de búsqueda de su clase padre.
   * @param itemToFind Item a buscar
   * @returns COnjunto de items que cumplen dichas características.
   */
  search(itemToFind: number): number[] {
    const result: number[] = [];
    this.collection.forEach((element) => {
      if (element == itemToFind) result.push(element);
    });
    return result;
  }
}