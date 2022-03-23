import {SearchableCollection} from "./searchablecollection";

/**
 * Modela una colección de elementos numéricos.
 */
export class StringSearchableCollection extends SearchableCollection<string> {
  /**
   * Instancia un objeto de la clase 'StringSearchableCollection'.
   * @param items Conjunto de items a introducir.
   */
  constructor(...items: string[]) {
    super(...items);
  }

  /**
   * Implementa el método de búsqueda de su clase padre.
   * @param itemToFind Item a buscar
   * @returns Conjunto de items que cumplen dichas características.
   */
  search(itemToFind: string): string[] {
    const result: string[] = [];
    this.collection.forEach((element) => {
      if (element.includes(itemToFind)) result.push(element);
    });
    return result;
  }
}