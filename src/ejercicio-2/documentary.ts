import {Broadcast} from './broadcast';

/**
 * Recoge las características que tendría un documental dentro de una plataforma
 * de video en streaming. Esta hereda las características que tendría una
 * emisión genérica.
 */
export interface Documentary extends Broadcast {
  /**
   * Tópico del documental: Aliens, sucesos paranormales, animales...
   */
  topic: string;

  /**
   * Reparto: Nombre de la personas que participaron en el documental.
   */
  castNames: string[];

  /**
   * Número de temporadas con las que cuenta un determinado
   * documental.
   */
  numberOfSeasons: number;

  /**
   * Número de capítulos que tiene una determinada temporada.
   * @param season Temporada.
   */
  seasonNumberOfChapters(season: number): number;
}