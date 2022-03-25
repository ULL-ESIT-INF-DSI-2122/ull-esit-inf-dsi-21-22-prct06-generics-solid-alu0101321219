import {Category, Puntuation} from "./broadcast";

/**
 * Especifica los métodos de búsqueda que debería tener una colección
 * de emisiones genérica.
 */
export interface SearchableStreamable<T> {
  /**
   * Permite buscar un conjunto de emisiones concretas a través de su nombre.
   * @param name Nombre de la emision a buscar.
   * @returns Subconjunto de emisiones que poseen ese nombre.
   */
   searchByName(name: string): T[];

   /**
    * Permite buscar un conjunto de emisiones concretas a través del director
    * o creador que las produjo.
    * @param name Nombre del director
    */
   searchByDirector(name: string): T[];

   /**
    * Permite buscar un conjunto de emisiones concreta a partir de una categoría
    * especificada por parámetro.
    * @param category Categoría a especificar.
    * @returns Subconjunto de emisiones que cumplen dicha categoría.
    */
    searchByCategory(category: Category): T[];

   /**
    * Permite buscar un conjunto de emisiones concreta a partir de su año de
    * publicación.
    * @param year Año de publicación de una emisión.
    * @returns Subconjunto de emisiones con dicho año de publicación.
    */
   searchByYear(year: number): T[];

   /**
    * Permite buscar un conjunto de emisiones concreta a partir de una
    * determinada puntuación.
    * @param puntuation Puntuación de las emisiones a buscar.
    * @returns Subconjunto de emisiones con dicho número de puntuación.
    */
   searchByPuntuation(puntuation: Puntuation): T[];

   /**
    * Permite buscar un conjunto de emisiones concreta a partir del nombre
    * de algún personaje o de alguna persona del casting de la misma.
    * @param name Nombre del persona o personaje presente en la emisión.
    */
   searchByCast(name: string): T[];
}