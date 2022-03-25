import {BasicStreamableCollection} from './basicstreamablecollection';
import {Category, Puntuation} from './interfaces/broadcast';
import {Documentary} from './interfaces/documentary';

/**
 * Clase empleada para gestionar una colección de documentales.
 */

export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
  /**
   * Inicializa un objeto de la clase 'DocumentaryCollection'. Por defecto,
   * el conjunto de documentales almacenado es vacío.
   */
  constructor() {
    super();
  }

  /**
   * Busca un conjunto de documentales cuyo nombre coincida con el introducido
   * por parámetro.
   * @param name Nombre del documental.
   * @returns Conjunto de documentales.
   */
  public searchByName(name: string): Documentary[] {
    return this.getCollection().filter((documentary) => documentary.name == name);
  }

  /**
   * Busca un conjunto de documentales que tengan en común el nombre del director
   * especificado por parámetro.
   * @param name Nombre del director
   * @returns Conjunto de documentales.
   */
  public searchByDirector(name: string): Documentary[] {
    return this.getCollection().filter((documentary) => documentary.director == name);
  }

  /**
   * Busca un conjunto de documentales que pertenezcan a la categoría indicada
   * por parámetro
   * @param category Categoría.
   * @returns Conjunto de documentales.
   */
  public searchByCategory(category: Category): Documentary[] {
    return this.getCollection().filter((documentary) => documentary.categories.includes(category));
  }

  /**
   * Busca un conjunto de documentales que tengan como año de publicación el
   * especificado por parámetro.
   * @param year Año de publicación de una .
   * @returns Conjunto de documentales.
   */
  public searchbyYear(year: number): Documentary[] {
    return this.getCollection().filter((documentary) => documentary.year == year);
  }

  /**
   * Busca un conjunto de documentales que tengan en común una puntuación
   * especificada por parámetro.
   * @param puntuation Puntuación.
   * @returns Conjunto de documentales.
   */
  public searchByPuntuation(puntuation: Puntuation): Documentary[] {
    return this.getCollection().filter((documentary) => documentary.puntuation == puntuation);
  }

  /**
   * Busca un conjunto de documentales que tengan en común una persona del
   * casting cuyo nombre se especifica por parámetro.
   * @param name Nombre de persona del casting.
   * @returns Conjunto de documentales.
   */
  public searchByCast(name: string): Documentary[] {
    return this.getCollection().filter((documentary) =>
      documentary.castNames.includes(name));
  }

  /**
   * Busca un conjunto de documentales que tengan en común un tópico que se
   * especifica por parámetro.
   * @param topic Tópico de un documental.
   * @returns Conjunto de documentales.
   */
  public searchByTopic(topic: string): Documentary[] {
    return this.getCollection().filter((documentary) => documentary.topic == topic);
  }

  /**
   * Busca un conjunto de documentales que tengan en común el mismo numero de
   * temporadas que se especifica por parámetro.
   * @param numberOfSeasons Número de temporadas.
   * @returns Conjunto de series.
   */
  public searchByNumberOfSeasons(numberOfSeasons: number): Documentary[] {
    return this.getCollection().filter((documentary) => documentary.numberOfSeasons == numberOfSeasons);
  }
}