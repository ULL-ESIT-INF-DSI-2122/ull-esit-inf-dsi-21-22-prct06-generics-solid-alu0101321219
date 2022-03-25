import {Broadcast} from './broadcast';

/**
 * Recoge las características que tendría una serie dentro de una plataforma
 * de video en streaming. Esta hereda las características que tendría una
 * emisión genérica.
 */
export interface Series extends Broadcast{
  /**
   * Nombre de los personajes de la serie.
   */
   characterNames: string[];

   /**
    * Nombre de los actores de la serie.
    */
   actorNames: string[];

  /**
   * Número de temporadas con las que cuenta una determinada
   * serie.
   */
   numberOfSeasons: number;

   /**
    * Número de capítulos que tiene una determinada temporada.
    * @param season Temporada.
    */
   seasonNumberOfChapters(season: number): number;
}