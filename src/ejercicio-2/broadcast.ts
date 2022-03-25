/**
 * Recoge las características que tendría una emisión cualquiera de una
 * plataforma de video en streaming.
 */
export interface Broadcast {
  /**
   * Nombre de la emisión
   */
  name: string;

  /**
   * Descripción de la emisión.
   */
  description: string;

  /**
   * Director/creador de la emisión.
   */
  director: string;

  /**
   * Categorías en las que se puede ubicar dicha emisión.
   */
  categories: string[];

  /**
   * Año de publicación de la emisión.
   */
  year: string;
}