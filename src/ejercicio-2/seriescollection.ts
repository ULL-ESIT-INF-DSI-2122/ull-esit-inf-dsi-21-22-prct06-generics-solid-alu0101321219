import {BasicStreamableCollection} from './basicstreamablecollection';
import {Category, Puntuation} from './interfaces/broadcast';
import {Series} from './interfaces/series';

/**
 * Clase empleada para gestionar una colección de series.
 */

export class SeriesCollection extends BasicStreamableCollection<Series> {
  /**
   * Inicializa un objeto de la clase 'SeriesCollection'. Por defecto,
   * el conjunto de series almacenadas es vacío.
   */
  constructor() {
    super();
  }

  /**
   * Busca un conjunto de series cuyo nombre coincida con el introducido
   * por parámetro.
   * @param name Nombre de la serie.
   * @returns Conjunto de series.
   */
  public searchByName(name: string): Series[] {
    return this.getCollection().filter((serie) => serie.name == name);
  }

  /**
   * Busca un conjunto de series que tengan en común el nombre del director
   * especificado por parámetro.
   * @param name Nombre del director
   * @returns Conjunto de series.
   */
  public searchByDirector(name: string): Series[] {
    return this.getCollection().filter((serie) => serie.director == name);
  }

  /**
   * Busca un conjunto de series que pertenezcan a la categoría indicada
   * por parámetro
   * @param category Categoría.
   * @returns Conjunto de series.
   */
  public searchByCategory(category: Category): Series[] {
    return this.getCollection().filter((serie) => serie.categories.includes(category));
  }

  /**
   * Busca un conjunto de series que tengan como año de publicación el
   * especificado por parámetro.
   * @param year Año de publicación de una serie.
   * @returns Conjunto de series.
   */
  public searchbyYear(year: number): Series[] {
    return this.getCollection().filter((serie) => serie.year == year);
  }

  /**
   * Busca un conjunto de series que tengan en común una puntuación
   * especificada por parámetro.
   * @param puntuation Puntuación.
   * @returns Conjunto de series.
   */
  public searchByPuntuation(puntuation: Puntuation): Series[] {
    return this.getCollection().filter((serie) => serie.puntuation == puntuation);
  }

  /**
   * Busca un conjunto de series que tengan en común el personaje o actor
   * especificado por parámetro.
   * @param name Nombre del personaje o nombre del actor.
   * @returns Conjunto de series.
   */
  public searchByCast(name: string): Series[] {
    return this.getCollection().filter((serie) =>
      serie.actorNames.includes(name) || serie.characterNames.includes(name));
  }
}