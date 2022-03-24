/**
 * Especifica las propiedades y métodos con los que debería contar
 * una colección de emisiones concreta (ej: colección de series)
 */
export interface Streamable<T> {
  /**
   * Atributo para almacenar la colección de emisiones.
   */
  collection: T[];

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

  /**
   * Permite buscar un conjunto de emisiones concretas a través de su nombre.
   * @param name Nombre de la emision a buscar.
   * @returns Subconjunto de emisiones que poseen ese nombre.
   */
  searchByName(name: string): T[];

  /**
   * Permite buscar un conjunto de emisiones concreta a partir de su año de
   * publicación.
   * @param year Año de publicación de una emisión.
   * @returns Subconjunto de emisiones con dicho año de publicación.
   */
  searchbyYear(year: number): T[];

  /**
   * Permite buscar un conjunto de emisiones concreta a partir de una categoría
   * especificada por parámetro.
   * @param category Categoría a especificar.
   * @returns Subconjunto de emisiones que cumplen dicha categoría.
   */
  searchByCategory(category: string): T[];
}