/**
 * Puntuación en estrellas que puede tener una determinada emisión.
 */
export type Puntuation = 1 | 2 | 3 | 4 | 5;

/**
 * Conjunto de categorías posibles que puede tener una determinada emisión.
 */
export type Category = 'action' | 'animation' | 'anime' | 'adventure' | 'war' |
  'science fiction' | 'comedy' | 'crime' | 'drama' | 'family' | 'fantasy' |
  'history' | 'for children' | 'mistery' | 'music' | 'romance' |
  'superheroes' | 'suspense' | 'terror' | 'sports';

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
  description?: string;

  /**
   * Director/creador de la emisión.
   */
  director: string;

  /**
   * Categorías en las que se puede ubicar dicha emisión.
   */
  categories: Category[];

  /**
   * Año de publicación de la emisión.
   */
  year: number;

  /**
   * Puntuación de la determinada emisión, si es que ha sido puntuada.
   */
  puntuation?: Puntuation;
}