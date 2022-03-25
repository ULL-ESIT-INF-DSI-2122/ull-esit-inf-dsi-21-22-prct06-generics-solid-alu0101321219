import {Broadcast} from './broadcast';

/**
 * Recoge las características que tendría una película dentro de una plataforma
 * de video en streaming. Esta hereda las características que tendría una
 * emisión genérica.
 */
export interface Film extends Broadcast {
  /**
   * Duración de la película.
   */
  durationInMinutes: number;

  /**
   * Nombre de los personajes de la película.
   */
  characterNames: string[];

  /**
   * Nombre de los actores de la película.
   */
  actorNames: string[];
}