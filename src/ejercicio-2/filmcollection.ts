import {BasicStreamableCollection} from './basicstreamablecollection';
import {Category, Puntuation} from './interfaces/broadcast';
import {Film} from './interfaces/film';

/**
 * Clase empleada para gestionar una colección de películas.
 */

export class FilmCollection extends BasicStreamableCollection<Film> {
  /**
   * Inicializa un objeto de la clase 'FilmCollection'. Por defecto,
   * el conjunto de películas almacenadas es vacío.
   */
  constructor() {
    super();
  }

  /**
   * Busca un conjunto de películas cuyo nombre coincida con el introducido
   * por parámetro.
   * @param name Nombre de la película.
   * @returns Conjunto de películas.
   */
  public searchByName(name: string): Film[] {
    return this.getCollection().filter((film) => film.name == name);
  }

  /**
   * Busca un conjunto de películas que tengan en común el nombre del director
   * especificado por parámetro.
   * @param name Nombre del director
   * @returns Conjunto de películas.
   */
  public searchByDirector(name: string): Film[] {
    return this.getCollection().filter((film) => film.director == name);
  }

  /**
   * Busca un conjunto de películas que pertenezcan a la categoría indicada
   * por parámetro
   * @param category Categoría.
   * @returns Conjunto de películas.
   */
  public searchByCategory(category: Category): Film[] {
    return this.getCollection().filter((film) => film.categories.includes(category));
  }

  /**
   * Busca un conjunto de películas que tengan como año de publicación el
   * especificado por parámetro.
   * @param year Año de publicación de una película.
   * @returns Conjunto de películas.
   */
  public searchbyYear(year: number): Film[] {
    return this.getCollection().filter((film) => film.year == year);
  }

  /**
   * Busca un conjunto de películas que tengan en común una puntuación
   * especificada por parámetro.
   * @param puntuation Puntuación.
   * @returns Conjunto de películas.
   */
  public searchByPuntuation(puntuation: Puntuation): Film[] {
    return this.getCollection().filter((film) => film.puntuation == puntuation);
  }

  /**
   * Busca un conjunto de películas que tengan en común el personaje o actor
   * especificado por parámetro.
   * @param name Nombre del personaje o nombre del actor.
   * @returns Conjunto de películas.
   */
  public searchByCast(name: string): Film[] {
    return this.getCollection().filter((film) =>
      film.actorNames.includes(name) || film.characterNames.includes(name));
  }

  /**
   * Busca un conjunto de películas que tengan en común una duración en minutos
   * específica indicada por parámetro.
   * @param minutes Duración en minutos de una película.
   * @returns Conjunto de películas.
   */
  public searchByDuration(minutes: number): Film[] {
    return this.getCollection().filter((film) => film.durationInMinutes == minutes);
  }
}